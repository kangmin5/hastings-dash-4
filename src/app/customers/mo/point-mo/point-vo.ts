import { CarAtom, CarBuilder, CarDto } from 'app/customers/atom/car-atom'
import { ReserveAtom, ReserveBuilder, ReserveDto } from 'app/customers/atom/reserve-atom'

export class PointVo {
  constructor(public car?: CarAtom,
    public reserve?: ReserveAtom,
    ) {}
}

export class PointTo {
  protected car?: CarDto
  protected reserve?: ReserveDto

  setCar(car: CarAtom): void {
    this.car = new CarBuilder().transform()
  }
  setReserve(reserve: ReserveAtom): void {
    this.reserve = new ReserveBuilder().transform()
  }
  toJson() {
    return {
      car: this.car.toJson(),
      reserve: this.reserve.toJson()
    }
  }
}
export class PointBo {
  private readonly instance: PointVo

  constructor() {
    this.instance = {
      car: new CarAtom(),
      reserve: new ReserveAtom()
    }
  }

  build(): PointVo {
    return this.instance
  }
  transform(): PointTo {
    const to = new PointTo()
    to.setCar(this.instance.car)
    to.setReserve(this.instance.reserve)
    return to
  }
}

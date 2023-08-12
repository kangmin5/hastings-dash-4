import { CarAtom, CarBuilder, CarDto } from 'app/customers/atom/car-atom'

export class MemberVo {
  constructor(public car?: CarAtom) {}
}

export class MemberTo {
  protected car?: CarDto

  setCar(car: CarAtom): void {
    this.car = new CarBuilder().transform()
  }
  toJson() {
    return {
      car: this.car.toJson()
    }
  }
}
export class MemberBo {
  private readonly instance: MemberVo

  constructor() {
    this.instance = {
      car: new CarAtom()
    }
  }

  car(car: CarAtom): MemberBo {
    this.instance.car = car
    return this
  }

  build(): MemberVo {
    return this.instance
  }
  transform(): MemberTo {
    const to = new MemberTo()
    to.setCar(this.instance.car)
    return to
  }
}

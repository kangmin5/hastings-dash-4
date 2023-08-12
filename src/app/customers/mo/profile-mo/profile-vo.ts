import { CarAtom, CarBuilder, CarDto } from 'app/customers/atom/car-atom'

export class ProfileVo {
  constructor(public car?: CarAtom) {}
}

export class ProfileTo {
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
export class ProfileBo {
  private readonly instance: ProfileVo

  constructor() {
    this.instance = {
      car: new CarAtom()
    }
  }

  car(car: CarAtom): ProfileBo {
    this.instance.car = car
    return this
  }

  build(): ProfileVo {
    return this.instance
  }
  transform(): ProfileTo {
    const to = new ProfileTo()
    to.setCar(this.instance.car)
    return to
  }
}

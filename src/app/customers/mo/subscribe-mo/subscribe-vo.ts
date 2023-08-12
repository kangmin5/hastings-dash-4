import { UserAtom, UserDto } from 'app/authors/atom/user-atom'
import { CarAtom, CarBuilder, CarDto } from 'app/customers/atom/car-atom'

export class SubscribeVo {
  constructor(
    public car?: CarAtom,
    public user?: UserAtom
    ) {}
}

export class SubscribeTo {
  protected car?: CarDto
  protected user?: UserDto

  setCar(car: CarAtom): void {
    this.car = new CarBuilder().transform()
  }
  setUser(user: UserAtom): void {
    this.car = new CarBuilder().transform()
  }
  toJson() {
    return {
      car: this.car.toJson(),
      user: this.user.toJson()

    }
  }
}
export class SubscribeBo {
  private readonly instance: SubscribeVo

  constructor() {
    this.instance = {
      car: new CarAtom(),
      user: new UserAtom()
    }
  }

  car(car: CarAtom): SubscribeBo {
    this.instance.car = car
    return this
  }
  user(user: UserAtom): SubscribeBo {
    this.instance.user = user
    return this
  }
  build(): SubscribeVo {
    return this.instance
  }
  transform(): SubscribeTo {
    const to = new SubscribeTo()
    to.setCar(this.instance.car)
    to.setUser(this.instance.user)
    return to
  }
}

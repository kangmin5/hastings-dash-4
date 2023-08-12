import { BasketAtom, BasketBuilder, BasketDto } from 'app/customers/atom/basket-atom'
import { CarAtom, CarBuilder, CarDto } from 'app/customers/atom/car-atom'

export class CartVo {
  constructor(
    public car?: CarAtom,

    public cart?: BasketAtom
  ) {}
}
export class CartTo {
  protected car?: CarDto
  protected cart?: BasketDto

  setCar(car: CarAtom): void {
    this.car = new CarBuilder().transform()
  }
  setCart(cart: BasketAtom): void {
    this.cart = new BasketBuilder().transform()
  }
  toJson() {
    return {
      car: this.car.toJson(),
      cart: this.cart.toJson()
    }
  }
}
export class CartBo {
  private readonly instance: CartVo

  constructor() {
    this.instance = {
      car: new CarAtom(),
      cart: new BasketAtom()
    }
  }

  car(car: CarAtom): CartBo {
    this.instance.car = car
    return this
  }
  cart(cart: BasketAtom): CartBo {
    this.instance.cart = cart
    return this
  }

  build(): CartVo {
    return this.instance
  }
  transform(): CartTo {
    const to = new CartTo()
    to.setCar(this.instance.car)
    to.setCart(this.instance.cart)
    return to
  }
}

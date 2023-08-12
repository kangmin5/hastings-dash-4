import { AdobeAtom, AdobeBuilder, AdobeDto } from 'app/deliveries/atom/adobe-atom'
import { DoorAtom, DoorBuilder, DoorDto } from 'app/deliveries/atom/door-atom'

export class AddrVo {
  constructor(
    public door?: DoorAtom,

    public cart?: AdobeAtom
  ) {}
}
export class AddrTo {
  protected door?: DoorDto
  protected cart?: AdobeDto

  setDoor(door: DoorAtom): void {
    this.door = new DoorBuilder().transform()
  }
  setAddr(cart: AdobeAtom): void {
    this.cart = new AdobeBuilder().transform()
  }
  toJson() {
    return {
      door: this.door.toJson(),
      cart: this.cart.toJson()
    }
  }
}
export class AddrBo {
  private readonly instance: AddrVo

  constructor() {
    this.instance = {
      door: new DoorAtom()
    }
  }

  door(door: DoorAtom): AddrBo {
    this.instance.door = door
    return this
  }

  build(): AddrVo {
    return this.instance
  }
  transform(): AddrTo {
    const to = new AddrTo()
    to.setDoor(this.instance.door)
    return to
  }
}

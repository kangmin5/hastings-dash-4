import { DoorAtom, DoorBuilder, DoorDto } from 'app/deliveries/atom/door-atom'

export class ShipVo {
  constructor(public door?: DoorAtom, public courier?: DoorAtom) {}
}
export class ShipTo {
  protected door?: DoorDto
  protected courier?: DoorDto

  setShip(courier: DoorAtom): void {
    this.courier = new DoorBuilder().transform()
  }

  toJson() {
    return {
      door: this.door.toJson()
    }
  }
}
export class ShipBo {
  private readonly instance: ShipVo

  constructor() {
    this.instance = {
      door: new DoorAtom()
    }
  }

  door(door: DoorAtom): ShipBo {
    this.instance.door = door
    return this
  }

  build(): ShipVo {
    return this.instance
  }
  transform(): ShipTo {
    const to = new ShipTo()
    to.setShip(this.instance.door)
    return to
  }
}

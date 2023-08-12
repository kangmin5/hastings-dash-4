import { DoorAtom, DoorBuilder, DoorDto } from 'app/deliveries/atom/door-atom'

export class CourierVo {
  constructor(public door?: DoorAtom) {}
}
export class CourierTo {
  protected door?: DoorDto

  setDoor(door: DoorAtom): void {
    this.door = new DoorBuilder().transform()
  }

  toJson() {
    return {
      door: this.door.toJson(),
    }
  }
}
export class CourierBo {
  private readonly instance: CourierVo

  constructor() {
    this.instance = {
      door: new DoorAtom(),
    }
  }

  door(door: DoorAtom): CourierBo {
    this.instance.door = door
    return this
  }


  build(): CourierVo {
    return this.instance
  }
  transform(): CourierTo {
    const to = new CourierTo()
    to.setDoor(this.instance.door)
    return to
  }
}

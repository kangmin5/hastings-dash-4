import { DoorAtom, DoorBuilder, DoorDto } from 'app/deliveries/atom/door-atom'

export class UnshipVo {
  constructor(public door?: DoorAtom) {}
}
export class UnshipTo {
  protected door?: DoorDto

  setDoor(door: DoorAtom): void {
    this.door = new DoorBuilder().transform()
  }

  toJson() {
    return {
      door: this.door.toJson()
    }
  }
}
export class UnshipBo {
  private readonly instance: UnshipVo

  constructor() {
    this.instance = {
      door: new DoorAtom()
    }
  }

  door(door: DoorAtom): UnshipBo {
    this.instance.door = door
    return this
  }


  build(): UnshipVo {
    return this.instance
  }
  transform(): UnshipTo {
    const to = new UnshipTo()
    to.setDoor(this.instance.door)
    return to
  }
}

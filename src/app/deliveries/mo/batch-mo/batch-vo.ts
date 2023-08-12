import { DoorAtom, DoorBuilder, DoorDto } from 'app/deliveries/atom/door-atom'

export class BatchVo {
  constructor(public door?: DoorAtom) {}
}
export class BatchTo {
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
export class BatchBo {
  private readonly instance: BatchVo

  constructor() {
    this.instance = {
      door: new DoorAtom()
    }
  }

  door(door: DoorAtom): BatchBo {
    this.instance.door = door
    return this
  }

  build(): BatchVo {
    return this.instance
  }
  transform(): BatchTo {
    const to = new BatchTo()
    to.setDoor(this.instance.door)
    return to
  }
}

import { AdmitAtom, AdmitBuilder, AdmitDto } from 'app/customers/atom/admit-atom'
import { CarAtom, CarBuilder, CarDto } from 'app/customers/atom/car-atom'

export class NoteVo {
  constructor(
    public car?: CarAtom,

    public note?: AdmitAtom
  ) {}
}
export class NoteTo {
  protected car?: CarDto
  protected note?: AdmitDto

  setCar(car: CarAtom): void {
    this.car = new CarBuilder().transform()
  }
  setNote(note: AdmitAtom): void {
    this.note = new AdmitBuilder().transform()
  }
  toJson() {
    return {
      car: this.car.toJson(),
      note: this.note.toJson()
    }
  }
}
export class NoteBo {
  private readonly instance: NoteVo

  constructor() {
    this.instance = {
      car: new CarAtom(),
      note: new AdmitAtom()
    }
  }

  car(car: CarAtom): NoteBo {
    this.instance.car = car
    return this
  }
  note(note: AdmitAtom): NoteBo {
    this.instance.note = note
    return this
  }

  build(): NoteVo {
    return this.instance
  }
  transform(): NoteTo {
    const to = new NoteTo()
    to.setCar(this.instance.car)
    to.setNote(this.instance.note)
    return to
  }
}

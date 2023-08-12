import { AdmitAtom, AdmitBuilder, AdmitDto } from 'app/customers/atom/admit-atom'
import { CarAtom, CarBuilder, CarDto } from 'app/customers/atom/car-atom'

export class AgreeVo {
  constructor(
    public car?: CarAtom,

    public agree?: AdmitAtom
  ) {}
}
export class AgreeTo {
  protected car?: CarDto
  protected agree?: AdmitDto

  setCar(car: CarAtom): void {
    this.car = new CarBuilder().transform()
  }
  setAgree(agree: AdmitAtom): void {
    this.agree = new AdmitBuilder().transform()
  }
  toJson() {
    return {
      car: this.car.toJson(),
      agree: this.agree.toJson()
    }
  }
}
export class AgreeBo {
  private readonly instance: AgreeVo

  constructor() {
    this.instance = {
      car: new CarAtom(),
      agree: new AdmitAtom()
    }
  }

  car(car: CarAtom): AgreeBo {
    this.instance.car = car
    return this
  }
  agree(agree: AdmitAtom): AgreeBo {
    this.instance.agree = agree
    return this
  }

  build(): AgreeVo {
    return this.instance
  }
  transform(): AgreeTo {
    const to = new AgreeTo()
    to.setCar(this.instance.car)
    to.setAgree(this.instance.agree)
    return to
  }
}

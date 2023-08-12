import { AirAtom, AirBuilder, AirDto } from 'app/authors/atom/air-atom'

export class AgreeVo {
  constructor(public air?: AirAtom,) {}
}

export class AgreeTo {
  air?: AirDto

  setAir(a: AirAtom): void {
    this.air = new AirBuilder().id(a.id).transform()
  }

  toJson() {
    return {
      air: this.air.toJson(),
    }
  }
}
export class AgreeBo {
  private readonly instance: AgreeVo

  constructor() {
    this.instance = {
      air: new AirAtom()
    }
  }

  air(a: AirAtom): AgreeBo {
    this.instance.air = a
    return this
  }

  build(): AgreeVo {
    return this.instance
  }
  transform(): AgreeTo {
    const to = new AgreeTo()
    to.setAir(this.instance.air)
    return to
  }
}

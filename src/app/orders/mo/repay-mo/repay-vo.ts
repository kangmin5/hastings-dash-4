import { OarAtom, OarBuilder, OarDto } from 'app/orders/atom/oar-atom'

export class RepayVo {
  constructor(public oar?: OarAtom,
    ) {}
}
export class RepayTo {
  protected oar?: OarDto

  setOar(o: OarAtom): void {
    this.oar = new OarBuilder().transform()
  }

  toJson() {
    return {
      oar: this.oar.toJson()
    }
  }
}
export class RepayBo {
  private readonly instance: RepayVo

  constructor() {
    this.instance = {
      oar: new OarAtom()
    }
  }

  oar(o: OarAtom): RepayBo {
    this.instance.oar = new OarBuilder()


    .transform()
    return this
  }

  build(): RepayVo {
    return this.instance
  }
  transform(): RepayTo {
    const to = new RepayTo()
    to.setOar(this.instance.oar)
    return to
  }
}

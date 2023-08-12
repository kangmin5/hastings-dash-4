import { OarAtom, OarBuilder, OarDto } from 'app/orders/atom/oar-atom'

export class PayVo {
  constructor(public oar?: OarAtom,
    ) {}
}
export class PayTo {
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
export class PayBo {
  private readonly instance: PayVo

  constructor() {
    this.instance = {
      oar: new OarAtom()
    }
  }

  oar(o: OarAtom): PayBo {
    this.instance.oar = new OarBuilder()


    .transform()
    return this
  }

  build(): PayVo {
    return this.instance
  }
  transform(): PayTo {
    const to = new PayTo()
    to.setOar(this.instance.oar)
    return to
  }
}

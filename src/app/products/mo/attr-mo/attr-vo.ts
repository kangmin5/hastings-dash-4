import { ParAtom, ParBuilder, ParDto } from "app/products/atom/par-atom"


export class AttrVo {
  constructor(public par?: ParAtom) {}
}
export class AttrTo {
  protected par?: ParDto

  setPar(par: ParAtom): void {
    this.par = new ParBuilder().transform()
  }



  toJson() {
    return {
      par: this.par.toJson(),
    }
  }
}
export class AttrBo {
  private readonly instance: AttrVo

  constructor() {
    this.instance = {
      par: new ParAtom()
    }
  }

  build(): AttrVo {
    return this.instance
  }
  transform(): AttrTo {
    const to = new AttrTo()
    to.setPar(this.instance.par)
    return to
  }
}

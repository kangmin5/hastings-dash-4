import { ParAtom, ParBuilder, ParDto } from "app/products/atom/par-atom"


export class CatVo {
  constructor(public par?: ParAtom) {}
}
export class CatTo {
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
export class CatBo {
  private readonly instance: CatVo

  constructor() {
    this.instance = {
      par: new ParAtom()
    }
  }

  build(): CatVo {
    return this.instance
  }
  transform(): CatTo {
    const to = new CatTo()
    to.setPar(this.instance.par)
    return to
  }
}

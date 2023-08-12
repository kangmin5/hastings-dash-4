import { ParAtom, ParBuilder, ParDto } from 'app/products/atom/par-atom'

export class ReviewVo {
  constructor(
    public par?: ParAtom,
    ) {}
}

export class ReviewTo {
  protected par?: ParDto

  setPar(a: ParAtom): void {
    this.par = new ParBuilder().id(a.id).transform()
  }


  toJson() {
    return {
      par: this.par.toJson(),
    }
  }
}
export class ReviewBo {
  private readonly instance: ReviewVo

  constructor() {
    this.instance = {
      par: new ParAtom()
    }
  }

  build(): ReviewVo {
    return this.instance
  }
  transform(): ReviewTo {
    const to = new ReviewTo()
    to.setPar(this.instance.par)
    return to
  }
}

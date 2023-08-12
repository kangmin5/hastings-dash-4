import { QuadAtom, QuadBuilder, QuadDto } from 'app/quotes/atom/quad-atom'

export class QuoteVo {
  constructor(public quad?: QuadAtom) {}
}

export class QuoteTo {
  protected quad: QuadDto

  setQuote(quote: QuadAtom) {
    this.quad = new QuadBuilder().transform()
  }

  toJson() {
    return {
      quad: this.quad.toJson()
    }
  }
}

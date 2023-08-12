import { CiteAtom, CiteBuilder, CiteDto } from 'app/quotes/atom/cite-atom'

export class QuickVo {
  constructor(public quick?: CiteAtom) {}
}

export class QuickTo {
  protected quick: CiteDto

  setQuick(quick: CiteAtom) {
    this.quick = new CiteBuilder().quickId(quick.quickId).transform()
  }

  toJson() {
    return {
      quick: this.quick.toJson()
    }
  }
}

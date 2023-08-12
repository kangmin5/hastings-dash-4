import { CiteAtom, CiteBuilder, CiteDto } from 'app/quotes/atom/cite-atom'

export class QuickEntryVo {
  constructor(public quickEntry?: CiteAtom) {}
}

export class QuickEntryTo {
  protected quickEntry: CiteDto



  toJson() {
    return {
      
    }
  }
}

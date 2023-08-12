import { QuickEntryTo, QuickEntryVo } from 'app/quotes/mo/quick-entry-mo/quick-entry-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { CiteBuilder } from 'app/quotes/atom/cite-atom'
import instance from 'app/authors/org/author-org/login-legacy'

export class QuickEntryList implements StrategyType<QuickEntryVo[]> {
  handle(args?: any): QuickEntryVo[] {
    const items: QuickEntryVo[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      
    }
    return items
  }
}

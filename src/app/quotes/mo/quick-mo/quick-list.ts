import { QuickTo, QuickVo } from 'app/quotes/mo/quick-mo/quick-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { CiteBuilder } from 'app/quotes/atom/cite-atom'
import instance from 'app/authors/org/author-org/login-legacy'

export class QuickList implements StrategyType<QuickVo[]> {
  handle(args?: any): QuickVo[] {
    const items: QuickVo[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const quick = new CiteBuilder()
        .quickId(array[i].id)

        .build()

      const instance = new QuickTo()
      instance.setQuick(quick)
      const json = instance.toJson()
      console.log(' &&&&&&&&&&& json ', JSON.stringify(json))
      items.push(json)
    }
    return items
  }
}

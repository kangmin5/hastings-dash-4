import { QuoteTo, QuoteVo } from 'app/quotes/mo/quote-mo/quote-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { QuadBuilder } from 'app/quotes/atom/quad-atom'

export class QuoteList implements StrategyType<QuoteVo[]> {
  handle(args?: any): QuoteVo[] {
    const items: QuoteVo[] = []
    const array = args
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const quote = new QuadBuilder()
        .id(array[i].id)

        .transform()

      const instance = new QuoteTo()
      instance.setQuote(quote)
      const json = instance.toJson()
      items.push(json)
    }
    return items
  }
}

import { CardBo, CardVo } from 'app/taxes/mo/card-mo/card-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { CardBuilder } from 'app/taxes/atom/card-atom'
import { TarBuilder } from 'app/taxes/atom/tar-atom'

export class CardList implements StrategyType<CardVo[]> {
  handle(args?: any): CardVo[] {
    const items: CardVo[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].id

      const a1 = new TarBuilder().id(x1).build()

      const to = new CardBo().tar(a1).transform()

      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}

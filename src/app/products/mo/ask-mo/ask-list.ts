import { StrategyType } from 'app/utils/atom/strategy-atom'
import { AskBo, AskTo, AskVo } from 'app/products/mo/ask-mo/ask-vo'
import { AirBuilder } from 'app/authors/atom/air-atom'
import { ParBuilder } from 'app/products/atom/par-atom'

export class AskList implements StrategyType<AskVo[]> {
  handle(args?: any): AskVo[] {
    const items: AskVo[] = []
    const array = args
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].askId

      const a1 = new ParBuilder().id(x1).build()

      const to = new AskTo()
      to.setPar(a1)

      const jo = new AskBo()
        .par(a1)

        .transform()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      // items.push(json)
    }
    return items
  }
}

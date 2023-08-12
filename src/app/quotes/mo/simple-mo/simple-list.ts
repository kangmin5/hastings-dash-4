import { SimpleTo, SimpleVo } from 'app/quotes/mo/simple-mo/simple-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { SimpleBo } from 'app/quotes/mo/simple-mo/simple-vo'
import { QuadAtom, QuadBuilder } from 'app/quotes/atom/quad-atom'

export class SimpleList implements StrategyType<SimpleVo[]> {
  handle(args?: any): SimpleVo[] {
    const items: SimpleVo[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].id
      const a1 = new QuadBuilder().id(x1).build()
      const to = new SimpleTo()
      to.setQuad(a1)
      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}

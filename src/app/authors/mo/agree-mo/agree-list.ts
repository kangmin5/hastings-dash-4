import { AirBuilder } from 'app/authors/atom/air-atom'
import { AgreeTo, AgreeVo } from 'app/authors/mo/agree-mo/agree-vo'
import { AgreeBo } from 'app/authors/mo/agree-mo/agree-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'

export class AgreeList implements StrategyType<AgreeVo[]> {
  handle(args?: any): AgreeVo[] {
    const items: AgreeVo[] = []
    const array = args
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].agreeId

      const a = new AirBuilder().id(x1).build()

      const to = new AgreeBo().air(a).transform()

      const jo = to.toJson()
     
      items.push(jo)
    }
    return items
  }
}

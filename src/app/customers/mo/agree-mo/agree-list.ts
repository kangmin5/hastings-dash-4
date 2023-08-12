import { AgreeVo, AgreeTo } from 'app/customers/mo/agree-mo/agree-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { AdmitBuilder } from 'app/customers/atom/admit-atom'

export class AgreeList implements StrategyType<AgreeVo[]> {
  handle(args?: any): AgreeVo[] {
    const items: AgreeVo[] = []
    const array = args
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].consent
      const agree = new AdmitBuilder()
        .consent(x1)

        .build()

      const to = new AgreeTo()
      to.setAgree(agree)
      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}

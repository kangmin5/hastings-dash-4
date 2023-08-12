import { StrategyType } from 'app/utils/atom/strategy-atom'
import { ReturnApplyVo } from '../../org/return-apply-org/return-apply-vo'
import { IdMap } from 'app/utils/atom/id-atom'
import { RepayBo, RepayTo, RepayVo } from 'app/orders/mo/repay-mo/repay-vo'
import { OarBuilder } from 'app/orders/atom/oar-atom'

export class RepayList implements StrategyType<RepayVo[]> {
  handle(args?: any): any {
    const items: RepayVo[] = []
    const arr = args
    console.log(' &&&&&&&&&&& array ', JSON.stringify(arr))
    const len = arr.length
    let i = 0
    for (; i < len; i++) {
      const x1 = arr[i].id

      const a = new OarBuilder().id(x1).transform()

      const to = new RepayTo()

      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}

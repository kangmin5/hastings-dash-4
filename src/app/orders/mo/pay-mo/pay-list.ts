import { StrategyType } from 'app/utils/atom/strategy-atom'
import { PayVo, PayTo, PayBo } from './pay-vo'
import { OarAtom, OarBuilder } from 'app/orders/atom/oar-atom'

export class PayList implements StrategyType<PayVo[]> {
  handle(args?: any): PayVo[] {
    const items: PayVo[] = []
    const arr = args
    console.log(' &&&&&&&&&&& array ', JSON.stringify(arr))
    const len = arr.length
    let i = 0
    for (; i < len; i++) {
      const x1 = arr[i].id

      const a = new OarBuilder().id(x1).transform()

      const to = new PayTo()

      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}

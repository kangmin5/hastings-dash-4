import { RefundBo, RefundVo } from 'app/taxes/mo/refund-mo/refund-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { RefundBuilder } from 'app/taxes/atom/refund-atom'
import { TarBuilder } from 'app/taxes/atom/tar-atom'

export class RefundList implements StrategyType<RefundVo[]> {
  handle(args?: any): RefundVo[] {
    const items: RefundVo[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].id

      const a1 = new TarBuilder().id(x1).build()

      const to = new RefundBo().tar(a1).transform()

      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}

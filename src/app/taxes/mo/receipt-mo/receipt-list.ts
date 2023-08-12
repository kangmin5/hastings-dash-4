import { ReceiptBo, ReceiptVo } from 'app/taxes/mo/receipt-mo/receipt-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { ReceiptBuilder } from 'app/taxes/atom/receipt-atom'
import { TarBuilder } from 'app/taxes/atom/tar-atom'

export class ReceiptList implements StrategyType<ReceiptVo[]> {
  handle(args?: any): ReceiptVo[] {
    const items: ReceiptVo[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].id

      const a1 = new TarBuilder().id(x1).build()

      const to = new ReceiptBo().tar(a1).transform()

      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}

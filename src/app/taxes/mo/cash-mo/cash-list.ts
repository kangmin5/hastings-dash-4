import { StrategyType } from 'app/utils/atom/strategy-atom'
import { CashBuilder } from 'app/taxes/atom/cash-atom'
import { CashBo, CashVo } from './cash-vo'
import { TarBuilder } from 'app/taxes/atom/tar-atom'

export class CashList implements StrategyType<CashVo[]> {
  handle(args?: any): CashVo[] {
    const items: CashVo[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].id

      const a1 = new TarBuilder().id(x1).build()

      const to = new CashBo().tar(a1).transform()

      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}

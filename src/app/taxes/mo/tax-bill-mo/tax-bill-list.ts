import { TarBuilder } from 'app/taxes/atom/tar-atom'
import { TaxBuilder } from 'app/taxes/atom/tax-atom'
import { TaxBillBo, TaxBillVo } from 'app/taxes/mo/tax-bill-mo/tax-bill-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'

export class TaxBillList implements StrategyType<TaxBillVo[]> {
  handle(args?: any): TaxBillVo[] {
    const items: TaxBillVo[] = []
    const array = args
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].id

      const a1 = new TarBuilder().id(x1).build()

      const to = new TaxBillBo().tar(a1).transform()

      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}

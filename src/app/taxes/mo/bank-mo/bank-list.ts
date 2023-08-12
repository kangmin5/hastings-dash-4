import { BankBo, BankTo, BankVo } from './bank-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { BankBuilder } from 'app/taxes/atom/deposit-atom'
import { TarBuilder } from 'app/taxes/atom/tar-atom'

export class BankList implements StrategyType<BankVo[]> {
  handle(args?: any): BankVo[] {
    const items: BankVo[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].id

      const a1 = new TarBuilder().id(x1).build()

      const to = new BankBo().tar(a1).transform()

      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}

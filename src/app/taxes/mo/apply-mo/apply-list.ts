import { StrategyType } from 'app/utils/atom/strategy-atom'
import { ApplyBuilder } from 'app/taxes/atom/money-atom'
import { ApplyBo, ApplyTo, ApplyVo } from './apply-vo'
import { TarBuilder } from 'app/taxes/atom/tar-atom'

export class ApplyList implements StrategyType<ApplyVo[]> {
  handle(args?: any): ApplyVo[] {
    const items: ApplyVo[] = []
    const array = args
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].id

      const a1 = new TarBuilder().id(x1).build()

      const to = new ApplyBo().tar(a1).transform()

      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}

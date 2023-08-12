import { SlipBo, SlipVo } from 'app/taxes/mo/slip-mo/slip-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { SlipBuilder } from 'app/taxes/atom/slip-atom'
import { TarBuilder } from 'app/taxes/atom/tar-atom'

export class SlipList implements StrategyType<SlipVo[]> {
  handle(args?: any): SlipVo[] {
    const items: SlipVo[] = []
    const array = args
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].id

      const a1 = new TarBuilder().id(x1).build()

      const to = new SlipBo().tar(a1).transform()

      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}

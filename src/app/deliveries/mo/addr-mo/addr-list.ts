import { AddrTo, AddrVo } from 'app/deliveries/mo/addr-mo/addr-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { AdobeBuilder } from 'app/deliveries/atom/adobe-atom'
import { DoorBuilder } from 'app/deliveries/atom/door-atom'

export class AddrList implements StrategyType<AddrVo[]> {
  handle(args?: any): AddrVo[] {
    const items: AddrVo[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const a1 = new DoorBuilder()
        .id(array[i].id)

        .build()

      const to = new AddrTo()
      to.setDoor(a1)
      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}

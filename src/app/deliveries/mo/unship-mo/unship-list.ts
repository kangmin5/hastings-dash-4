import { UnshipTo, UnshipVo } from 'app/deliveries/mo/unship-mo/unship-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { DoorBuilder } from 'app/deliveries/atom/door-atom'

export class UnshipList implements StrategyType<UnshipVo[]> {
  handle(args?: any): UnshipVo[] {
    const items: UnshipVo[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const a1 = new DoorBuilder()
        .id(array[i].id)

        .build()

      const to = new UnshipTo()
      to.setDoor(a1)

      const jo = to.toJson()
      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}

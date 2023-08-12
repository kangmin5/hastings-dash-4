import { StrategyType } from 'app/utils/atom/strategy-atom'
import { ShipTo, ShipVo } from 'app/deliveries/mo/ship-mo/ship-vo'
import { DoorBuilder } from 'app/deliveries/atom/door-atom'

export class ShipList implements StrategyType<ShipVo[]> {
  handle(args?: any): ShipVo[] {
    const items: ShipVo[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].id
      const a1 = new DoorBuilder()
        .id(x1)

        .build()
      const to = new ShipTo()
      to.setShip(a1)

      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}

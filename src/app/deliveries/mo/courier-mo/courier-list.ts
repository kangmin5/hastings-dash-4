import { DoorAtom } from 'app/deliveries/atom/door-atom'
import { CourierTo, CourierVo, CourierBo } from 'app/deliveries/mo/courier-mo/courier-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'

export class CourierList implements StrategyType<CourierVo[]> {
  handle(args?: any): CourierVo[] {
    const items: CourierVo[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].id

      const d = new DoorAtom()

      const to = new CourierTo()
      to.setDoor(d)

      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}

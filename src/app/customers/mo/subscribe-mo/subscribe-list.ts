import { SubscribeTo, SubscribeVo } from 'app/customers/mo/subscribe-mo/subscribe-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { SubscribeBuilder } from 'app/customers/atom/subscribe-atom'
import { CarBuilder } from 'app/customers/atom/car-atom'

export class SubscribeList implements StrategyType<SubscribeVo[]> {
  handle(args?: any): SubscribeVo[] {
    const items: SubscribeVo[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].car.cid

      const a1 = new CarBuilder().id(x1).build()

      const to = new SubscribeTo()
      to.setCar(a1)

      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}

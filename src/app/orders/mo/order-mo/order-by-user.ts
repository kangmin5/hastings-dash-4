import { StrategyType } from 'app/utils/atom/strategy-atom'
import { OrderTo, OrderVo } from 'app/orders/mo/order-mo/order-vo'
import { OarBuilder } from 'app/orders/atom/oar-atom'

export class OrderByUser implements StrategyType<OrderVo[]> {
  handle(args?: any): OrderVo[] {
    const items: OrderVo[] = []
    const array = args
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].id
      const a1 = new OarBuilder()
        .id(x1)

        .build()
      const to = new OrderTo()
      to.setOar(a1)

      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}

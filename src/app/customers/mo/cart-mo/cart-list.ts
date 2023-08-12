import { CartVo, CartTo } from 'app/customers/mo/cart-mo/cart-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { BasketBuilder } from 'app/customers/atom/basket-atom'
import { CarBuilder } from 'app/customers/atom/car-atom'

export class CartList implements StrategyType<CartVo[]> {
  handle(args?: any): CartVo[] {
    const items: CartVo[] = []
    const array = args
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].id

      const c = new CarBuilder().id(x1).build()



      const to = new CartTo()
      to.setCar(c)
      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}

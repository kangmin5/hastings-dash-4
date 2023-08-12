import { StrategyType } from 'app/utils/atom/strategy-atom'
import { OrderBo, OrderTo, OrderVo } from 'app/orders/mo/order-mo/order-vo'
import { OarBuilder } from 'app/orders/atom/oar-atom'
import { TimeBuilder } from 'app/utils/atom/time-atom'
import { UserBuilder } from 'app/authors/atom/user-atom'
import { FunnelBuilder } from 'app/customers/atom/funnel-atom'
import { CalcBuilder } from 'app/orders/atom/calc-atom'
import { FeeBuilder } from 'app/orders/atom/fee-atom'
import { ParBuilder } from 'app/products/atom/par-atom'

export class OrderList implements StrategyType<OrderVo[]> {
  handle(args?: any): OrderVo[] {
    const arr: OrderVo[] = []


    const len = args.length
    let i = 0
    for (; i < len; i++) {
      const id = args[i].idAtom.id
      const createdAt = args[i].atAtom.createdAt
      const userId = args[i].userAtom.userId
      const f1 = args[i].funnel  //**TODO  */
      const orderCount = args[i].countAtom.orderCount
      const orderer = args[i].personAtom.name
      const payMethod = args[i].payAtom.payMethod
      const payAmount = args[i].payAtom.payAmount
      const productName = args[i].nameAtom.name //**TODO  */
      const quantity = args[i].countAtom.quantity
      const status = args[i].txAtom.status

      console.log(' &&&&&&&&&&& id ', id)
      console.log(' &&&&&&&&&&& createdAt ', createdAt)
      console.log(' &&&&&&&&&&& userId ', userId)
      console.log(' &&&&&&&&&&& f1 ', f1)
      console.log(' &&&&&&&&&&& orderCount ', orderCount)
      console.log(' &&&&&&&&&&& orderer ', orderer)
      console.log(' &&&&&&&&&&& payMethod ', payMethod)
      console.log(' &&&&&&&&&&& totalPurchaseAmount ', payAmount)
      console.log(' &&&&&&&&&&& productName ', productName)
      console.log(' &&&&&&&&&&& quantity ', quantity)
      console.log(' &&&&&&&&&&& status ', status)

      const oar = new OarBuilder()
        .id(id)
        .status(status)
        .qty(quantity)
        .build()

      const time = new TimeBuilder()
        .createdAt(createdAt)
        .build()

      const user = new UserBuilder()
      .userId(userId)
      .username(orderer)
      .build()

      const funnel = new FunnelBuilder()
      .funnel(f1)
      .build()

      const calc = new CalcBuilder()
      .orderCountPerUser(orderCount)
      .orderAmount(payAmount)
      .build()

      const fee = new FeeBuilder()
      .payMethod(payMethod)
      .build()

      const par = new ParBuilder()
      .name(productName)
      .build()
      
      const to = new OrderBo()
      .oar(oar)
      .time(time)
      .user(user)
      .funnel(funnel)
      .calc(calc)
      .fee(fee)
      .par(par)
      .transform()

      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      arr.push(jo)
    }
    return arr
  }
}

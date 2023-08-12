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
  
    console.log(' &&&&&&&&&&& args ', JSON.stringify(args))


/*
[
  {
    "createdAt": "2023-06-27 14:56:08",
    "customerJson": {
      "userId": "test002"
    },
    "funnel": "아직구현안됨",
    "id": 7,
    "orderCount": 2,
    "orderer": "강민",
    "paymentJson": {
      "payMethod": "카드",
      "totalPurchaseAmount": 5000
    },
    "productName": "OPP헤다봉투 18*(3+25)+4",
    "quantity": 1,
    "status": "미처리"
  }
]
*/

    const len = args.length
    let i = 0
    for (; i < len; i++) {
      const id = args[i].id
      const createdAt = args[i].createdAt
      const userId = args[i].customerJson.userId
      const f1 = args[i].funnel
      const orderCount = args[i].orderCount
      const orderer = args[i].orderer
      const payMethod = args[i].paymentJson.payMethod
      const totalPurchaseAmount = args[i].paymentJson.totalPurchaseAmount
      const productName = args[i].productName
      const quantity = args[i].quantity
      const status = args[i].status

      console.log(' &&&&&&&&&&& id ', id)
      console.log(' &&&&&&&&&&& createdAt ', createdAt)
      console.log(' &&&&&&&&&&& userId ', userId)
      console.log(' &&&&&&&&&&& f1 ', f1)
      console.log(' &&&&&&&&&&& orderCount ', orderCount)
      console.log(' &&&&&&&&&&& orderer ', orderer)
      console.log(' &&&&&&&&&&& payMethod ', payMethod)
      console.log(' &&&&&&&&&&& totalPurchaseAmount ', totalPurchaseAmount)
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
      .orderAmount(totalPurchaseAmount)
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

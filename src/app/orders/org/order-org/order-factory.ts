import { OrderVo } from 'app/orders/mo/order-mo/order-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { OrderStrategy } from './order-union'
import { OrderList } from 'app/orders/mo/order-mo/order-list'

type Strategy = keyof typeof OrderStrategy

const OrderMap: { [_case in Strategy]: StrategyType<OrderVo[]> } = {
  getAllOrders: new OrderList(),
  getOrderById: undefined,
  addOrder: undefined,
  alterOrderById: undefined,
  getOrdersBy: undefined,
  getOrdersByUser: undefined,
  delOrderById: undefined
}

export class OrderFactory {
  static create(_case: Strategy): StrategyType<OrderVo[]> {
    const strategy = OrderMap[_case]
    if (!strategy) console.log('주문 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

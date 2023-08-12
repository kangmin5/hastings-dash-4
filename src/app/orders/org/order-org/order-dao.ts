import { OrderFactory as factory } from './order-factory'
import { OrderStrategy as strategy } from './order-union'
import { default as OrderSlice } from './order-slice'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'
import { OrderVo } from 'app/orders/mo/order-mo/order-vo'

export class OrderDao {
  static addOneSuccess = (payload: any): OrderVo[] => factory.create(strategy.addOrder).handle(payload)
  static getAllSuccess = (payload: any): OrderVo[] => factory.create(strategy.getAllOrders).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { OrderSlice }

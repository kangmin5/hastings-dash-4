import { CartFactory as factory } from './cart-factory'
import { CartStrategy as strategy } from './cart-union'
import { default as CartSlice } from './cart-slice'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'
import { CartVo } from 'app/customers/mo/cart-mo/cart-vo'

export class CartDao {
  static addOneSuccess = (payload: any): CartVo[] => factory.create(strategy.addCart).handle(payload)
  static getAllSuccess = (payload: any): CartVo[] => factory.create(strategy.getAllCarts).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { CartSlice }

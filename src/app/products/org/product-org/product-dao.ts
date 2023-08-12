import { ProductFactory as factory } from './product-factory'
import { ProductStrategy as strategy } from './product-union'
import { default as ProductSlice } from './product-slice'
import { ProductVo } from 'app/products/mo/product-mo/product-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class ProductDao {
  static addOneSuccess = (payload: any): ProductVo[] => factory.create(strategy.addProduct).handle(payload)
  static getAllSuccess = (payload: any): ProductVo[] => factory.create(strategy.getAllProducts).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByMainSuccess = (payload: any): ProductVo[] => factory.create(strategy.getProductsByMain).handle(payload)
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { ProductSlice }

import { CatFactory as factory } from './cat-factory'
import { CatStrategy as strategy } from './cat-union'
import { default as CatSlice } from './cat-slice'
import { CatVo } from 'app/products/mo/cat-mo/cat-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class CatDao {
  static addOneSuccess = (payload: any): CatVo[] => factory.create(strategy.addCat).handle(payload)
  static getAllSuccess = (payload: any): CatVo[] => factory.create(strategy.getAllCategories).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { CatSlice }

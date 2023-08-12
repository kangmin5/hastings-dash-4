import { SimpleFactory as factory } from './simple-factory'
import { SimpleStrategy as strategy } from './simple-union'
import { default as SimpleSlice } from './simple-slice'
import { SimpleVo } from 'app/quotes/mo/simple-mo/simple-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class SimpleDao {
  static addOneSuccess = (payload: any): SimpleVo[] => factory.create(strategy.addSimple).handle(payload)
  static getAllSuccess = (payload: any): SimpleVo[] => factory.create(strategy.getAllSimples).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { SimpleSlice }

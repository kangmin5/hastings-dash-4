import { DormantFactory as factory } from './dormant-factory'
import { DormantStrategy as strategy } from './dormant-union'
import { default as DormantSlice } from './dormant-slice'
import { DormantVo } from 'app/customers/mo/dormant-mo/dormant-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class DormantDao {
  static addOneSuccess = (payload: any): DormantVo[] => factory.create(strategy.addDormant).handle(payload)
  static getAllSuccess = (payload: any): DormantVo[] => factory.create(strategy.getAllDormants).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { DormantSlice }

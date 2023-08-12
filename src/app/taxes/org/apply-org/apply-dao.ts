import { ApplyFactory as factory } from './apply-factory'
import { ApplyStrategy as strategy } from './apply-union'
import { default as ApplySlice } from './apply-slice'
import { ApplyVo } from 'app/taxes/mo/apply-mo/apply-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class ApplyDao {
  static addOneSuccess = (payload: any): ApplyVo[] => factory.create(strategy.addApply).handle(payload)
  static getAllSuccess = (payload: any): ApplyVo[] => factory.create(strategy.getAllApplies).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { ApplySlice }

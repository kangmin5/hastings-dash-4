import { AgreeFactory as factory } from './agree-factory'
import { AgreeStrategy as strategy } from './agree-union'
import { default as AgreeSlice } from './agree-slice'
import { AgreeVo } from 'app/authors/mo/agree-mo/agree-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class AgreeDao {
  static addOneSuccess = (payload: any): AgreeVo[] => factory.create(strategy.addAgree).handle(payload)
  static getAllSuccess = (payload: any): AgreeVo[] => factory.create(strategy.getAllAgrees).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { AgreeSlice }

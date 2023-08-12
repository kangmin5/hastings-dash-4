import { CounselFactory as factory } from './counsel-factory'
import { CounselStrategy as strategy } from './counsel-union'
import { default as CounselSlice } from './counsel-slice'
import { CounselVo } from 'app/boards/mo/counsel-mo/counsel-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class CounselDao {
  static addOneSuccess = (payload: any): CounselVo[] => factory.create(strategy.addCounsel).handle(payload)
  static getAllSuccess = (payload: any): CounselVo[] => factory.create(strategy.getAllCounsels).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { CounselSlice }

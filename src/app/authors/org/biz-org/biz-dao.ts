import { BizFactory as factory } from './biz-factory'
import { BizStrategy as strategy } from './biz-union'
import { default as BizSlice } from './biz-slice'
import { BizVo } from 'app/authors/mo/biz-mo/biz-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class BizDao {
  static addOneSuccess = (payload: any): BizVo[] => factory.create(strategy.addBiz).handle(payload)
  static getAllSuccess = (payload: any): BizVo[] => factory.create(strategy.getAllBizMembers).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { BizSlice }

import { CashFactory as factory } from './cash-factory'
import { CashStrategy as strategy } from './cash-union'
import { default as CashSlice } from './cash-slice'
import { CashVo } from 'app/taxes/mo/cash-mo/cash-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class CashDao {
  static addOneSuccess = (payload: any): CashVo[] => factory.create(strategy.addCash).handle(payload)
  static getAllSuccess = (payload: any): CashVo[] => factory.create(strategy.getAllCashes).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { CashSlice }

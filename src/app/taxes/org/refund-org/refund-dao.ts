import { RefundFactory as factory } from './refund-factory'
import { RefundStrategy as strategy } from './refund-union'
import { default as RefundSlice } from './refund-slice'
import { RefundVo } from 'app/taxes/mo/refund-mo/refund-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class RefundDao {
  static addOneSuccess = (payload: any): RefundVo[] => factory.create(strategy.addRefund).handle(payload)
  static getAllSuccess = (payload: any): RefundVo[] => factory.create(strategy.getAllRefunds).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { RefundSlice }

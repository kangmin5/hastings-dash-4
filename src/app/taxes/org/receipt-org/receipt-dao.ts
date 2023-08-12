import { ReceiptFactory as factory } from './receipt-factory'
import { ReceiptStrategy as strategy } from './receipt-union'
import { default as ReceiptSlice } from './receipt-slice'
import { ReceiptVo } from 'app/taxes/mo/receipt-mo/receipt-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class ReceiptDao {
  static addOneSuccess = (payload: any): ReceiptVo[] => factory.create(strategy.addReceipt).handle(payload)
  static getAllSuccess = (payload: any): ReceiptVo[] => factory.create(strategy.getAllReceipts).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { ReceiptSlice }

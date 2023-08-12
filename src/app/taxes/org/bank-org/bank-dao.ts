import { BankFactory as factory } from './bank-factory'
import { BankStrategy as strategy } from './bank-union'
import { default as BankSlice } from './bank-slice'
import { BankVo } from 'app/taxes/mo/bank-mo/bank-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class BankDao {
  static addOneSuccess = (payload: any): BankVo[] => factory.create(strategy.addBank).handle(payload)
  static getAllSuccess = (payload: any): BankVo[] => factory.create(strategy.getAllBanks).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { BankSlice }

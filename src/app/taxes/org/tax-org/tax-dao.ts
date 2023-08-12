import { TaxFactory as factory } from './tax-factory'
import { TaxStrategy as strategy } from './tax-union'
import { default as TaxSlice } from './tax-slice'
import { TaxVo } from 'app/taxes/mo/tax-bill-mo/tax-bill-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class TaxDao {
  static addOneSuccess = (payload: any): TaxVo[] => factory.create(strategy.addTax).handle(payload)
  static getAllSuccess = (payload: any): TaxVo[] => factory.create(strategy.getAllTaxes).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { TaxSlice }

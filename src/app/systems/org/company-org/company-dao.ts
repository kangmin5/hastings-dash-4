import { CompanyFactory as factory } from './company-factory'
import { CompanyStrategy as strategy } from './company-union'
import { default as CompanySlice } from './company-slice'
import { CompanyVo } from 'app/systems/mo/company-mo/company-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class CompanyDao {
  static addOneSuccess = (payload: any): CompanyVo[] => factory.create(strategy.addCompany).handle(payload)
  static getAllSuccess = (payload: any): CompanyVo[] => factory.create(strategy.getAllCompanies).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { CompanySlice }

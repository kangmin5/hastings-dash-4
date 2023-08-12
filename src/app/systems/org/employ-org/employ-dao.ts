import { EmployFactory as factory } from './employ-factory'
import { EmployStrategy as strategy } from './employ-union'
import { default as EmploySlice } from './employ-slice'
import { EmployAtom } from './employ-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class EmployDao {
  static addOneSuccess = (payload: any): EmployAtom[] => factory.create(strategy.addEmploy).handle(payload)
  static getAllSuccess = (payload: any): EmployAtom[] => factory.create(strategy.getAllEmploys).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { EmploySlice }

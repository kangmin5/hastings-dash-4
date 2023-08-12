import { DepartFactory as factory } from './depart-factory'
import { DepartStrategy as strategy } from './depart-union'
import { default as DepartSlice } from './depart-slice'
import { DepartAtom } from './depart-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class DepartDao {
  static addOneSuccess = (payload: any): DepartAtom[] => factory.create(strategy.addDepart).handle(payload)
  static getAllSuccess = (payload: any): DepartAtom[] => factory.create(strategy.getAllDeparts).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { DepartSlice }

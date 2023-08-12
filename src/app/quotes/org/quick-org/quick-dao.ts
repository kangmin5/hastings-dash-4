import { QuickFactory as factory } from './quick-factory'
import { QuickStrategy as strategy } from './quick-union'
import { default as QuickSlice } from './quick-slice'
import { QuickVo } from 'app/quotes/mo/quick-mo/quick-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class QuickDao {
  static addOneSuccess = (payload: any): QuickVo[] => factory.create(strategy.addQuick).handle(payload)
  static getAllSuccess = (payload: any): QuickVo[] => factory.create(strategy.getAllQuicks).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { QuickSlice }

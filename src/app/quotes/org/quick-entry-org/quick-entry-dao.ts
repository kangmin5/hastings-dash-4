import { QuickEntryFactory as factory } from './quick-entry-factory'
import { QuickEntryStrategy as strategy } from './quick-entry-union'
import { default as QuickEntrySlice } from './quick-entry-slice'
import { QuickEntryVo } from 'app/quotes/mo/quick-entry-mo/quick-entry-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class QuickEntryDao {
  static addOneSuccess = (payload: any): QuickEntryVo[] => factory.create(strategy.addQuickEntry).handle(payload)
  static getAllSuccess = (payload: any): QuickEntryVo[] => factory.create(strategy.getAllQuickEntries).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { QuickEntrySlice }

import { BatchFactory as factory } from './batch-factory'
import { BatchStrategy as strategy } from './batch-union'
import { default as BatchSlice } from './batch-slice'
import { BatchVo } from 'app/deliveries/mo/batch-mo/batch-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class BatchDao {
  static addOneSuccess = (payload: any): BatchVo[] => factory.create(strategy.addBatch).handle(payload)
  static getAllSuccess = (payload: any): BatchVo[] => factory.create(strategy.getAllBatches).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { BatchSlice }

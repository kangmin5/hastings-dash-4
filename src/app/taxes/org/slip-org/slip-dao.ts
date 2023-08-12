import { SlipFactory as factory } from './slip-factory'
import { SlipStrategy as strategy } from './slip-union'
import { default as SlipSlice } from './slip-slice'
import { SlipVo } from 'app/taxes/mo/slip-mo/slip-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class SlipDao {
  static addOneSuccess = (payload: any): SlipVo[] => factory.create(strategy.addSlip).handle(payload)
  static getAllSuccess = (payload: any): SlipVo[] => factory.create(strategy.getAllSlips).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { SlipSlice }

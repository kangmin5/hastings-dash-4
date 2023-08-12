import { AskFactory as factory } from './ask-factory'
import { AskStrategy as strategy } from './ask-union'
import { default as AskSlice } from './ask-slice'
import { AskVo } from 'app/products/mo/ask-mo/ask-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class AskDao {
  static addOneSuccess = (payload: any): AskVo[] => factory.create(strategy.addAsk).handle(payload)
  static getAllSuccess = (payload: any): AskVo[] => factory.create(strategy.getAllAsks).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { AskSlice }

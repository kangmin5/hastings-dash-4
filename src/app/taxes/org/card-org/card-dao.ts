import { CardFactory as factory } from './card-factory'
import { CardStrategy as strategy } from './card-union'
import { default as CardSlice } from './card-slice'
import { CardVo } from 'app/taxes/mo/card-mo/card-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class CardDao {
  static addOneSuccess = (payload: any): CardVo[] => factory.create(strategy.addCard).handle(payload)
  static getAllSuccess = (payload: any): CardVo[] => factory.create(strategy.getAllCards).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { CardSlice }

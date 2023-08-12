import { SubscribeFactory as factory } from './subscribe-factory'
import { SubscribeStrategy as strategy } from './subscribe-union'
import { default as SubscribeSlice } from './subscribe-slice'
import { SubscribeVo } from 'app/customers/mo/subscribe-mo/subscribe-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class SubscribeDao {
  static addOneSuccess = (payload: any): SubscribeVo[] => factory.create(strategy.addSubscribe).handle(payload)
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
  
  static getAllSuccess = (payload: any): SubscribeVo[] => factory.create(strategy.getAllSubscribes).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined

}

export { SubscribeSlice }

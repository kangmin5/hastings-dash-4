import { AddrFactory as factory } from './addr-factory'
import { AddrStrategy as strategy } from './addr-union'
import { default as AddrSlice } from './addr-slice'
import { AddrVo } from 'app/deliveries/mo/addr-mo/addr-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class AddrDao {
  static addOneSuccess = (payload: any): AddrVo[] => factory.create(strategy.addAddr).handle(payload)
  static getAllSuccess = (payload: any): AddrVo[] => factory.create(strategy.getAllAddrs).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { AddrSlice }

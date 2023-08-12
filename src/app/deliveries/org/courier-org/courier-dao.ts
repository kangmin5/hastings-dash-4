import { CourierFactory as factory } from './courier-factory'
import { CourierStrategy as strategy } from './courier-union'
import { default as CourierSlice } from './courier-slice'
import { CourierVo } from 'app/deliveries/mo/courier-mo/courier-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class CourierDao {
  static addOneSuccess = (payload: any): CourierVo[] => factory.create(strategy.addCourier).handle(payload)
  static getAllSuccess = (payload: any): CourierVo[] => factory.create(strategy.getAllCouriers).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { CourierSlice }

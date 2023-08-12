import { ShipFactory as factory } from './ship-factory'
import { ShipStrategy as strategy } from './ship-union'
import { default as ShipSlice } from './ship-slice'
import { ShipVo } from 'app/deliveries/mo/ship-mo/ship-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class ShipDao {
  static addOneSuccess = (payload: any): ShipVo[] => factory.create(strategy.addShip).handle(payload)
  static getAllSuccess = (payload: any): ShipVo[] => factory.create(strategy.getAllShips).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { ShipSlice }

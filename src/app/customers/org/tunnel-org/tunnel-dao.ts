import { TunnelFactory as factory } from './tunnel-factory'
import { TunnelStrategy as strategy } from './tunnel-union'
import { default as TunnelSlice } from './tunnel-slice'
import { TunnelVo } from 'app/customers/mo/tunnel-mo/tunnel-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class TunnelDao {
  static addOneSuccess = (payload: any): TunnelVo[] => factory.create(strategy.addTunnel).handle(payload)
  static getAllSuccess = (payload: any): TunnelVo[] => factory.create(strategy.getAllTunnels).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { TunnelSlice }

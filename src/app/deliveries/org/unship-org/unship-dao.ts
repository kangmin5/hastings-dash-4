import { UnshipFactory as factory } from './unship-factory'
import { UnshipStrategy as strategy } from './unship-union'
import { default as UnshipSlice } from './unship-slice'
import { UnshipVo } from 'app/deliveries/mo/unship-mo/unship-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class UnshipDao {
  static addOneSuccess = (payload: any): UnshipVo[] => factory.create(strategy.addUnship).handle(payload)
  static getAllSuccess = (payload: any): UnshipVo[] => factory.create(strategy.getAllUnship).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { UnshipSlice }

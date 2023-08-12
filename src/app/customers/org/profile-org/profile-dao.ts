import { ProfileFactory as factory } from './profile-factory'
import { ProfileStrategy as strategy } from './profile-union'
import { default as ProfileSlice } from './profile-slice'
import { ProfileVo } from 'app/customers/mo/profile-mo/profile-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class ProfileDao {
  static addOneSuccess = (payload: any): ProfileVo[] => factory.create(strategy.addProfile).handle(payload)
  static getAllSuccess = (payload: any): ProfileVo[] => factory.create(strategy.getAllProfiles).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { ProfileSlice }

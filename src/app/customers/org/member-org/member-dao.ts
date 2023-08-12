import { MemberFactory as factory } from './member-factory'
import { MemberStrategy as strategy } from './member-union'
import { default as MemberSlice } from './member-slice'
import { MemberVo } from 'app/customers/mo/member-mo/member-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class MemberDao {
  static addOneSuccess = (payload: any): MemberVo[] => factory.create(strategy.addMember).handle(payload)
  static getAllSuccess = (payload: any): MemberVo[] => factory.create(strategy.getAllMembers).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { MemberSlice }

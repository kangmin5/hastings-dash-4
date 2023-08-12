import { AttrFactory as factory } from './attr-factory'
import { AttrStrategy as strategy } from './attr-union'
import { default as AttrSlice } from './attr-slice'
import { AttrVo } from 'app/products/mo/attr-mo/attr-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class AttrDao {
  static addOneSuccess = (payload: any): AttrVo[] => factory.create(strategy.addAttr).handle(payload)
  static getAllSuccess = (payload: any): AttrVo[] => factory.create(strategy.getAllAttrs).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { AttrSlice }

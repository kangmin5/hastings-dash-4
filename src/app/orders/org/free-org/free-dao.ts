import { FreeAxios } from './free-axios'
import { FreeFactory as factory } from './free-factory'
import { FreeStrategy as strategy } from './free-union'
import { default as FreeSlice } from './free-slice'
import { FreeVo } from '../../mo/free-mo/free-vo'

export class FreeDao {
  static addOneSuccess = (payload: any) => factory.create(strategy.addFree).handle(payload)
  static addOneFailure = (state: any) => undefined
  static getAllSuccess = (payload: any): FreeVo[] => factory.create(strategy.getAllFrees).handle(payload)
  static getAllFailure = (payload: any): FreeVo[] => factory.create(strategy.fakeFrees).handle()
  static getBySuccess = (payload: any) => undefined
  static getByFailure = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static getByIdFailure = (payload: any) => undefined
  static alterByIdFailure = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdFailure = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { FreeSlice }


import { BoardStrategy as strategy } from './board-union'
import { default as BoardSlice } from './board-slice'
import { BoardVo } from 'app/boards/mo/board-mo/board-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class BoardDao {
  static addOneSuccess = (payload: any): BoardVo[] => undefined
  static getAllSuccess = (payload: any): BoardVo[] => undefined
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { BoardSlice }

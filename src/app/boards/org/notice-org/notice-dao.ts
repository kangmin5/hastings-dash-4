import { NoticeFactory as factory } from './notice-factory'
import { NoticeStrategy as strategy } from './notice-union'
import { default as NoticeSlice } from './notice-slice'
import { NoticeVo } from 'app/boards/mo/notice-mo/notice-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class NoticeDao {
  static addOneSuccess = (payload: any): NoticeVo[] => factory.create(strategy.addNotice).handle(payload)
  static getAllSuccess = (payload: any): NoticeVo[] => factory.create(strategy.getAllNotices).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { NoticeSlice }

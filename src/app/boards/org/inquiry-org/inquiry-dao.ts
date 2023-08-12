import { InquiryFactory as factory } from './inquiry-factory'
import { InquiryStrategy as strategy } from './inquiry-union'
import { default as InquirySlice } from './inquiry-slice'
import { InquiryVo } from 'app/boards/mo/inquiry-mo/inquiry-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class InquiryDao {
  static addOneSuccess = (payload: any): InquiryVo[] => factory.create(strategy.addInquiry).handle(payload)
  static getAllSuccess = (payload: any): InquiryVo[] => factory.create(strategy.getAllInquiries).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { InquirySlice }

import { InquiryVo } from 'app/boards/mo/inquiry-mo/inquiry-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { InquiryStrategy } from './inquiry-union'
import { InquiryList } from '../../mo/inquiry-mo/inquiry-list'

type Strategy = keyof typeof InquiryStrategy

const InquiryMap: { [_case in Strategy]: StrategyType<InquiryVo[]> } = {
  getAllInquiries: new InquiryList(),
  getInquiryById: undefined,
  addInquiry: undefined,
  alterInquiryById: undefined,
  getInquiriesBy: undefined,
  getInquiriesByUser: undefined,
  delInquiryById: undefined
}

export class InquiryFactory {
  static create(_case: Strategy): StrategyType<InquiryVo[]> {
    const strategy = InquiryMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

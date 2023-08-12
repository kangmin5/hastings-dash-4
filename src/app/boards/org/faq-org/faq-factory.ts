import { FaqVo } from 'app/boards/mo/faq-mo/faq-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { FaqStrategy } from './faq-union'
import { FaqList } from '../../mo/faq-mo/faq-list'

type Strategy = keyof typeof FaqStrategy

const FaqMap: { [_case in Strategy]: StrategyType<FaqVo[]> } = {
  getAllFaqs: new FaqList(),
  getFaqById: undefined,
  addFaq: undefined,
  alterFaqById: undefined,
  getFaqsBy: undefined,
  delFaqById: undefined
}

export class FaqFactory {
  static create(_case: Strategy): StrategyType<FaqVo[]> {
    const strategy = FaqMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

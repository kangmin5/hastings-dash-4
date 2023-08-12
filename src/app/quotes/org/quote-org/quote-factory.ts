import { QuoteVo } from 'app/quotes/mo/quote-mo/quote-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { QuoteStrategy } from './quote-union'
import { QuoteList } from '../../mo/quote-mo/quote-list'

type Strategy = keyof typeof QuoteStrategy

const QuoteMap: { [_case in Strategy]: StrategyType<QuoteVo[]> } = {
  getAllQuotes: new QuoteList(),
  getQuoteById: undefined,
  addQuote: undefined,
  alterQuoteById: undefined,
  getQuotesBy: undefined,
  delQuoteById: undefined
}

export class QuoteFactory {
  static create(_case: Strategy): StrategyType<QuoteVo[]> {
    const strategy = QuoteMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

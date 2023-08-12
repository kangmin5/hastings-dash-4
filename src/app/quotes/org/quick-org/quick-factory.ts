import { QuickVo } from 'app/quotes/mo/quick-mo/quick-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { QuickStrategy } from './quick-union'
import { QuickList } from 'app/quotes/mo/quick-mo/quick-list'

type Strategy = keyof typeof QuickStrategy

const QuickMap: { [_case in Strategy]: StrategyType<QuickVo[]> } = {
  getAllQuicks: new QuickList(),
  getQuickById: undefined,
  addQuick: undefined,
  alterQuickById: undefined,
  getQuicksBy: undefined,
  delQuickById: undefined
}

export class QuickFactory {
  static create(_case: Strategy): StrategyType<QuickVo[]> {
    const strategy = QuickMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

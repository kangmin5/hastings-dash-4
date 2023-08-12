import { QuickEntryVo } from 'app/quotes/mo/quick-entry-mo/quick-entry-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { QuickEntryStrategy } from './quick-entry-union'
import { QuickEntryList } from 'app/quotes/mo/quick-entry-mo/quick-entry-list'

type Strategy = keyof typeof QuickEntryStrategy

const QuickEntryMap: { [_case in Strategy]: StrategyType<QuickEntryVo[]> } = {
  getAllQuickEntries: new QuickEntryList(),
  getQuickEntryById: undefined,
  addQuickEntry: undefined,
  alterQuickEntryById: undefined,
  getQuickEntriesBy: undefined,
  delQuickEntryById: undefined
}

export class QuickEntryFactory {
  static create(_case: Strategy): StrategyType<QuickEntryVo[]> {
    const strategy = QuickEntryMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

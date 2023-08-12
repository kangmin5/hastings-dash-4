import { DormantVo } from 'app/customers/mo/dormant-mo/dormant-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { DormantStrategy } from './dormant-union'
import { DormantDraft } from 'app/customers/mo/dormant-mo/dormant-draft'

type Strategy = keyof typeof DormantStrategy

const DormantMap: { [_case in Strategy]: StrategyType<DormantVo[]> } = {
  getAllDormants: new DormantDraft(),
  getDormantById: undefined,
  addDormant: undefined,
  alterDormantById: undefined,
  getDormantsBy: undefined,
  delDormantById: undefined
}

export class DormantFactory {
  static create(_case: Strategy): StrategyType<DormantVo[]> {
    const strategy = DormantMap[_case]
    if (!strategy) console.log('휴먼고객 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

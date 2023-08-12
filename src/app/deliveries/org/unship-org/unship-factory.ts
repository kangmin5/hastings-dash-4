import { UnshipVo } from 'app/deliveries/mo/unship-mo/unship-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { UnshipStrategy } from './unship-union'
import { UnshipList } from 'app/deliveries/mo/unship-mo/unship-list'

type Strategy = keyof typeof UnshipStrategy

const UnshipMap: { [_case in Strategy]: StrategyType<UnshipVo[]> } = {
  getAllUnship: new UnshipList(),
  getUnshipById: undefined,
  addUnship: undefined,
  alterUnshipById: undefined,
  getUnshipBy: undefined,
  delUnshipById: undefined
}

export class UnshipFactory {
  static create(_case: Strategy): StrategyType<UnshipVo[]> {
    const strategy = UnshipMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

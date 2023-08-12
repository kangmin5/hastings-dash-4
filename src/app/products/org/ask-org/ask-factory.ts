import { AskVo } from 'app/products/mo/ask-mo/ask-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { AskStrategy } from './ask-union'
import { AskList } from '../../mo/ask-mo/ask-list'

type Strategy = keyof typeof AskStrategy

const AskMap: { [_case in Strategy]: StrategyType<AskVo[]> } = {
  getAllAsks: new AskList(),
  getAskById: undefined,
  addAsk: undefined,
  alterAskById: undefined,
  getAsksBy: undefined,
  delAskById: undefined
}

export class AskFactory {
  static create(_case: Strategy): StrategyType<AskVo[]> {
    const strategy = AskMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

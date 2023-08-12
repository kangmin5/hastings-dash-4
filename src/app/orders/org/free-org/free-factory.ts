import { FreeVo } from '../../mo/free-mo/free-vo'
import { FreeList } from '../../mo/free-mo/free-list'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { FreeStrategy } from './free-union'

type Strategy = keyof typeof FreeStrategy

const FreeMap: { [_case in Strategy]: StrategyType<FreeVo[]> } = {
  fakeFrees: new FreeList(),
  getAllFrees: undefined,
  getFreeById: undefined,
  addFree: undefined,
  alterFreeById: undefined,
  getFreesBy: undefined,
  delFreeById: undefined
}

export class FreeFactory {
  static create(_case: Strategy): StrategyType<FreeVo[]> {
    const strategy = FreeMap[_case]
    if (!strategy) throw new Error('비회원주문 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

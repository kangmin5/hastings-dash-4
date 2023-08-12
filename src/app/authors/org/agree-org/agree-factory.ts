import { AgreeVo } from 'app/authors/mo/agree-mo/agree-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { AgreeStrategy } from './agree-union'
import { AgreeList } from '../../mo/agree-mo/agree-list'

type Strategy = keyof typeof AgreeStrategy

const AgreeMap: { [_case in Strategy]: StrategyType<AgreeVo[]> } = {
  getAllAgrees: new AgreeList(),
  getAgreeById: undefined,
  addAgree: undefined,
  alterAgreeById: undefined,
  getAgreesBy: undefined,
  delAgreeById: undefined
}

export class AgreeFactory {
  static create(_case: Strategy): StrategyType<AgreeVo[]> {
    const strategy = AgreeMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

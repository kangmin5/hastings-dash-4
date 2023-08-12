import { ReturnApplyVo } from './return-apply-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { ReturnApplyStrategy } from './return-apply-union'

type Strategy = keyof typeof ReturnApplyStrategy

const ReturnApplyMap: { [_case in Strategy]: StrategyType<ReturnApplyVo[]> } = {
  fakeReturnApplies: undefined,
  getAllReturnApplies: undefined,
  getReturnApplyById: undefined,
  addReturnApply: undefined,
  alterReturnApplyById: undefined,
  getReturnAppliesBy: undefined,
  delReturnApplyById: undefined
}

export class ReturnApplyFactory {
  static create(_case: Strategy): StrategyType<ReturnApplyVo[]> {
    const strategy = ReturnApplyMap[_case]
    if (!strategy) throw new Error('질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

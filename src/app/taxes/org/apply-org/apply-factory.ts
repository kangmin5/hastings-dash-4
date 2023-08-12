import { ApplyVo } from 'app/taxes/mo/apply-mo/apply-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { ApplyStrategy } from './apply-union'
import { ApplyList } from 'app/taxes/mo/apply-mo/apply-list'

type Strategy = keyof typeof ApplyStrategy

const ApplyMap: { [_case in Strategy]: StrategyType<ApplyVo[]> } = {
  getAllApplies: new ApplyList(),
  getApplyById: undefined,
  addApply: undefined,
  alterApplyById: undefined,
  getAppliesBy: undefined,
  delApplyById: undefined
}

export class ApplyFactory {
  static create(_case: Strategy): StrategyType<ApplyVo[]> {
    const strategy = ApplyMap[_case]
    if (!strategy) console.log(' [계산서 신청] 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

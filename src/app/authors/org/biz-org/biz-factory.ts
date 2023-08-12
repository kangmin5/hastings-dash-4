import { BizVo } from 'app/authors/mo/biz-mo/biz-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { BizStrategy } from './biz-union'
import { BizList } from 'app/authors/mo/biz-mo/biz-list'

type Strategy = keyof typeof BizStrategy

const BizMap: { [_case in Strategy]: StrategyType<BizVo[]> } = {
  getAllBizMembers: new BizList(),
  getBizById: undefined,
  addBiz: undefined,
  alterBizById: undefined,
  getBizMembersBy: undefined,
  delBizById: undefined
}

export class BizFactory {
  static create(_case: Strategy): StrategyType<BizVo[]> {
    const strategy = BizMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

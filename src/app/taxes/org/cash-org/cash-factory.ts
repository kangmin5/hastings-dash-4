import { CashVo } from 'app/taxes/mo/cash-mo/cash-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { CashStrategy } from './cash-union'
import { GetAllCashes } from 'app/taxes/mo/cash-mo/cash-list'

type Strategy = keyof typeof CashStrategy

const CashMap: { [_case in Strategy]: StrategyType<CashVo[]> } = {
  getAllCashes: new GetAllCashes(),
  getCashById: undefined,
  addCash: undefined,
  alterCashById: undefined,
  getCashesBy: undefined,
  delCashById: undefined
}

export class CashFactory {
  static create(_case: Strategy): StrategyType<CashVo[]> {
    const strategy = CashMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

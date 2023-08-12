import { RefundVo } from 'app/taxes/mo/refund-mo/refund-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { RefundStrategy } from './refund-union'
import { RefundList } from '../../mo/refund-mo/refund-list'

type Strategy = keyof typeof RefundStrategy

const RefundMap: { [_case in Strategy]: StrategyType<RefundVo[]> } = {
  getAllRefunds: new RefundList(),
  getRefundById: undefined,
  addRefund: undefined,
  alterRefundById: undefined,
  getRefundsBy: undefined,
  delRefundById: undefined
}

export class RefundFactory {
  static create(_case: Strategy): StrategyType<RefundVo[]> {
    const strategy = RefundMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

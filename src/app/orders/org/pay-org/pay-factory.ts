import { PayVo } from '../../mo/pay-mo/pay-vo'
import { PayList } from '../../mo/pay-mo/pay-list'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { PayStrategy } from './pay-union'

type Strategy = keyof typeof PayStrategy

const PayMap: { [_case in Strategy]: StrategyType<PayVo[]> } = {
  fakePays: new PayList(),
  getAllPays: undefined,
  getPayById: undefined,
  addPay: undefined,
  alterPayById: undefined,
  getPaysBy: undefined,
  delPayById: undefined
}

export class PayFactory {
  static create(_case: Strategy): StrategyType<PayVo[]> {
    const strategy = PayMap[_case]
    if (!strategy) throw new Error('질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

import { SubscribeVo } from 'app/customers/mo/subscribe-mo/subscribe-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { SubscribeStrategy } from './subscribe-union'
import { SubscribeList } from '../../mo/subscribe-mo/subscribe-list'

type Strategy = keyof typeof SubscribeStrategy

const SubscribeMap: { [_case in Strategy]: StrategyType<SubscribeVo[]> } = {
  getAllSubscribes: new SubscribeList(),
  getSubscribeById: undefined,
  addSubscribe: undefined,
  alterSubscribeById: undefined,
  getSubscribesBy: undefined,
  getSubscribesByUser: undefined,
  delSubscribeById: undefined
}

export class SubscribeFactory {
  static create(_case: Strategy): StrategyType<SubscribeVo[]> {
    const strategy = SubscribeMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

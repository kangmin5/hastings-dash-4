import { TunnelVo } from 'app/customers/mo/tunnel-mo/tunnel-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { TunnelStrategy } from './tunnel-union'
import { TunnelList } from 'app/customers/mo/tunnel-mo/tunnel-list'

type Strategy = keyof typeof TunnelStrategy

const TunnelMap: { [_case in Strategy]: StrategyType<TunnelVo[]> } = {
  getAllTunnels: new TunnelList(),
  getTunnelById: undefined,
  addTunnel: undefined,
  alterTunnelById: undefined,
  getTunnelsBy: undefined,
  delTunnelById: undefined
}

export class TunnelFactory {
  static create(_case: Strategy): StrategyType<TunnelVo[]> {
    const strategy = TunnelMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

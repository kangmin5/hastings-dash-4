import { AddrVo } from 'app/deliveries/mo/addr-mo/addr-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { AddrStrategy } from './addr-union'
import { AddrList } from '../../mo/addr-mo/addr-list'

type Strategy = keyof typeof AddrStrategy

const AddrMap: { [_case in Strategy]: StrategyType<AddrVo[]> } = {
  getAllAddrs: new AddrList(),
  getAddrById: undefined,
  addAddr: undefined,
  alterAddrById: undefined,
  getAddrsBy: undefined,
  delAddrById: undefined
}

export class AddrFactory {
  static create(_case: Strategy): StrategyType<AddrVo[]> {
    const strategy = AddrMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

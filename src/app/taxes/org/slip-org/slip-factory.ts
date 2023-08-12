import { SlipVo } from 'app/taxes/mo/slip-mo/slip-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { SlipStrategy } from './slip-union'
import { SlipList } from '../../mo/slip-mo/slip-list'

type Strategy = keyof typeof SlipStrategy

const SlipMap: { [_case in Strategy]: StrategyType<SlipVo[]> } = {
  getAllSlips: new SlipList(),
  getSlipById: undefined,
  addSlip: undefined,
  alterSlipById: undefined,
  getSlipsBy: undefined,
  delSlipById: undefined
}

export class SlipFactory {
  static create(_case: Strategy): StrategyType<SlipVo[]> {
    const strategy = SlipMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

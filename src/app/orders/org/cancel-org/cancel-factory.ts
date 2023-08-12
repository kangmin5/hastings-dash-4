import { CutAtom } from '../../atom/cut-atom'
import { CancelList } from '../../mo/cancel-mo/cancel-list'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { CancelStrategy } from './cancel-union'

type Strategy = keyof typeof CancelStrategy

const CancelMap: { [_case in Strategy]: StrategyType<CutAtom[]> } = {
  fakeCancels: new CancelList(),
  getAllCancels: undefined,
  getCancelById: undefined,
  addCancel: undefined,
  alterCancelById: undefined,
  getCancelsBy: undefined,
  delCancelById: undefined
}

export class CancelFactory {
  static create(_case: Strategy): StrategyType<CutAtom[]> {
    const strategy = CancelMap[_case]
    if (!strategy) throw new Error('질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

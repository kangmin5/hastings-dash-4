import { TroubleVo } from './trouble-vo'

import { StrategyType } from 'app/utils/atom/strategy-atom'
import { TroubleStrategy } from './trouble-union'

type Strategy = keyof typeof TroubleStrategy

export class TroubleFactory {
  static create(_case: Strategy): StrategyType<TroubleVo> {
    return undefined
  }
}

import { StrategyType } from 'app/utils/atom/strategy-atom'
import { FreeVo } from './free-vo'
import { IdMap } from 'app/utils/atom/id-atom'

export class FreeList implements StrategyType<FreeVo[]> {
  handle(args?: unknown): FreeVo[] {
    const arr: FreeVo[] = []
 
    return arr
  }
}

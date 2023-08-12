import { StrategyType } from 'app/utils/atom/strategy-atom'
import { DealAtom } from '../../atom/deal-atom'
import { IdMap } from 'app/utils/atom/id-atom'


export class BuyList implements StrategyType<DealAtom[]> {
  handle(args?: any): DealAtom[] {
    const arr: DealAtom[] = []

    console.log(' &&&&&&&&&&& array ', JSON.stringify(args))
    const len = args.length
    let i = 0
    for (; i < len; i++) {



    }
    return arr
  }
}

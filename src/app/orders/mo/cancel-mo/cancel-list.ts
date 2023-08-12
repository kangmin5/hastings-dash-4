import { StrategyType } from 'app/utils/atom/strategy-atom'
import { CutAtom } from '../../atom/cut-atom'
import { IdMap } from 'app/utils/atom/id-atom'
import { CancelBuilder } from './cancel-vo'

export class CancelList implements StrategyType<CutAtom[]> {
  handle(args?: any): CutAtom[] {
    const items: CutAtom[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const json = new CancelBuilder()
        .cancelId(array[i].id)

        .transform()
        .toJson()
      console.log(' &&&&&&&&&&& json ', JSON.stringify(json))
      items.push(json)
    }
    return items
  }
}

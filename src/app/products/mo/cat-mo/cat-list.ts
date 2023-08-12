import { CatAtom } from 'app/products/atom/cat-atom'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { CatBuilder } from 'app/products/atom/cat-atom'

export class CatList implements StrategyType<CatAtom[]> {
  handle(args?: any): CatAtom[] {
    const items: CatAtom[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const json = new CatBuilder()
        .catId(array[i].id)

        .transform()
        .toJson()
      console.log(' &&&&&&&&&&& json ', JSON.stringify(json))
      items.push(json)
    }
    return items
  }
}

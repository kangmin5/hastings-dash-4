import { FacetAtom } from 'app/products/atom/facet-atom'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { FacetBuilder } from 'app/products/atom/facet-atom'

export class AttrList implements StrategyType<FacetAtom[]> {
  handle(args?: any): FacetAtom[] {
    const items: FacetAtom[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const json = new FacetBuilder()

        .transform()
        .toJson()
      console.log(' &&&&&&&&&&& json ', JSON.stringify(json))
      items.push(json)
    }
    return items
  }
}

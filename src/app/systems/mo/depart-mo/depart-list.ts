import { DepartVo } from 'app/systems/mo/depart-mo/depart-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { DepartBo } from 'app/systems/mo/depart-mo/depart-vo'

export class DepartList implements StrategyType<DepartVo[]> {
  handle(args?: any): DepartVo[] {
    const items: DepartVo[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const json = new DepartBo()
        .departId(array[i].id)

        .transform()
        .toJson()
      console.log(' &&&&&&&&&&& json ', JSON.stringify(json))
      items.push(json)
    }
    return items
  }
}

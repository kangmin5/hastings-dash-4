import { EmployVo } from 'app/systems/mo/employ-mo/employ-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { EmployBo } from 'app/systems/mo/employ-mo/employ-vo'

export class EmployList implements StrategyType<EmployVo[]> {
  handle(args?: any): EmployVo[] {
    const items: EmployVo[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      
    }
    return items
  }
}

import { WorkBuilder } from 'app/authors/atom/work-atom'
import { BizTo, BizVo } from 'app/authors/mo/biz-mo/biz-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'

export class BizList implements StrategyType<BizVo[]> {
  handle(args?: any): BizVo[] {
    const items: BizVo[] = []
    const array = args
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
     
    }
    return items
  }
}

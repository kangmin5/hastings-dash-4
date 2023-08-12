import { StrategyType } from 'app/utils/atom/strategy-atom'
import { BatchTo, BatchVo } from 'app/deliveries/mo/batch-mo/batch-vo'
import { DoorBuilder } from 'app/deliveries/atom/door-atom'

export class BatchList implements StrategyType<BatchVo[]> {
  handle(args?: any): BatchVo[] {
    const items: BatchVo[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].id

      const a1 = new DoorBuilder()
        .id(x1)

        .build()

      const to = new BatchTo()
      to.setDoor(a1)

      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}

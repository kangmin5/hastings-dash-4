import { PointBo, PointTo, PointVo } from 'app/customers/mo/point-mo/point-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { CarBuilder } from 'app/customers/atom/car-atom'
import { ReserveBuilder } from 'app/customers/atom/reserve-atom'

export class PointList implements StrategyType<PointVo[]> {
  handle(args?: any): PointVo[] {
    const items: PointVo[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].id

      const c = new CarBuilder().id(x1).build()

      const r = new ReserveBuilder()
      
      .build()

      const to = new PointTo()
      to.setCar(c)
      to.setReserve(r)
      

      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}

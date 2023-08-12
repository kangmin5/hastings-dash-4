import { MemberTo, MemberVo } from 'app/customers/mo/member-mo/member-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { CarBuilder } from 'app/customers/atom/car-atom'

export class MemberList implements StrategyType<MemberVo[]> {
  handle(args?: any): MemberVo[] {
    const items: MemberVo[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].id
      const a1 = new CarBuilder()
        .id(x1)

        .build()

      const to = new MemberTo()

      to.setCar(a1)

      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}

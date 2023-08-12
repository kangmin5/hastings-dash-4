import { CarBuilder } from 'app/customers/atom/car-atom'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { ProfileBo } from 'app/customers/mo/profile-mo/profile-vo'
import { ProfileVo } from './profile-vo'

export class ProfileList implements StrategyType<ProfileVo[]> {
  handle(args?: any): ProfileVo[] {
    const items: ProfileVo[] = []
    const array = args
    console.log(' &&&&&&&&&&& 프로필 배열 &&&&&&&&&&& \n ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].id

      const a1 = new CarBuilder().id(x1).build()

      const jo = new ProfileBo().car(a1).transform().toJson()

      console.log(' &&&&&&&&&&& 프로필 제이슨 &&&&&&&&&&& \n', JSON.stringify(jo))

      items.push(jo)
    }
    return items
  }
}

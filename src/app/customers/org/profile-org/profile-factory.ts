import { ProfileVo } from 'app/customers/mo/profile-mo/profile-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { ProfileStrategy } from './profile-union'
import { ProfileList } from '../../mo/profile-mo/profile-list'

type Strategy = keyof typeof ProfileStrategy

const ProfileMap: { [_case in Strategy]: StrategyType<ProfileVo[]> } = {
  getAllProfiles: new ProfileList(),
  getProfileById: undefined,
  addProfile: undefined,
  alterProfileById: undefined,
  getProfilesBy: undefined,
  delProfileById: undefined
}

export class ProfileFactory {
  static create(_case: Strategy): StrategyType<ProfileVo[]> {
    const strategy = ProfileMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

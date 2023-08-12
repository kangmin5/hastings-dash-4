import { MemberVo } from 'app/customers/mo/member-mo/member-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { MemberStrategy } from './member-union'
import { MemberList } from '../../mo/member-mo/member-list'

type Strategy = keyof typeof MemberStrategy

const MemberMap: { [_case in Strategy]: StrategyType<MemberVo[]> } = {
  getAllMembers: new MemberList(),
  getMemberById: undefined,
  addMember: undefined,
  alterMemberById: undefined,
  getMembersBy: undefined,
  delMemberById: undefined
}

export class MemberFactory {
  static create(_case: Strategy): StrategyType<MemberVo[]> {
    const strategy = MemberMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

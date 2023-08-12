import { CounselVo } from 'app/boards/mo/counsel-mo/counsel-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { CounselStrategy } from './counsel-union'
import { CounselList } from '../../mo/counsel-mo/counsel-list'

type Strategy = keyof typeof CounselStrategy

const CounselMap: { [_case in Strategy]: StrategyType<CounselVo[]> } = {
  getAllCounsels: new CounselList(),
  getCounselsByUser: new CounselList(),
  getCounselById: undefined,
  addCounsel: undefined,
  alterCounselById: undefined,
  getCounselsBy: undefined,
  delCounselById: undefined
}

export class CounselFactory {
  static create(_case: Strategy): StrategyType<CounselVo[]> {
    const strategy = CounselMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

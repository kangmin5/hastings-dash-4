import { DepartAtom } from './depart-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { DepartStrategy } from './depart-union'
import { DepartList } from '../../mo/depart-mo/depart-list'

type Strategy = keyof typeof DepartStrategy

const DepartMap: { [_case in Strategy]: StrategyType<DepartAtom[]> } = {
  getAllDeparts: new DepartList(),
  getDepartById: undefined,
  addDepart: undefined,
  alterDepartById: undefined,
  getDepartsBy: undefined,
  delDepartById: undefined
}

export class DepartFactory {
  static create(_case: Strategy): StrategyType<DepartAtom[]> {
    const strategy = DepartMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

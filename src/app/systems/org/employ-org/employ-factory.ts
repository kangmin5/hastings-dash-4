import { EmployAtom } from './employ-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { EmployStrategy } from './employ-union'
import { EmployList } from '../../mo/employ-mo/employ-list'

type Strategy = keyof typeof EmployStrategy

const EmployMap: { [_case in Strategy]: StrategyType<EmployAtom[]> } = {
  getAllEmploys: new EmployList(),
  getEmployById: undefined,
  addEmploy: undefined,
  alterEmployById: undefined,
  getEmploysBy: undefined,
  delEmployById: undefined
}

export class EmployFactory {
  static create(_case: Strategy): StrategyType<EmployAtom[]> {
    const strategy = EmployMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

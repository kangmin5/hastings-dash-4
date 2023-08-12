import { SimpleVo } from 'app/quotes/mo/simple-mo/simple-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { SimpleStrategy } from './simple-union'
import { SimpleList } from '../../mo/simple-mo/simple-list'

type Strategy = keyof typeof SimpleStrategy

const SimpleMap: { [_case in Strategy]: StrategyType<SimpleVo[]> } = {
  getAllSimples: new SimpleList(),
  getSimpleById: undefined,
  addSimple: undefined,
  alterSimpleById: undefined,
  getSimplesBy: undefined,
  delSimpleById: undefined
}

export class SimpleFactory {
  static create(_case: Strategy): StrategyType<SimpleVo[]> {
    const strategy = SimpleMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

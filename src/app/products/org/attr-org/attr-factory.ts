import { AttrVo } from 'app/products/mo/attr-mo/attr-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { AttrStrategy } from './attr-union'
import { AttrList } from 'app/products/mo/attr-mo/attr-list'

type Strategy = keyof typeof AttrStrategy

const AttrMap: { [_case in Strategy]: StrategyType<AttrVo[]> } = {
  getAllAttrs: undefined,
  getAttrById: undefined,
  addAttr: undefined,
  alterAttrById: undefined,
  getAttrsBy: undefined,
  delAttrById: undefined
}

export class AttrFactory {
  static create(_case: Strategy): StrategyType<AttrVo[]> {
    const strategy = AttrMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

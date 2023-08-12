import { CatVo } from 'app/products/mo/cat-mo/cat-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { CatStrategy } from './cat-union'
import { CatList } from 'app/products/mo/cat-mo/cat-list'

type Strategy = keyof typeof CatStrategy

const CatMap: { [_case in Strategy]: StrategyType<CatVo[]> } = {
  getAllCategories: undefined,
  getCatById: undefined,
  addCat: undefined,
  alterCatById: undefined,
  getCategoriesBy: undefined,
  delCatById: undefined
}

export class CatFactory {
  static create(_case: Strategy): StrategyType<CatVo[]> {
    const strategy = CatMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

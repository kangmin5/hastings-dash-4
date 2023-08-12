import { TaxVo } from 'app/taxes/mo/tax-bill-mo/tax-bill-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { TaxStrategy } from './tax-union'
import { TaxList } from '../../mo/tax-bill-mo/tax-bill-list'

type Strategy = keyof typeof TaxStrategy

const TaxMap: { [_case in Strategy]: StrategyType<TaxVo[]> } = {
  getAllTaxes: new TaxList(),
  getTaxById: undefined,
  addTax: undefined,
  alterTaxById: undefined,
  getTaxesBy: undefined,
  delTaxById: undefined
}

export class TaxFactory {
  static create(_case: Strategy): StrategyType<TaxVo[]> {
    const strategy = TaxMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

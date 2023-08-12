import { DealAtom } from '../../atom/deal-atom'
import { BuyList } from '../../mo/buy-mo/buy-list'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { BuyStrategy } from './buy-union'

type Strategy = keyof typeof BuyStrategy

const BuyMap: { [_case in Strategy]: StrategyType<DealAtom[]> } = {
  fakeBuys: new BuyList(),
  getAllBuys: undefined,
  getBuyById: undefined,
  addBuy: undefined,
  alterBuyById: undefined,
  getBuysBy: undefined,
  delBuyById: undefined
}

export class BuyFactory {
  static create(_case: Strategy): StrategyType<DealAtom[]> {
    const strategy = BuyMap[_case]
    if (!strategy) throw new Error('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

//** Reference : https://bobbyhadz.com/blog/typescript-create-type-from-object-keys */

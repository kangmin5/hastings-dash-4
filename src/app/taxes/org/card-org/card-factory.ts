import { CardVo } from 'app/taxes/mo/card-mo/card-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { CardStrategy } from './card-union'
import { CardList } from '../../mo/card-mo/card-list'

type Strategy = keyof typeof CardStrategy

const CardMap: { [_case in Strategy]: StrategyType<CardVo[]> } = {
  getAllCards: new CardList(),
  getCardById: undefined,
  addCard: undefined,
  alterCardById: undefined,
  getCardsBy: undefined,
  delCardById: undefined
}

export class CardFactory {
  static create(_case: Strategy): StrategyType<CardVo[]> {
    const strategy = CardMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

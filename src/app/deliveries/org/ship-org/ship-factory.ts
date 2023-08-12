import { ShipVo } from 'app/deliveries/mo/ship-mo/ship-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { ShipStrategy } from './ship-union'
import { ShipList } from 'app/deliveries/mo/ship-mo/ship-list'

type Strategy = keyof typeof ShipStrategy

const ShipMap: { [_case in Strategy]: StrategyType<ShipVo[]> } = {
  getAllShips: new ShipList(),
  getShipById: undefined,
  addShip: undefined,
  alterShipById: undefined,
  getShipsBy: undefined,
  delShipById: undefined
}

export class ShipFactory {
  static create(_case: Strategy): StrategyType<ShipVo[]> {
    const strategy = ShipMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

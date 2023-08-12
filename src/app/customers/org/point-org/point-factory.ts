import { PointVo } from 'app/customers/mo/point-mo/point-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { PointStrategy } from './point-union'
import { PointList } from 'app/customers/mo/point-mo/point-list'

type Strategy = keyof typeof PointStrategy

const PointMap: { [_case in Strategy]: StrategyType<PointVo[]> } = {
  getAllPoints: new PointList(),
  getPointsByUser: undefined,
  getPointById: undefined,
  addPoint: undefined,
  alterPointById: undefined,
  getPointsBy: undefined,
  delPointById: undefined
}

export class PointFactory {
  static create(_case: Strategy): StrategyType<PointVo[]> {
    const strategy = PointMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

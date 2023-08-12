import { CourierVo } from 'app/deliveries/mo/courier-mo/courier-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { CourierStrategy } from './courier-union'
import { CourierList } from 'app/deliveries/mo/courier-mo/courier-list'

type Strategy = keyof typeof CourierStrategy

const CourierMap: { [_case in Strategy]: StrategyType<CourierVo[]> } = {
  getAllCouriers: new CourierList(),
  getCourierById: undefined,
  addCourier: undefined,
  alterCourierById: undefined,
  getCouriersBy: undefined,
  delCourierById: undefined
}

export class CourierFactory {
  static create(_case: Strategy): StrategyType<CourierVo[]> {
    const strategy = CourierMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

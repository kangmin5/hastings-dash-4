import { PointFactory as factory } from './point-factory'
import { PointStrategy as strategy } from './point-union'
import { default as PointSlice } from './point-slice'
import { PointVo } from 'app/customers/mo/point-mo/point-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class PointDao {
  static addOneSuccess = (payload: any): PointVo[] => factory.create(strategy.addPoint).handle(payload)
  static getAllSuccess = (payload: any): PointVo[] => factory.create(strategy.getAllPoints).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { PointSlice }

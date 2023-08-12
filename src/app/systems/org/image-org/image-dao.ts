import { ImageFactory as factory } from './image-factory'
import { ImageStrategy as strategy } from './image-union'
import { default as ImageSlice } from './image-slice'
import { ImageVo } from 'app/systems/mo/image-mo/image-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class ImageDao {
  static addOneSuccess = (payload: any): ImageVo[] => factory.create(strategy.addImage).handle(payload)
  static getAllSuccess = (payload: any): ImageVo[] => factory.create(strategy.getAllCompanies).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { ImageSlice }

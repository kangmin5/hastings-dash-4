import { ReviewFactory as factory } from './review-factory'
import { ReviewStrategy as strategy } from './review-union'
import { default as ReviewSlice } from './review-slice'
import { ReviewVo } from 'app/products/mo/review-mo/review-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class ReviewDao {
  static addOneSuccess = (payload: any): ReviewVo[] => factory.create(strategy.addReview).handle(payload)
  static getAllSuccess = (payload: any): ReviewVo[] => factory.create(strategy.getAllReviews).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { ReviewSlice }

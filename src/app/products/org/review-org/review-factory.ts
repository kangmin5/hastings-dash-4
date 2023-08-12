import { ReviewVo } from 'app/products/mo/review-mo/review-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { ReviewStrategy } from './review-union'
import { ReviewList } from '../../mo/review-mo/review-list'

type Strategy = keyof typeof ReviewStrategy

const ReviewMap: { [_case in Strategy]: StrategyType<ReviewVo[]> } = {
  getAllReviews: new ReviewList(),
  getReviewById: undefined,
  addReview: undefined,
  alterReviewById: undefined,
  getReviewsBy: undefined,
  getReviewsByUser: undefined,
  delReviewById: undefined
}

export class ReviewFactory {
  static create(_case: Strategy): StrategyType<ReviewVo[]> {
    const strategy = ReviewMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

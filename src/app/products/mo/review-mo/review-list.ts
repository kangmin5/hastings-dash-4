import { ReviewVo, ReviewTo } from 'app/products/mo/review-mo/review-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'

export class ReviewList implements StrategyType<ReviewVo[]> {
  handle(args?: any): ReviewVo[] {
    const items: ReviewVo[] = []
    const array = args
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].consent


      const to = new ReviewTo()
      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}

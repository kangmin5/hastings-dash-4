import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ReviewVo } from 'app/products/mo/review-mo/review-vo'
interface ReviewState {
  item: ReviewVo
}
const initialState: ReviewState = {
  item: new ReviewVo()
}
const ReviewReducer = createSlice({
  name: `review`,
  initialState,
  reducers: {
    saveReview(state, action: PayloadAction<ReviewVo>) {
      state.item = action.payload
    }
  }
})

export const { saveReview } = ReviewReducer.actions
export const reviewReducer = ReviewReducer.reducer

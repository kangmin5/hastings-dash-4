import { createSelector } from '@reduxjs/toolkit'

export const selectAllReviews = (state: any) => state.reviews.items
export const selectReviewsByUser = (state: any) => state.reviews.items
export const selectReviewFilter = (state: any) => state.review
export const selectError = (state: any) => state.reviews.error
export const selectIsLoading = (state: any) => state.reviews.isLoading
export const selectHasItem = (state: any) => state.reviews.hasItem
export const selectItemCount = (state: any) => state.reviews.len
export const selectMessage = (state: any) =>
  state.reviews.hasMessage === ''
    ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.reviews.hasMessage

export const ReviewByIdSelector = createSelector(
  [selectAllReviews, selectReviewFilter],

  (reviews, filter) => {
    return reviews.get(({ reviewId }) => reviewId.includes(filter))
  }
)

import { createSelector } from '@reduxjs/toolkit'

export const selectAllCategories = (state: any) => state.categories.items
export const selectCatFilter = (state: any) => state.faq
export const selectError = (state: any) => state.categories.error
export const selectIsLoading = (state: any) => state.categories.isLoading
export const selectHasItem = (state: any) => state.categories.hasItem
export const selectItemCount = (state: any) => state.categories.len
export const selectMessage = (state: any) =>
  state.categories.hasMessage === ''
    ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.categories.hasMessage

export const CatByIdSelector = createSelector(
  [selectAllCategories, selectCatFilter],

  (categories, filter) => {
    return categories.get(({ faqId }) => faqId.includes(filter))
  }
)

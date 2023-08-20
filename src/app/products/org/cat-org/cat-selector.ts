import { createSelector } from '@reduxjs/toolkit'

export const selectAllCats = (state: any) => state.cats.items
export const selectMainCategory = (state: any) => state.cat.mainCategory
export const selectHasMainCategory = (state: any) => state.cat.hasMainCategory
export const selectSubCategory = (state: any) => state.cat.subCategory
export const selectHasSubCategory = (state: any) => state.cat.hasSubCategory
export const selectError = (state: any) => state.cats.error
export const selectIsLoading = (state: any) => state.cats.isLoading
export const selectHasItem = (state: any) => state.cats.hasItem
export const selectItemCount = (state: any) => state.cats.len
export const selectMessage = (state: any) =>
  state.categories.hasMessage === ''
    ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.categories.hasMessage

// export const CatByIdSelector = createSelector(
//   [selectAllCats, selectCatFilter],

//   (categories, filter) => {
//     //return categories.get(({ faqId }) => carId.includes(filter))
//     return undefined
//   }
// )

import { createSelector } from '@reduxjs/toolkit'

export const selectAllProducts = (state: any) => state.products.items
export const selectProductsByMain = (state: any) => state.products.items
export const selectProductFilter = (state: any) => state.product
export const selectError = (state: any) => state.products.error
export const selectIsLoading = (state: any) => state.products.isLoading
export const selectHasItem = (state: any) => state.products.hasItem
export const selectItemCount = (state: any) => state.products.len
export const selectCountOfAll = (state: any) => state.products.countOfAll
export const selectCountOfSelling = (state: any) => state.products.countOfSelling
export const selectCountOfStopSelling = (state: any) => state.products.countOfStopSelling
export const selectCountOfDisplayed = (state: any) => state.products.countOfDisplayed
export const selectCountOfNoShow = (state: any) => state.products.countOfNoShow
export const selectMessage = (state: any) =>
  state.products.hasMessage === ''
    ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.products.hasMessage

export const ProductByIdSelector = createSelector(
  [selectAllProducts, selectProductFilter],

  (products, filter) => {
    return products.get(({ productId }) => productId.includes(filter))
  }
)

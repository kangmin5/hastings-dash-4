import { createSelector } from '@reduxjs/toolkit'

export const selectAllCarts = (state: any) => state.carts.items
export const selectCartFilter = (state: any) => state.cart
export const selectError = (state: any) => state.carts.error
export const selectIsLoading = (state: any) => state.carts.isLoading
export const selectHasItem = (state: any) => state.carts.hasItem
export const selectItemCount = (state: any) => state.carts.len
export const selectMessage = (state: any) =>
  state.carts.hasMessage === '' ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.' : state.carts.hasMessage

export const CartByIdSelector = createSelector(
  [selectAllCarts, selectCartFilter],

  (carts, filter) => {
    return carts.get(({ cartId }) => cartId.includes(filter))
  }
)

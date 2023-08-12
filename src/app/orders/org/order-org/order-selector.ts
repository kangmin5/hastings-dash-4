import { createSelector } from '@reduxjs/toolkit'

export const selectAllOrders = (state: any) => state.orders.items
export const selectOrderFilter = (state: any) => state.order
export const selectError = (state: any) => state.orders.error
export const selectIsLoading = (state: any) => state.orders.isLoading
export const selectHasItem = (state: any) => state.orders.hasItem
export const selectItemCount = (state: any) => state.orders.len
export const selectMessage = (state: any) =>
  state.orders.hasMessage === ''
    ? '[일반주문] 서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.orders.hasMessage

export const OrderByIdSelector = createSelector(
  [selectAllOrders, selectOrderFilter],

  (orders, filter) => {
    return orders.get(({ orderId }) => orderId.includes(filter))
  }
)

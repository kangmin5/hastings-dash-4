import { createSelector } from '@reduxjs/toolkit'

export const selectAllShips = (state: any) => state.deliveries.items
export const selectShipFilter = (state: any) => state.faq
export const selectError = (state: any) => state.deliveries.error
export const selectIsLoading = (state: any) => state.deliveries.isLoading
export const selectHasItem = (state: any) => state.deliveries.hasItem
export const selectItemCount = (state: any) => state.deliveries.len
export const selectMessage = (state: any) =>
  state.deliveries.hasMessage === ''
    ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.deliveries.hasMessage

export const ShipByIdSelector = createSelector(
  [selectAllShips, selectShipFilter],

  (deliveries, filter) => {
    return deliveries.get(({ shipId }) => shipId.includes(filter))
  }
)

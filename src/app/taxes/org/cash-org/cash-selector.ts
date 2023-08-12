import { createSelector } from '@reduxjs/toolkit'

export const selectAllCashes = (state: any) => state.cashes.items
export const selectCashFilter = (state: any) => state.cash
export const selectError = (state: any) => state.cashes.error
export const selectIsLoading = (state: any) => state.cashes.isLoading
export const selectHasItem = (state: any) => state.cashes.hasItem
export const selectItemCount = (state: any) => state.cashes.len
export const selectMessage = (state: any) =>
  state.cashes.hasMessage === '' ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.' : state.cashes.hasMessage

export const CashByIdSelector = createSelector(
  [selectAllCashes, selectCashFilter],

  (cashes, filter) => {
    return cashes.get(({ cashId }) => cashId.includes(filter))
  }
)

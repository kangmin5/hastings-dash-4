import { createSelector } from '@reduxjs/toolkit'

export const selectAllAsks = (state: any) => state.asks.items
export const selectAskFilter = (state: any) => state.ask
export const selectError = (state: any) => state.asks.error
export const selectIsLoading = (state: any) => state.asks.isLoading
export const selectHasItem = (state: any) => state.asks.hasItem
export const selectItemCount = (state: any) => state.asks.len
export const selectMessage = (state: any) =>
  state.asks.hasMessage === '' ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.' : state.asks.hasMessage

export const AskByIdSelector = createSelector(
  [selectAllAsks, selectAskFilter],

  (asks, filter) => {
    return asks.get(({ askId }) => askId.includes(filter))
  }
)

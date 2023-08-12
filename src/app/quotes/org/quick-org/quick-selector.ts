import { createSelector } from '@reduxjs/toolkit'

export const selectAllQuicks = (state: any) => state.quicks.items
export const selectQuickFilter = (state: any) => state.quick
export const selectError = (state: any) => state.quicks.error
export const selectIsLoading = (state: any) => state.quicks.isLoading
export const selectHasItem = (state: any) => state.quicks.hasItem
export const selectItemCount = (state: any) => state.quicks.len
export const selectMessage = (state: any) =>
  state.quicks.hasMessage === '' ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.' : state.quicks.hasMessage

export const QuickByIdSelector = createSelector(
  [selectAllQuicks, selectQuickFilter],

  (quicks, filter) => {
    return quicks.get(({ quickId }) => quickId.includes(filter))
  }
)

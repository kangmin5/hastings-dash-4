import { createSelector } from '@reduxjs/toolkit'

export const selectAllDormants = (state: any) => state.dormants.items
export const selectDormantFilter = (state: any) => state.dormant
export const selectError = (state: any) => state.dormants.error
export const selectIsLoading = (state: any) => state.dormants.isLoading
export const selectHasItem = (state: any) => state.dormants.hasItem
export const selectItemCount = (state: any) => state.dormants.len
export const selectMessage = (state: any) =>
  state.dormants.hasMessage === ''
    ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.dormants.hasMessage

export const DormantByIdSelector = createSelector(
  [selectAllDormants, selectDormantFilter],

  (dormants, filter) => {
    return dormants.get(({ dormantId }) => dormantId.includes(filter))
  }
)

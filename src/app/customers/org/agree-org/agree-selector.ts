import { createSelector } from '@reduxjs/toolkit'

export const selectAllAgrees = (state: any) => state.agrees.items
export const selectAgreesByUser = (state: any) => state.agrees.items
export const selectAgreeFilter = (state: any) => state.agree
export const selectError = (state: any) => state.agrees.error
export const selectIsLoading = (state: any) => state.agrees.isLoading
export const selectHasItem = (state: any) => state.agrees.hasItem
export const selectItemCount = (state: any) => state.agrees.len
export const selectMessage = (state: any) =>
  state.agrees.hasMessage === '' ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.' : state.agrees.hasMessage

export const AgreeByIdSelector = createSelector(
  [selectAllAgrees, selectAgreeFilter],

  (agrees, filter) => {
    return agrees.get(({ agreeId }) => agreeId.includes(filter))
  }
)

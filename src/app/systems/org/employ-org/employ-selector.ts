import { createSelector } from '@reduxjs/toolkit'

export const selectAllEmploys = (state: any) => state.employs.items
export const selectEmployFilter = (state: any) => state.employ
export const selectError = (state: any) => state.employs.error
export const selectIsLoading = (state: any) => state.employs.isLoading
export const selectHasItem = (state: any) => state.employs.hasItem
export const selectItemCount = (state: any) => state.employs.len
export const selectMessage = (state: any) =>
  state.employs.hasMessage === ''
    ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.employs.hasMessage

export const EmployByIdSelector = createSelector(
  [selectAllEmploys, selectEmployFilter],

  (employs, filter) => {
    return employs.get(({ employId }) => employId.includes(filter))
  }
)

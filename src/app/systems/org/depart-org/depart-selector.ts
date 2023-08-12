import { createSelector } from '@reduxjs/toolkit'

export const selectAllDeparts = (state: any) => state.departs.items
export const selectDepartFilter = (state: any) => state.depart
export const selectError = (state: any) => state.departs.error
export const selectIsLoading = (state: any) => state.departs.isLoading
export const selectHasItem = (state: any) => state.departs.hasItem
export const selectItemCount = (state: any) => state.departs.len
export const selectMessage = (state: any) =>
  state.departs.hasMessage === ''
    ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.departs.hasMessage

export const DepartByIdSelector = createSelector(
  [selectAllDeparts, selectDepartFilter],

  (departs, filter) => {
    return departs.get(({ departId }) => departId.includes(filter))
  }
)

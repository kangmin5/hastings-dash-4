import { createSelector } from '@reduxjs/toolkit'

export const selectAllCounsels = (state: any) => state.counsels.items
export const selectCounselFilter = (state: any) => state.counsel
export const selectError = (state: any) => state.counsels.error
export const selectIsLoading = (state: any) => state.counsels.isLoading
export const selectHasItem = (state: any) => state.counsels.hasItem
export const selectItemCount = (state: any) => state.counsels.len

export const selectMessage = (state: any) =>
  state.counsels.hasMessage === ''
    ? '[상담] 서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.counsels.hasMessage

export const CounselByIdSelector = createSelector(
  [selectAllCounsels, selectCounselFilter],

  (counsels, filter) => {
    return counsels.get(({ counselId }) => counselId.includes(filter))
  }
)

import { createSelector } from '@reduxjs/toolkit'

export const selectAllNotices = (state: any) => state.notices.items
export const selectNoticeImages = (state: any) => state.notices.images
export const selectNoticeFilter = (state: any) => state.notice
export const selectError = (state: any) => state.notices.error
export const selectIsLoading = (state: any) => state.notices.isLoading
export const selectHasItem = (state: any) => state.notices.hasItem
export const selectItemCount = (state: any) => state.notices.len
export const selectMessage = (state: any) =>
  state.notices.hasMessage === ''
    ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.notices.hasMessage

export const NoticeByIdSelector = createSelector(
  [selectAllNotices, selectNoticeFilter],

  (notices, filter) => {
    return notices.get(({ noticeId }) => noticeId.includes(filter))
  }
)

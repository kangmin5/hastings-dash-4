import { createSelector } from '@reduxjs/toolkit'

export const selectAllInquiries = (state: any) => state.inquiries.items
export const selectInquiryFilter = (state: any) => state.faq
export const selectError = (state: any) => state.inquiries.error
export const selectIsLoading = (state: any) => state.inquiries.isLoading
export const selectHasItem = (state: any) => state.inquiries.hasItem
export const selectItemCount = (state: any) => state.inquiries.len
export const selectMessage = (state: any) =>
  state.inquiries.hasMessage === ''
    ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.inquiries.hasMessage

export const InquiryByIdSelector = createSelector(
  [selectAllInquiries, selectInquiryFilter],

  (inquiries, filter) => {
    return inquiries.get(({ inquiryId }) => inquiryId.includes(filter))
  }
)

import { createSelector } from '@reduxjs/toolkit'

export const selectAllRefunds = (state: any) => state.refunds.items
export const selectRefundFilter = (state: any) => state.refund
export const selectError = (state: any) => state.refunds.error
export const selectIsLoading = (state: any) => state.refunds.isLoading
export const selectHasItem = (state: any) => state.refunds.hasItem
export const selectItemCount = (state: any) => state.refunds.len
export const selectMessage = (state: any) =>
  state.refunds.hasMessage === ''
    ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.refunds.hasMessage

export const RefundByIdSelector = createSelector(
  [selectAllRefunds, selectRefundFilter],

  (refunds, filter) => {
    return refunds.get(({ refundId }) => refundId.includes(filter))
  }
)

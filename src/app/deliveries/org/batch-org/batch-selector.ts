import { createSelector } from '@reduxjs/toolkit'

export const selectAllBatches = (state: any) => state.batches.items
export const selectBatchFilter = (state: any) => state.faq
export const selectError = (state: any) => state.batches.error
export const selectIsLoading = (state: any) => state.batches.isLoading
export const selectHasItem = (state: any) => state.batches.hasItem
export const selectItemCount = (state: any) => state.batches.len
export const selectMessage = (state: any) =>
  state.batches.hasMessage === ''
    ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.batches.hasMessage

export const BatchByIdSelector = createSelector(
  [selectAllBatches, selectBatchFilter],

  (batches, filter) => {
    return batches.get(({ batchId }) => batchId.includes(filter))
  }
)

import { createSelector } from '@reduxjs/toolkit'

export const selectAllQuickEntries = (state: any) => state.QuickEntries.items
export const selectQuickEntryFilter = (state: any) => state.QuickEntry
export const selectError = (state: any) => state.QuickEntries.error
export const selectIsLoading = (state: any) => state.QuickEntries.isLoading
export const selectHasItem = (state: any) => state.QuickEntries.hasItem
export const selectItemCount = (state: any) => state.QuickEntries.len
export const selectMessage = (state: any) =>
  state.QuickEntries.hasMessage === '' ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.' : state.QuickEntries.hasMessage

export const QuickEntryByIdSelector = createSelector(
  [selectAllQuickEntries, selectQuickEntryFilter],

  (QuickEntries, filter) => {
    return QuickEntries.get(({ QuickEntryId }) => QuickEntryId.includes(filter))
  }
)

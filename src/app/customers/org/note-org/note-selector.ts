import { createSelector } from '@reduxjs/toolkit'

export const selectAllNotes = (state: any) => state.notes.items
export const selectNoteFilter = (state: any) => state.note
export const selectError = (state: any) => state.notes.error
export const selectIsLoading = (state: any) => state.notes.isLoading
export const selectHasItem = (state: any) => state.notes.hasItem
export const selectItemCount = (state: any) => state.notes.len
export const selectMessage = (state: any) =>
  state.notes.hasMessage === '' ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.' : state.notes.hasMessage

export const NoteByIdSelector = createSelector(
  [selectAllNotes, selectNoteFilter],

  (notes, filter) => {
    return notes.get(({ noteId }) => noteId.includes(filter))
  }
)

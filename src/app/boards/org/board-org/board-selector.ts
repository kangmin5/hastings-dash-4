import { createSelector } from '@reduxjs/toolkit'

export const selectAllBoards = (state: any) => state.boards.items
export const selectBoardFilter = (state: any) => state.board
export const selectError = (state: any) => state.boards.error
export const selectIsLoading = (state: any) => state.boards.isLoading
export const selectHasItem = (state: any) => state.boards.hasItem
export const selectItemCount = (state: any) => state.boards.len
export const selectMessage = (state: any) =>
  state.boards.hasMessage === ''
    ? '[게시판관리] 서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.boards.hasMessage

export const BoardByIdSelector = createSelector(
  [selectAllBoards, selectBoardFilter],

  (boards, filter) => {
    return boards.get(({ boardId }) => boardId.includes(filter))
  }
)

import { createSelector } from '@reduxjs/toolkit'

export const selectAllSimples = (state: any) => state.simples.items
export const selectSimpleFilter = (state: any) => state.simple
export const selectError = (state: any) => state.simples.error
export const selectIsLoading = (state: any) => state.simples.isLoading
export const selectHasItem = (state: any) => state.simples.hasItem
export const selectItemCount = (state: any) => state.simples.len
export const selectMessage = (state: any) =>
  state.simples.hasMessage === ''
    ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.simples.hasMessage

export const SimpleByIdSelector = createSelector(
  [selectAllSimples, selectSimpleFilter],

  (simples, filter) => {
    return simples.get(({ simpleId }) => simpleId.includes(filter))
  }
)

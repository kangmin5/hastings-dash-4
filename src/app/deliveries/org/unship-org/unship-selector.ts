import { createSelector } from '@reduxjs/toolkit'

export const selectAllUnship = (state: any) => state.UnshipItems.items
export const selectUnshipFilter = (state: any) => state.Unship
export const selectError = (state: any) => state.UnshipItems.error
export const selectIsLoading = (state: any) => state.UnshipItems.isLoading
export const selectHasItem = (state: any) => state.UnshipItems.hasItem
export const selectItemCount = (state: any) => state.UnshipItems.len
export const selectMessage = (state: any) =>
  state.UnshipItems.hasMessage === ''
    ? '[미배송] 서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.UnshipItems.hasMessage

export const UnshipByIdSelector = createSelector(
  [selectAllUnship, selectUnshipFilter],

  (Unship, filter) => {
    return Unship.get(({ UnshipId }) => UnshipId.includes(filter))
  }
)

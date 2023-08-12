import { createSelector } from '@reduxjs/toolkit'

export const selectAllCards = (state: any) => state.cards.items
export const selectCardById = (state: any) => state.card
export const selectError = (state: any) => state.cards.error
export const selectIsLoading = (state: any) => state.cards.isLoading
export const selectHasItem = (state: any) => state.cards.hasItem
export const selectItemCount = (state: any) => state.cards.len
export const selectMessage = (state: any) =>
  state.cards.hasMessage === '' ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.' : state.cards.hasMessage

export const CardByIdSelector = createSelector(
  [selectAllCards, selectCardById],

  (cards, filter) => {
    return cards.get(({ cardId }) => cardId.includes(filter))
  }
)

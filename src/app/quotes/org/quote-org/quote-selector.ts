import { createSelector } from '@reduxjs/toolkit'

export const selectAllQuotes = (state: any) => state.quotes.items
export const selectQuoteFilter = (state: any) => state.quote
export const selectError = (state: any) => state.quotes.error
export const selectIsLoading = (state: any) => state.quotes.isLoading
export const selectHasItem = (state: any) => state.quotes.hasItem
export const selectItemCount = (state: any) => state.quotes.len
export const selectMessage = (state: any) =>
  state.quotes.hasMessage === '' ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.' : state.quotes.hasMessage

export const QuoteByIdSelector = createSelector(
  [selectAllQuotes, selectQuoteFilter],

  (quotes, filter) => {
    return quotes.get(({ quoteId }) => quoteId.includes(filter))
  }
)

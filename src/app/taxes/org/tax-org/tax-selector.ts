import { createSelector } from '@reduxjs/toolkit'

export const selectAllTaxes = (state: any) => state.taxes.items
export const selectTaxFilter = (state: any) => state.tax
export const selectError = (state: any) => state.taxes.error
export const selectIsLoading = (state: any) => state.taxes.isLoading
export const selectHasItem = (state: any) => state.taxes.hasItem
export const selectItemCount = (state: any) => state.slips.len
export const selectMessage = (state: any) =>
  state.taxes.hasMessage === ''
    ? '[세금계산서] 서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.taxes.hasMessage

export const TaxByIdSelector = createSelector(
  [selectAllTaxes, selectTaxFilter],

  (taxes, filter) => {
    return taxes.get(({ faqId }) => faqId.includes(filter))
  }
)

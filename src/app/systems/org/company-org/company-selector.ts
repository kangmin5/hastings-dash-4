import { createSelector } from '@reduxjs/toolkit'

export const selectAllCompanies = (state: any) => state.companies.items
export const selectCompanyFilter = (state: any) => state.company
export const selectError = (state: any) => state.companies.error
export const selectIsLoading = (state: any) => state.companies.isLoading
export const selectHasItem = (state: any) => state.companies.hasItem
export const selectItemCount = (state: any) => state.companies.len
export const selectMessage = (state: any) =>
  state.companies.hasMessage === ''
    ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.companies.hasMessage

export const CompanyByIdSelector = createSelector(
  [selectAllCompanies, selectCompanyFilter],

  (companies, filter) => {
    return companies.get(({ companyId }) => companyId.includes(filter))
  }
)

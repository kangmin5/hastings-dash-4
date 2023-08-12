import { createSelector } from '@reduxjs/toolkit'
import { BankVo } from 'app/taxes/mo/bank-mo/bank-vo'

export const selectAllBanks = (state: any) => state.banks.items
export const selectBankById = (state: any) => state.bank
export const selectError = (state: any) => state.banks.error
export const selectIsLoading = (state: any) => state.banks.isLoading
export const selectHasItem = (state: any) => state.banks.hasItem
export const selectItemCount = (state: any) => state.banks.len
export const selectMessage = (state: any) =>
  state.banks.hasMessage === '' ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.' : state.banks.hasMessage

export const BankByIdSelector = createSelector(
  [selectAllBanks, selectBankById],

  (banks, filter) => {
    return banks.get(({ bankId }: { bankId: string }) => bankId.includes(filter))
  }
)

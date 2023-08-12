import { createSelector } from '@reduxjs/toolkit'

export const selectAllCustomers = (state: any) => state.customers.items
export const selectCustomerById = (state: any) => state.customers.item
export const selectCustomerFilter = (state: any) => state.customer
export const selectError = (state: any) => state.customers.error
export const selectIsLoading = (state: any) => state.customers.isLoading
export const selectHasItem = (state: any) => state.customers.hasItem
export const selectItemCount = (state: any) => state.customers.len
export const selectMessage = (state: any) =>
  state.customers.hasMessage === ''
    ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.customers.hasMessage

export const CustomerByIdSelector = createSelector(
  [selectAllCustomers, selectCustomerFilter],

  (customers, filter) => {
    return customers.get(({ customerId }) => customerId.includes(filter))
  }
)

import { createSelector } from '@reduxjs/toolkit'

export const selectAllAddrs = (state: any) => state.addrs.items
export const selectAddrFilter = (state: any) => state.faq
export const selectError = (state: any) => state.addrs.error
export const selectIsLoading = (state: any) => state.addrs.isLoading
export const selectHasItem = (state: any) => state.addrs.hasItem
export const selectItemCount = (state: any) => state.addrs.len
export const selectMessage = (state: any) =>
  state.addrs.hasMessage === '' ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.' : state.addrs.hasMessage

export const AddrByIdSelector = createSelector(
  [selectAllAddrs, selectAddrFilter],

  (addrs, filter) => {
    return addrs.get(({ addrId }) => addrId.includes(filter))
  }
)

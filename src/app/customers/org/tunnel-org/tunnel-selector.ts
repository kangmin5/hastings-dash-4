import { createSelector } from '@reduxjs/toolkit'

export const selectAllTunnels = (state: any) => state.tunnels.items
export const selectTunnelFilter = (state: any) => state.tunnel
export const selectError = (state: any) => state.tunnels.error
export const selectIsLoading = (state: any) => state.tunnels.isLoading
export const selectHasItem = (state: any) => state.tunnels.hasItem
export const selectItemCount = (state: any) => state.tunnels.len
export const selectMessage = (state: any) =>
  state.tunnels.hasMessage === ''
    ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.tunnels.hasMessage

export const TunnelByIdSelector = createSelector(
  [selectAllTunnels, selectTunnelFilter],

  (tunnels, filter) => {
    return tunnels.get(({ tunnelId }) => tunnelId.includes(filter))
  }
)

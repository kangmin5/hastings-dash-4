import { createSelector } from '@reduxjs/toolkit'

export const selectAllSubscribes = (state: any) => state.subscribes.items
export const selectSubscribeFilter = (state: any) => state.subscribe
export const selectError = (state: any) => state.subscribes.error
export const selectIsLoading = (state: any) => state.subscribes.isLoading
export const selectHasItem = (state: any) => state.subscribes.hasItem
export const selectItemCount = (state: any) => state.subscribes.len
export const selectMessage = (state: any) =>
  state.subscribes.hasMessage === ''
    ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.subscribes.hasMessage

export const SubscribeByIdSelector = createSelector(
  [selectAllSubscribes, selectSubscribeFilter],

  (subscribes, filter) => {
    return subscribes.get(({ subscribeId }) => subscribeId.includes(filter))
  }
)

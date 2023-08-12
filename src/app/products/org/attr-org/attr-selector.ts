import { createSelector } from '@reduxjs/toolkit'

export const selectAllAttrs = (state: any) => state.attrs.items
export const selectAttrFilter = (state: any) => state.attr
export const selectError = (state: any) => state.attrs.error
export const selectIsLoading = (state: any) => state.attrs.isLoading
export const selectHasItem = (state: any) => state.attrs.hasItem
export const selectItemCount = (state: any) => state.attrs.len
export const selectMessage = (state: any) =>
  state.attrs.hasMessage === ''
    ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.attrs.hasMessage

export const AttrByIdSelector = createSelector(
  [selectAllAttrs, selectAttrFilter],

  (attrs, filter) => {
    return attrs.get(({ attrId }) => attrId.includes(filter))
  }
)

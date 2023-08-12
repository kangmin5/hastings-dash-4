import { createSelector } from '@reduxjs/toolkit'

export const selectAllMembers = (state: any) => state.members.items
export const selectMemberFilter = (state: any) => state.member
export const selectError = (state: any) => state.members.error
export const selectIsLoading = (state: any) => state.members.isLoading
export const selectHasItem = (state: any) => state.members.hasItem
export const selectItemCount = (state: any) => state.members.len
export const selectMessage = (state: any) =>
  state.members.hasMessage === ''
    ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.members.hasMessage

export const MemberByIdSelector = createSelector(
  [selectAllMembers, selectMemberFilter],

  (members, filter) => {
    return members.get(({ memberId }) => memberId.includes(filter))
  }
)

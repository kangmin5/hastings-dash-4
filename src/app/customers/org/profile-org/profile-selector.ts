import { createSelector } from '@reduxjs/toolkit'

export const selectAllProfiles = (state: any) => state.profiles.items
export const selectProfileFilter = (state: any) => state.profile
export const selectError = (state: any) => state.profiles.error
export const selectIsLoading = (state: any) => state.profiles.isLoading
export const selectHasItem = (state: any) => state.profiles.hasItem
export const selectItemCount = (state: any) => state.profiles.len
export const selectMessage = (state: any) =>
  state.profiles.hasMessage === ''
    ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.profiles.hasMessage

export const ProfileByIdSelector = createSelector(
  [selectAllProfiles, selectProfileFilter],

  (profiles, filter) => {
    return profiles.get(({ profileId }) => profileId.includes(filter))
  }
)

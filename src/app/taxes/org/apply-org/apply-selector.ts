import { createSelector } from '@reduxjs/toolkit'
import { ApplyVo } from 'app/taxes/mo/apply-mo/apply-vo'

export const selectAllApplies = (state: any) => state.applies.items
export const selectApplyById = (state: any) => state.Apply
export const selectError = (state: any) => state.Applies.error
export const selectIsLoading = (state: any) => state.Applies.isLoading
export const selectHasItem = (state: any) => state.Applies.hasItem
export const selectMessage = (state: any) =>
  state.applies.hasMessage === ''
    ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.applies.hasMessage

export const ApplyByIdSelector = createSelector(
  [selectAllApplies, selectApplyById],

  (applies, filter) => {
    return applies.get(({ applyId }: { applyId: string }) => applyId.includes(filter))
  }
)

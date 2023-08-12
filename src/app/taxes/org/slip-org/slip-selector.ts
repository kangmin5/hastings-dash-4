import { createSelector } from '@reduxjs/toolkit'
import { SlipVo } from 'app/taxes/mo/slip-mo/slip-vo'

export const selectAllSlips = (state: any) => state.slips.items
export const selectSlipById = (state: any) => state.slip
export const selectError = (state: any) => state.slips.error
export const selectIsLoading = (state: any) => state.slips.isLoading
export const selectHasItem = (state: any) => state.slips.hasItem
export const selectItemCount = (state: any) => state.slips.len
export const selectMessage = (state: any) =>
  state.slips.hasMessage === ''
    ? '[간이영수증] 서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.slips.hasMessage

export const SlipByIdSelector = createSelector(
  [selectAllSlips, selectSlipById],

  (slips, filter) => {
    return slips.get(({ slipId }: { slipId: string }) => slipId.includes(filter))
  }
)

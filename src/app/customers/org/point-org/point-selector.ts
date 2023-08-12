import { createSelector } from '@reduxjs/toolkit'

export const selectAllPoints = (state: any) => state.points.items
export const selectPointFilter = (state: any) => state.point
export const selectError = (state: any) => state.points.error
export const selectIsLoading = (state: any) => state.points.isLoading
export const selectHasItem = (state: any) => state.points.hasItem
export const selectItemCount = (state: any) => state.points.len
export const selectMessage = (state: any) =>
  state.points.hasMessage === ''
    ? '서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다.'
    : state.points.hasMessage

export const PointByIdSelector = createSelector(
  [selectAllPoints, selectPointFilter],

  (points, filter) => {
    return points.get(({ pointId }) => pointId.includes(filter))
  }
)

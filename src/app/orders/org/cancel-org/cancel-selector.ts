

import { createSelector } from '@reduxjs/toolkit';

export const selectAllCancels = (state: any) => state.cancels.items;
export const selectCancelById = (state: any) => state.cancel;
export const selectError = (state: any) => state.cancels.error;
export const selectIsLoading = (state: any) => state.cancels.isLoading;
export const selectHasItem = (state: any) => state.cancels.hasItem;
export const selectMessage = (state: any) => state.cancels.hasMessage === "" ? 
"서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다." : 
state.cancels.hasMessage;

export const CancelSelector = createSelector(
  [selectAllCancels, selectCancelById],
  (Cancels, item) => {
    return Cancels.get(({ CancelId }) =>
    CancelId.includes(item)
    );
  }
);
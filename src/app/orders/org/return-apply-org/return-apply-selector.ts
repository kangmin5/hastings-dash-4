

import { createSelector } from '@reduxjs/toolkit';

export const selectAllReturnApplies = (state: any) => state.returnApplies.items;
export const selectReturnApplyById = (state: any) => state.returnApply;
export const selectError = (state: any) => state.returnApplies.error;
export const selectIsLoading = (state: any) => state.returnApplies.isLoading;
export const selectHasItem = (state: any) => state.returnApplies.hasItem;
export const selectMessage = (state: any) => state.returnApplies.hasMessage === "" ? 
"서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다." : 
state.returnApplies.hasMessage;

export const ReturnApplySelector = createSelector(
  [selectAllReturnApplies, selectReturnApplyById],
  (ReturnApplies, item) => {
    return ReturnApplies.get(({ ReturnApplyId }) =>
    ReturnApplyId.includes(item)
    );
  }
);
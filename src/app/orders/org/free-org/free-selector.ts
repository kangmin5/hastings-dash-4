

import { createSelector } from '@reduxjs/toolkit';

export const selectAllFrees = (state: any) => state.freeOrders.items;
export const selectFreeById = (state: any) => state.freeOrder;
export const selectError = (state: any) => state.freeOrders.error;
export const selectHasFreeNo = (state: any) => state.freeOrder.hasFreeNo;
export const selectIsLoading = (state: any) => state.freeOrders.isLoading;
export const selectHasItem = (state: any) => state.freeOrder.hasItem;
export const selectMessage = (state: any) => state.freeOrder.hasMessage === "" ? 
"서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다." : 
state.freeOrder.hasMessage;

export const FreeSelector = createSelector(
  [selectAllFrees, selectFreeById],
  (Frees, item) => {
    return Frees.get(({ FreeId }) =>
    FreeId.includes(item)
    );
  }
);
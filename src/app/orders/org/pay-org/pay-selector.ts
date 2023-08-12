

import { createSelector } from '@reduxjs/toolkit';

export const selectAllPays = (state: any) => state.pays.items;
export const selectPayById = (state: any) => state.pay;
export const selectError = (state: any) => state.pays.error;
export const selectIsLoading = (state: any) => state.pays.isLoading;
export const selectHasItem = (state: any) => state.pays.hasItem;
export const selectMessage = (state: any) => state.pays.hasMessage === "" ? 
"서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다." : 
state.pays.hasMessage;

export const PaySelector = createSelector(
  [selectAllPays, selectPayById],
  (Pays, item) => {
    return Pays.get(({ PayId }) =>
    PayId.includes(item)
    );
  }
);


import { createSelector } from '@reduxjs/toolkit';

export const selectAllBuys = (state: any) => state.Buys.items;
export const selectBuyById = (state: any) => state.Buy;
export const selectError = (state: any) => state.Buy.error;
export const selectIsLoading = (state: any) => state.Buy.isLoading;
export const selectHasItem = (state: any) => state.buys.hasItem;
export const selectMessage = (state: any) => state.buys.hasMessage === "" ? 
"서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다." : 
state.buys.hasMessage;

export const BuySelector = createSelector(
  [selectAllBuys, selectBuyById],
  (Buys, item) => {
    return Buys.get(({ BuyId }) =>
    BuyId.includes(item)
    );
  }
);
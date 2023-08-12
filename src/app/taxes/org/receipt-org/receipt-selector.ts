

import { createSelector } from '@reduxjs/toolkit';

export const selectAllReceiptApplies = (state: any) => state.receiptApplies.items;
export const selectReceiptFilter = (state: any) => state.receipt;
export const selectError = (state: any) => state.receipt.error;
export const selectIsLoading = (state: any) => state.receiptApplies.isLoading;
export const selectHasItem = (state: any) => state.receiptApplies.hasItem;
export const selectMessage = (state: any) => state.receiptApplies.hasMessage === "" ?
"서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다." :
state.receiptApplies.hasMessage;

export const ReceiptByIdSelector = createSelector(
  [selectAllReceiptApplies, selectReceiptFilter],
  (receiptApplies, item) => {
    return receiptApplies.get(({ receiptId }) =>
    receiptId.includes(item)
    );
  }
);

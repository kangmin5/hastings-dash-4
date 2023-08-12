

import { createSelector } from '@reduxjs/toolkit';

export const selectAllAgrees = (state: any) => state.faqs.items;
export const selectAgreeFilter = (state: any) => state.faq;
export const selectError = (state: any) => state.faqs.error;
export const selectIsLoading = (state: any) => state.faqs.isLoading;
export const selectHasItem = (state: any) => state.faqs.hasItem;
export const selectMessage = (state: any) => state.faqs.hasMessage === "" ?
"서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다." :
state.faqs.hasMessage;

export const selectAgreeById = createSelector(
  [selectAllAgrees, selectAgreeFilter],

  (faqs, filter) => {
    return faqs.get(({ faqId }) => faqId.includes(filter)
    );
  }
);

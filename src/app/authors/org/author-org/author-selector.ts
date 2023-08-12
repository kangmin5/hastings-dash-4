

import { createSelector } from '@reduxjs/toolkit';

export const selectAllAuthors = (state: any) => state.faqs.items;
export const selectAuthorFilter = (state: any) => state.faq;
export const selectError = (state: any) => state.faqs.error;
export const selectIsLoading = (state: any) => state.faqs.isLoading;
export const selectHasItem = (state: any) => state.faqs.hasItem;
export const selectHasToken = (state: any) => state.authors.hasToken;
export const selectToken = (state: any) => state.authors.token;
export const selectHasAccount = (state: any) => state.authors.hasAccount;
export const selectMessage = (state: any) => state.faqs.hasMessage === "" ?
"서버와의 연결이 중단되었습니다. 관리자에게 문의 바랍니다." :
state.faqs.hasMessage;

export const selectAuthorById = createSelector(
  [selectAllAuthors, selectAuthorFilter],

  (faqs, filter) => {
    return faqs.get(({ faqId }) => faqId.includes(filter)
    );
  }
);

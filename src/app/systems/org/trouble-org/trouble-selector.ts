

import { createSelector } from '@reduxjs/toolkit';

export const selectAllTroubles = (state: any) => state.troubles.items;
export const selectTroubleById = (state: any) => state.trouble;
export const selectError = (state: any) => state.troubles.error;
export const selectIsLoading = (state: any) => state.troubles.isLoading;

export const TroubleSelector = createSelector(
  [selectAllTroubles, selectTroubleById],
  (Troubles, item) => {
    return Troubles.get(({ TroubleId }) =>
    TroubleId.includes(item)
    );
  }
);
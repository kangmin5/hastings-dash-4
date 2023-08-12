import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DealAtom } from "../../atom/deal-atom";

const BuyReducer = createSlice({
  name: `buy`,
  initialState : new DealAtom(),
  reducers: {
    setBuy(state, action: PayloadAction<DealAtom>) {
        
      },
      
  },
  
});

export const {} = BuyReducer.actions;

export const buyReducer = BuyReducer.reducer;
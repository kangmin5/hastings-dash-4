import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CutAtom } from "../../atom/cut-atom";

const CancelReducer = createSlice({
  name: `cancel`,
  initialState : new CutAtom(),
  reducers: {
    setCancel(state, action: PayloadAction<CutAtom>) {
        
      },
      
  },
  
});

export const {} = CancelReducer.actions;

export const cancelReducer = CancelReducer.reducer;
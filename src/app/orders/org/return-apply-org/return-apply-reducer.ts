import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReturnApplyVo } from "./return-apply-vo";

const ReturnApplyReducer = createSlice({
  name: `returnApply`,
  initialState : new ReturnApplyVo(),
  reducers: {
    setReturnApply(state, action: PayloadAction<ReturnApplyVo>) {
        
      },
      
  },
  
});

export const {} = ReturnApplyReducer.actions;

export const returnApplyReducer = ReturnApplyReducer.reducer;
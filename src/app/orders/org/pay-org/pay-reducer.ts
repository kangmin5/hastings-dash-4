import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PayVo } from "../../mo/pay-mo/pay-vo";

const OrderReducer = createSlice({
  name: `pay`,
  initialState : new PayVo(),
  reducers: {
    setOrder(state, action: PayloadAction<PayVo>) {
        
      },
      
  },
  
});

export const {} = OrderReducer.actions;

export const payReducer = OrderReducer.reducer;
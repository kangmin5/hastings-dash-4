import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RefundVo } from 'app/taxes/mo/refund-mo/refund-vo'
interface RefundState {
  item: RefundVo
}
const initialState: RefundState = {
  item: new RefundVo()
}
const RefundReducer = createSlice({
  name: `refund`,
  initialState,
  reducers: {
    saveRefund(state, action: PayloadAction<RefundVo>) {
      state.item = action.payload
    }
  }
})

export const { saveRefund } = RefundReducer.actions
export const refundReducer = RefundReducer.reducer

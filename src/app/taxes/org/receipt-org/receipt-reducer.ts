import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ReceiptVo } from 'app/taxes/mo/receipt-mo/receipt-vo'
interface ReceiptState {
  item: ReceiptVo
}
const initialState: ReceiptState = {
  item: new ReceiptVo()
}
const ReceiptReducer = createSlice({
  name: `receipt`,
  initialState,
  reducers: {
    saveReceipt(state, action: PayloadAction<ReceiptVo>) {
      state.item = action.payload
    }
  }
})

export const { saveReceipt } = ReceiptReducer.actions
export const receiptReducer = ReceiptReducer.reducer

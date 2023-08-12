import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BankVo } from 'app/taxes/mo/bank-mo/bank-vo'
interface BankState {
  item: BankVo
}
const initialState: BankState = {
  item: new BankVo()
}
const BankReducer = createSlice({
  name: `bank`,
  initialState,
  reducers: {
    saveBank(state, action: PayloadAction<BankVo>) {
      state.item = action.payload
    }
  }
})

export const { saveBank } = BankReducer.actions
export const bankReducer = BankReducer.reducer

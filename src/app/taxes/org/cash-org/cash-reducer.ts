import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CashVo } from 'app/taxes/mo/cash-mo/cash-vo'
interface CashState {
  item: CashVo
}
const initialState: CashState = {
  item: new CashVo()
}
const CashReducer = createSlice({
  name: `cash`,
  initialState,
  reducers: {
    saveCash(state, action: PayloadAction<CashVo>) {
      state.item = action.payload
    }
  }
})

export const { saveCash } = CashReducer.actions
export const cashReducer = CashReducer.reducer

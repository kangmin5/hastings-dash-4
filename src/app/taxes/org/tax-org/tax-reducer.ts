import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TaxVo } from 'app/taxes/mo/tax-bill-mo/tax-bill-vo'
interface TaxState {
  item: TaxVo
}
const initialState: TaxState = {
  item: new TaxVo()
}
const TaxReducer = createSlice({
  name: `tax`,
  initialState,
  reducers: {
    saveTax(state, action: PayloadAction<TaxVo>) {
      state.item = action.payload
    }
  }
})

export const { saveTax } = TaxReducer.actions
export const taxReducer = TaxReducer.reducer

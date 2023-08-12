import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FaqVo } from 'app/boards/mo/faq-mo/faq-vo'
interface FaqState {
  item: FaqVo
}
const initialState: FaqState = {
  item: new FaqVo()
}
const FaqReducer = createSlice({
  name: `faq`,
  initialState,
  reducers: {
    saveFaq(state, action: PayloadAction<FaqVo>) {
      state.item = action.payload
    }
  }
})

export const { saveFaq } = FaqReducer.actions
export const faqReducer = FaqReducer.reducer

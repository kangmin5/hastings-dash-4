import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { QuoteVo } from 'app/quotes/mo/quote-mo/quote-vo'
interface QuoteState {
  item: QuoteVo
}
const initialState: QuoteState = {
  item: new QuoteVo()
}
const QuoteReducer = createSlice({
  name: `quote`,
  initialState,
  reducers: {
    saveQuote(state, action: PayloadAction<QuoteVo>) {
      state.item = action.payload
    }
  }
})

export const { saveQuote } = QuoteReducer.actions
export const quoteReducer = QuoteReducer.reducer

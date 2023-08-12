import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AskVo } from 'app/products/mo/ask-mo/ask-vo'
interface AskState {
  item: AskVo
}
const initialState: AskState = {
  item: new AskVo()
}
const AskReducer = createSlice({
  name: `ask`,
  initialState,
  reducers: {
    saveAsk(state, action: PayloadAction<AskVo>) {
      state.item = action.payload
    }
  }
})

export const { saveAsk } = AskReducer.actions
export const askReducer = AskReducer.reducer

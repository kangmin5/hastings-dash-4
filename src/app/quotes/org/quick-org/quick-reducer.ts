import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { QuickVo } from 'app/quotes/mo/quick-mo/quick-vo'
interface QuickState {
  item: QuickVo
}
const initialState: QuickState = {
  item: new QuickVo()
}
const QuickReducer = createSlice({
  name: `quick`,
  initialState,
  reducers: {
    saveQuick(state, action: PayloadAction<QuickVo>) {
      state.item = action.payload
    }
  }
})

export const { saveQuick } = QuickReducer.actions
export const quickReducer = QuickReducer.reducer

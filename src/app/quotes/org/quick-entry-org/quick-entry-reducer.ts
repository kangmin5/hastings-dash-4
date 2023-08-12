import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { QuickEntryVo } from 'app/quotes/mo/quick-entry-mo/quick-entry-vo'
interface QuickEntryState {
  item: QuickEntryVo
}
const initialState: QuickEntryState = {
  item: new QuickEntryVo()
}
const QuickEntryReducer = createSlice({
  name: `quickEntry`,
  initialState,
  reducers: {
    saveQuickEntry(state, action: PayloadAction<QuickEntryVo>) {
      state.item = action.payload
    }
  }
})

export const { saveQuickEntry } = QuickEntryReducer.actions
export const quickEntryReducer = QuickEntryReducer.reducer

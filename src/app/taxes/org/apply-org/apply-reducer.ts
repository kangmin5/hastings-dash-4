import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ApplyVo } from 'app/taxes/mo/apply-mo/apply-vo'
interface ApplyState {
  item: ApplyVo
}
const initialState: ApplyState = {
  item: new ApplyVo()
}
const ApplyReducer = createSlice({
  name: `apply`,
  initialState,
  reducers: {
    saveApply(state, action: PayloadAction<ApplyVo>) {
      state.item = action.payload
    }
  }
})

export const { saveApply } = ApplyReducer.actions
export const applyReducer = ApplyReducer.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DormantVo } from 'app/customers/mo/dormant-mo/dormant-vo'
interface DormantState {
  item: DormantVo
}
const initialState: DormantState = {
  item: new DormantVo()
}
const DormantReducer = createSlice({
  name: `dormant`,
  initialState,
  reducers: {
    saveDormant(state, action: PayloadAction<DormantVo>) {
      state.item = action.payload
    }
  }
})

export const { saveDormant } = DormantReducer.actions
export const dormantReducer = DormantReducer.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AgreeVo } from 'app/customers/mo/agree-mo/agree-vo'
interface AgreeState {
  item: AgreeVo
}
const initialState: AgreeState = {
  item: new AgreeVo()
}
const AgreeReducer = createSlice({
  name: `agree`,
  initialState,
  reducers: {
    saveAgree(state, action: PayloadAction<AgreeVo>) {
      state.item = action.payload
    }
  }
})

export const { saveAgree } = AgreeReducer.actions
export const agreeReducer = AgreeReducer.reducer

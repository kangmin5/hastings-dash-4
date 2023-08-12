import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AgreeVo } from 'app/authors/mo/agree-mo/agree-vo'
interface AgreeState {
  item: AgreeVo
}
const initialState: AgreeState = {
  item: new AgreeVo()
}
const AgreeReducer = createSlice({
  name: `agree`,
  initialState,
  reducers: {}
})

export const {} = AgreeReducer.actions
export const agreeReducer = AgreeReducer.reducer

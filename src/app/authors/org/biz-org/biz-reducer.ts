import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BizVo } from 'app/authors/mo/biz-mo/biz-vo'
interface BizState {
  item: BizVo
}
const initialState: BizState = {
  item: new BizVo()
}
const BizReducer = createSlice({
  name: `biz`,
  initialState,
  reducers: {}
})

export const {} = BizReducer.actions
export const bizReducer = BizReducer.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SlipVo } from 'app/taxes/mo/slip-mo/slip-vo'
interface SlipState {
  item: SlipVo
}
const initialState: SlipState = {
  item: new SlipVo()
}
const SlipReducer = createSlice({
  name: `slip`,
  initialState,
  reducers: {
    saveSlip(state, action: PayloadAction<SlipVo>) {
      state.item = action.payload
    }
  }
})

export const { saveSlip } = SlipReducer.actions
export const slipReducer = SlipReducer.reducer

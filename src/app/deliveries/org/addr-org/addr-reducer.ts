import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddrVo } from 'app/deliveries/mo/addr-mo/addr-vo'
interface AddrState {
  item: AddrVo
}
const initialState: AddrState = {
  item: new AddrVo()
}
const AddrReducer = createSlice({
  name: `addr`,
  initialState,
  reducers: {
    saveAddr(state, action: PayloadAction<AddrVo>) {
      state.item = action.payload
    }
  }
})

export const { saveAddr } = AddrReducer.actions
export const addrReducer = AddrReducer.reducer

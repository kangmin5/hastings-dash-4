import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TunnelVo } from 'app/customers/mo/tunnel-mo/tunnel-vo'
interface TunnelState {
  item: TunnelVo
}
const initialState: TunnelState = {
  item: new TunnelVo()
}
const TunnelReducer = createSlice({
  name: `tunnel`,
  initialState,
  reducers: {
    saveTunnel(state, action: PayloadAction<TunnelVo>) {
      state.item = action.payload
    }
  }
})

export const { saveTunnel } = TunnelReducer.actions
export const tunnelReducer = TunnelReducer.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SubscribeVo } from 'app/customers/mo/subscribe-mo/subscribe-vo'
interface SubscribeState {
  item: SubscribeVo
}
const initialState: SubscribeState = {
  item: new SubscribeVo()
}
const SubscribeReducer = createSlice({
  name: `subscribe`,
  initialState,
  reducers: {
    saveSubscribe(state, action: PayloadAction<SubscribeVo>) {
      state.item = action.payload
    }
  }
})

export const { saveSubscribe } = SubscribeReducer.actions
export const subscribeReducer = SubscribeReducer.reducer

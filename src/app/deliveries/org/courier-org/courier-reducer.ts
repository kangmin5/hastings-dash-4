import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CourierVo } from 'app/deliveries/mo/courier-mo/courier-vo'
interface CourierState {
  item: CourierVo
}
const initialState: CourierState = {
  item: new CourierVo()
}
const CourierReducer = createSlice({
  name: `courier`,
  initialState,
  reducers: {
    saveCourier(state, action: PayloadAction<CourierVo>) {
      state.item = action.payload
    }
  }
})

export const { saveCourier } = CourierReducer.actions
export const courierReducer = CourierReducer.reducer

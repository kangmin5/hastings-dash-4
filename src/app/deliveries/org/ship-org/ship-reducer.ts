import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ShipVo } from 'app/deliveries/mo/ship-mo/ship-vo'
interface ShipState {
  item: ShipVo
}
const initialState: ShipState = {
  item: new ShipVo()
}
const ShipReducer = createSlice({
  name: `ship`,
  initialState,
  reducers: {
    saveShip(state, action: PayloadAction<ShipVo>) {
      state.item = action.payload
    }
  }
})

export const { saveShip } = ShipReducer.actions
export const shipReducer = ShipReducer.reducer

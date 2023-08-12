import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PointVo } from 'app/customers/mo/point-mo/point-vo'
interface PointState {
  item: PointVo
}
const initialState: PointState = {
  item: new PointVo()
}
const PointReducer = createSlice({
  name: `point`,
  initialState,
  reducers: {
    savePoint(state, action: PayloadAction<PointVo>) {
      state.item = action.payload
    }
  }
})

export const { savePoint } = PointReducer.actions
export const pointReducer = PointReducer.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UnshipVo } from 'app/deliveries/mo/unship-mo/unship-vo'
interface UnshipState {
  item: UnshipVo
}
const initialState: UnshipState = {
  item: new UnshipVo()
}
const UnshipReducer = createSlice({
  name: `unship`,
  initialState,
  reducers: {
    saveUnship(state, action: PayloadAction<UnshipVo>) {
      state.item = action.payload
    }
  }
})

export const { saveUnship } = UnshipReducer.actions
export const unshipReducer = UnshipReducer.reducer

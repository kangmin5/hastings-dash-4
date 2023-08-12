import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimpleVo } from 'app/quotes/mo/simple-mo/simple-vo'
interface SimpleState {
  item: SimpleVo
}
const initialState: SimpleState = {
  item: new SimpleVo()
}
const SimpleReducer = createSlice({
  name: `simple`,
  initialState,
  reducers: {
    saveSimple(state, action: PayloadAction<SimpleVo>) {
      state.item = action.payload
    }
  }
})

export const { saveSimple } = SimpleReducer.actions
export const simpleReducer = SimpleReducer.reducer

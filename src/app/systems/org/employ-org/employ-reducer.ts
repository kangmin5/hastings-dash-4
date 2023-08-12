import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EmployAtom } from './employ-vo'
interface EmployState {
  item: EmployAtom
}
const initialState: EmployState = {
  item: new EmployAtom()
}
const EmployReducer = createSlice({
  name: `employ`,
  initialState,
  reducers: {
    saveEmploy(state, action: PayloadAction<EmployAtom>) {
      state.item = action.payload
    }
  }
})

export const { saveEmploy } = EmployReducer.actions
export const employReducer = EmployReducer.reducer

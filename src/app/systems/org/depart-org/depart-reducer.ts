import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DepartAtom } from './depart-vo'
interface DepartState {
  item: DepartAtom
}
const initialState: DepartState = {
  item: new DepartAtom()
}
const DepartReducer = createSlice({
  name: `depart`,
  initialState,
  reducers: {
    saveDepart(state, action: PayloadAction<DepartAtom>) {
      state.item = action.payload
    }
  }
})

export const { saveDepart } = DepartReducer.actions
export const departReducer = DepartReducer.reducer

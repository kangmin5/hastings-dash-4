import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CatVo } from 'app/products/mo/cat-mo/cat-vo'
interface CatState {
  item: CatVo
}
const initialState: CatState = {
  item: new CatVo()
}
const CatReducer = createSlice({
  name: `cat`,
  initialState,
  reducers: {
    saveCat(state, action: PayloadAction<CatVo>) {
      state.item = action.payload
    }
  }
})

export const { saveCat } = CatReducer.actions
export const catReducer = CatReducer.reducer

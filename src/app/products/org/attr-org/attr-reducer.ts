import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AttrVo } from 'app/products/mo/attr-mo/attr-vo'
interface AttrState {
  item: AttrVo
}
const initialState: AttrState = {
  item: new AttrVo()
}
const AttrReducer = createSlice({
  name: `attr`,
  initialState,
  reducers: {
    saveAttr(state, action: PayloadAction<AttrVo>) {
      state.item = action.payload
    }
  }
})

export const { saveAttr } = AttrReducer.actions
export const attrReducer = AttrReducer.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CatVo } from 'app/products/mo/cat-mo/cat-vo'
interface CatState {
  item: CatVo
  mainCategory: string
  subCategory: string
  hasMainCategory: boolean
  hasSubCategory: boolean
}
const initialState: CatState = {
  item: new CatVo(),
  mainCategory: '',
  subCategory: '',
  hasMainCategory: false,
  hasSubCategory: false
}
const CatReducer = createSlice({
  name: `cat`,
  initialState,
  reducers: {
    saveCat(state, action: PayloadAction<CatVo>) {
      state.item = action.payload
    },
    saveMainCategory(state, action: PayloadAction<string>) {
      state.mainCategory = action.payload
      state.hasMainCategory = true
    },
    saveSubCategory(state, action: PayloadAction<string>) {
      state.subCategory = action.payload
      state.hasSubCategory = true
    }


  }
})

export const { saveCat, saveMainCategory, saveSubCategory } = CatReducer.actions
export const catReducer = CatReducer.reducer

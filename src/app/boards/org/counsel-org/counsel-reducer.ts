import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CounselVo } from 'app/boards/mo/counsel-mo/counsel-vo'
interface CounselState {
  item: CounselVo
}
const initialState: CounselState = {
  item: new CounselVo()
}
const CounselReducer = createSlice({
  name: `counsel`,
  initialState,
  reducers: {
    saveCounsel(state, action: PayloadAction<CounselVo>) {
      state.item = action.payload
    }
  }
})

export const { saveCounsel } = CounselReducer.actions
export const counselReducer = CounselReducer.reducer

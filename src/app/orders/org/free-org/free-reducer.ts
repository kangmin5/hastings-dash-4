import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FreeVo } from '../../mo/free-mo/free-vo'

interface FreeState {
  item: FreeVo
  hasFreeNo: boolean
}

const initialState: FreeState = {
  item: new FreeVo(),
  hasFreeNo: false
}

const FreeReducer = createSlice({
  name: `freeOrder`,
  initialState,
  reducers: {
    saveHasFreeNo(state, action: PayloadAction<FreeVo>) {
     // const { hasFreeNo } = action.payload.data
     // state.hasFreeNo = hasFreeNo
    }
  }
})

export const { saveHasFreeNo } = FreeReducer.actions

export const freeOrderReducer = FreeReducer.reducer

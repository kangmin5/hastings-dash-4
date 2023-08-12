import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BatchVo } from 'app/deliveries/mo/batch-mo/batch-vo'
interface BatchState {
  item: BatchVo
}
const initialState: BatchState = {
  item: new BatchVo()
}
const BatchReducer = createSlice({
  name: `batch`,
  initialState,
  reducers: {
    saveBatch(state, action: PayloadAction<BatchVo>) {
      state.item = action.payload
    }
  }
})

export const { saveBatch } = BatchReducer.actions
export const batchReducer = BatchReducer.reducer

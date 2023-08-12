import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InquiryVo } from 'app/boards/mo/inquiry-mo/inquiry-vo'
interface InquiryState {
  item: InquiryVo
}
const initialState: InquiryState = {
  item: new InquiryVo()
}
const InquiryReducer = createSlice({
  name: `inquiry`,
  initialState,
  reducers: {
    saveInquiry(state, action: PayloadAction<InquiryVo>) {
      state.item = action.payload
    }
  }
})

export const { saveInquiry } = InquiryReducer.actions
export const inquiryReducer = InquiryReducer.reducer

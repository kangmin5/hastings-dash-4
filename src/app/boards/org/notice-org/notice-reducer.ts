import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NoticeVo } from 'app/boards/mo/notice-mo/notice-vo'
interface NoticeState {
  item: NoticeVo
}
const initialState: NoticeState = {
  item: new NoticeVo()
}
const NoticeReducer = createSlice({
  name: `notice`,
  initialState,
  reducers: {
    saveNotice(state, action: PayloadAction<NoticeVo>) {
      state.item = action.payload
    }
  }
})

export const { saveNotice } = NoticeReducer.actions
export const noticeReducer = NoticeReducer.reducer

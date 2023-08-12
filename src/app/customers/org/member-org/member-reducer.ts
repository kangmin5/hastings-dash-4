import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MemberVo } from 'app/customers/mo/member-mo/member-vo'
interface MemberState {
  item: MemberVo
}
const initialState: MemberState = {
  item: new MemberVo()
}
const MemberReducer = createSlice({
  name: `member`,
  initialState,
  reducers: {
    saveMember(state, action: PayloadAction<MemberVo>) {
      state.item = action.payload
    }
  }
})

export const { saveMember } = MemberReducer.actions
export const memberReducer = MemberReducer.reducer

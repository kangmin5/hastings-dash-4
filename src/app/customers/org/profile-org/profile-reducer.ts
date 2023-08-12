import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProfileVo } from 'app/customers/mo/profile-mo/profile-vo'
interface ProfileState {
  item: ProfileVo
}
const initialState: ProfileState = {
  item: new ProfileVo()
}
const ProfileReducer = createSlice({
  name: `profile`,
  initialState,
  reducers: {
    saveProfile(state, action: PayloadAction<ProfileVo>) {
      state.item = action.payload
    }
  }
})

export const { saveProfile } = ProfileReducer.actions
export const profileReducer = ProfileReducer.reducer

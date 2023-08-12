import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NoteVo } from 'app/customers/mo/note-mo/note-vo'
interface NoteState {
  item: NoteVo
}
const initialState: NoteState = {
  item: new NoteVo()
}
const NoteReducer = createSlice({
  name: `note`,
  initialState,
  reducers: {
    saveNote(state, action: PayloadAction<NoteVo>) {
      state.item = action.payload
    }
  }
})

export const { saveNote } = NoteReducer.actions
export const noteReducer = NoteReducer.reducer

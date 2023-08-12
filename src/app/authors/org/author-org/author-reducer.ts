import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthorVo } from 'app/authors/mo/author-mo/author-vo'
interface AuthorState {
  item: AuthorVo
}
const initialState: AuthorState = {
  item: new AuthorVo()
}
const AuthorReducer = createSlice({
  name: `author`,
  initialState,
  reducers: {}
})

export const {} = AuthorReducer.actions
export const authorReducer = AuthorReducer.reducer

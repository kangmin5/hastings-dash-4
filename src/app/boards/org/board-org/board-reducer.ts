import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BoardVo } from 'app/boards/mo/board-mo/board-vo'
interface BoardState {
  item: BoardVo
}
const initialState: BoardState = {
  item: new BoardVo()
}
const BoardReducer = createSlice({
  name: `board`,
  initialState,
  reducers: {
    saveBoard(state, action: PayloadAction<BoardVo>) {
      state.item = action.payload
    }
  }
})

export const { saveBoard } = BoardReducer.actions
export const boardReducer = BoardReducer.reducer

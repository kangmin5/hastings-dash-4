import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { BoardAxios as axios } from './board-axios'
import { BoardVo } from 'app/boards/mo/board-mo/board-vo'
import { BoardFactory as factory } from './board-factory'
import { BoardAction as action, BoardStrategy as strategy } from './board-union'
import { BoardDao as dao } from './board-dao'
import { addBoard, getAllBoards, getBoardsBy, getBoardById, alterBoardById, delBoardById } from './board-thunk'

import { TroubleDao as TD } from 'app/systems/org/trouble-org/trouble-dao'
import { TroubleAspect as TA } from 'app/systems/org/trouble-org/trouble-aspect'
import { DateMap } from 'app/utils/atom/date-atom'

interface BoardState {
  items: BoardVo[]
  len: number
  isLoading: boolean
  hasItem: boolean
  hasMessage: string
}

const initialState: BoardState = {
  items: [],
  len: 0,
  isLoading: false,
  hasItem: false,
  hasMessage: ''
}

const BoardSlice = createSlice({
  name: `boards`,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addBoard.fulfilled, (state, { payload }) => {
        console.log('[게시판관리] 게시판 프론트에서는 추가하기 기능이 없습니다. ')
      })
      .addCase(getAllBoards.fulfilled, (state, { payload }) => {
        const queryIsGood = TA.check().isGoodQuery(payload)
        const authorHasToken = TA.check().hasToken(payload)
        if (queryIsGood && authorHasToken) {
          state.items = dao.getAllSuccess(payload)
          state.isLoading = true
          if (state.items.length > 0) {
            state.hasItem = true
            state.len = state.items.length
          } else {
            state.hasMessage = '등록된 [게시판관리]이 없습니다.'
          }
        } else {
          console.log('[게시판관리] 게시판에 도달할 수 없는 에러발생')
        }
      })

      .addCase(getBoardsBy.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
          state.items = dao.addOneSuccess(payload)
        } else {
          console.log(`[Error Issue] ${DateMap().get()} [게시판관리] 수정작업 : 쿼리 체크 Error `)
        }
        // state.itemsToAdd =
        //   payload.data.code === "200" ? dao.addOneSuccess(payload) : undefined; //**TODO
      })

      .addCase(getBoardById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} [게시판관리] 상세보기 : 쿼리 체크 Error `)
        }
      })
      .addCase(alterBoardById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} [게시판관리] 수정작업 : 쿼리 체크 Error `)
        }
      })

      .addCase(delBoardById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} [게시판관리] 삭제작업 : 쿼리 체크 Error `)
        }
      })
      .addCase(getAllBoards.rejected, (state, { payload }) => {
        TD.rejectedTrouble(`[Reject Issue] ${DateMap().get()} [게시판관리] 전체목록 : 서버연결 실패 `)
      })
  }
})

export const {} = BoardSlice.actions
export default BoardSlice.reducer

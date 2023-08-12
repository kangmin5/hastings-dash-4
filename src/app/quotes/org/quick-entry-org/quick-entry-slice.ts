import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { QuickEntryAxios as axios } from './quick-entry-axios'
import { QuickEntryVo } from 'app/quotes/mo/quick-entry-mo/quick-entry-vo'
import { QuickEntryFactory as factory } from './quick-entry-factory'
import { QuickEntryAction as action, QuickEntryStrategy as strategy } from './quick-entry-union'
import { QuickEntryDao as dao } from './quick-entry-dao'
import { addQuickEntry, getQuickEntryById, alterQuickEntryById, delQuickEntryById, getQuickEntriesBy, getAllQuickEntries } from './quick-entry-thunk'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleDao as TD } from 'app/systems/org/trouble-org/trouble-dao'
import { TroubleAspect as TA } from 'app/systems/org/trouble-org/trouble-aspect'
import { DateMap } from 'app/utils/atom/date-atom'

interface QuickEntryState {
  items: QuickEntryVo[]
  len: number
  itemsBy: QuickEntryVo[]
  isLoading: boolean
  hasItem: boolean
  hasMessage: string
}

const initialState: QuickEntryState = {
  items: [],
  len: 0,
  itemsBy: [],
  isLoading: false,
  hasItem: false,
  hasMessage: ''
}

const QuickEntrySlice = createSlice({
  name: `quickEntries`,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addQuickEntry.fulfilled, (state, { payload }) => {
        console.log('자주묻는 질문 게시판 프론트에서는 추가하기 기능이 없습니다. ')
      })
      .addCase(getAllQuickEntries.fulfilled, (state, { payload }) => {
        const queryIsGood = TA.check().isGoodQuery(payload)
        const authorHasToken = TA.check().hasToken(payload)
        if (queryIsGood && authorHasToken) {
          state.items = dao.getAllSuccess(payload)
          state.isLoading = true
          if (state.items.length > 0) {
            state.hasItem = true
            state.len = state.items.length
          } else {
            state.hasMessage = '등록된 자주 묻는 질문이 없습니다.'
          }
        } else {
          console.log('자주묻는 질문 게시판에 도달할 수 없는 에러발생')
        }
      })

      .addCase(getQuickEntriesBy.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
          state.itemsBy = dao.addOneSuccess(payload)
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 수정작업 : 쿼리 체크 Error `)
        }
        // state.itemsToAdd =
        //   payload.data.code === "200" ? dao.addOneSuccess(payload) : undefined; //**TODO
      })

      .addCase(getQuickEntryById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 상세보기 : 쿼리 체크 Error `)
        }
      })
      .addCase(alterQuickEntryById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 수정작업 : 쿼리 체크 Error `)
        }
      })

      .addCase(delQuickEntryById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 삭제작업 : 쿼리 체크 Error `)
        }
      })
      .addCase(getAllQuickEntries.rejected, (state, { payload }) => {
        TD.rejectedTrouble(`[Reject Issue] ${DateMap().get()} 자주묻는 질문 전체목록 : 서버연결 실패 `)
      })
  }
})

export const {} = QuickEntrySlice.actions
export default QuickEntrySlice.reducer

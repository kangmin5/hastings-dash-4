import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { DormantAxios as axios } from './dormant-axios'
import { DormantVo } from 'app/customers/mo/dormant-mo/dormant-vo'
import { DormantFactory as factory } from './dormant-factory'
import { DormantAction as action, DormantStrategy as strategy } from './dormant-union'
import { DormantDao as dao } from './dormant-dao'
import {
  addDormant,
  getAllDormants,
  getDormantsBy,
  getDormantById,
  alterDormantById,
  delDormantById
} from './dormant-thunk'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleDao as TD } from 'app/systems/org/trouble-org/trouble-dao'
import { TroubleAspect as TA } from 'app/systems/org/trouble-org/trouble-aspect'
import { DateMap } from 'app/utils/atom/date-atom'
import { J } from '@fullcalendar/core/internal-common'

interface DormantState {
  items: DormantVo[]
  len: number
  isLoading: boolean
  hasItem: boolean
  hasMessage: string
}

const initialState: DormantState = {
  items: [],
  len: 0,
  isLoading: false,
  hasItem: false,
  hasMessage: ''
}

const DormantSlice = createSlice({
  name: `dormants`,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addDormant.fulfilled, (state, { payload }) => {
        console.log('[휴먼고객] 프론트에서는 추가하기 기능이 없음. ')
      })
      .addCase(getAllDormants.fulfilled, (state, { payload }) => {
        console.log('[휴면고객] 서버-목록  ')
        const jo = payload.data.json
        let arr = payload.data.array
        console.log('1-객체 : ', jo)
        console.log('2-배열 : ', arr[0])
        const queryIsGood = TA.check().isGoodQuery(payload)
        const authorHasToken = TA.check().hasToken(payload)
        if (queryIsGood && authorHasToken) {
          arr = dao.getAllSuccess(arr)
          const exist = arr.length > 0
          console.log(exist ?' [휴먼고객] 이 존재함.':'[휴먼고객] 이 존재하지 않음.')
          if (exist) {
            state.hasItem = true
            state.isLoading = true
            state.items = arr
            state.len = state.items.length
          } else {
            state.hasMessage = '[휴먼고객]이 없습니다.'
          }
        } else {
          console.log('[휴먼고객] 게시판에 도달할 수 없는 에러발생')
        }
      })

      .addCase(getDormantsBy.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
          state.items = dao.addOneSuccess(payload)
        } else {
          console.log(`[Error Issue] ${DateMap().get()} [휴먼고객] 수정작업 : 쿼리 체크 Error `)
        }
        // state.itemsToAdd =
        //   payload.data.code === "200" ? dao.addOneSuccess(payload) : undefined; //**TODO
      })

      .addCase(getDormantById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} [휴먼고객] 상세보기 : 쿼리 체크 Error `)
        }
      })
      .addCase(alterDormantById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} [휴먼고객] 수정작업 : 쿼리 체크 Error `)
        }
      })

      .addCase(delDormantById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} [휴먼고객] 삭제작업 : 쿼리 체크 Error `)
        }
      })
      .addCase(getAllDormants.rejected, (state, { payload }) => {
        TD.rejectedTrouble(`[Reject Issue] ${DateMap().get()} [휴먼고객] 전체목록 : 서버연결 실패 `)
      })
  }
})

export const {} = DormantSlice.actions
export default DormantSlice.reducer

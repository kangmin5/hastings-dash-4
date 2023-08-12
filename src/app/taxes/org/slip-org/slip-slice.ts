import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { SlipAxios as axios } from './slip-axios'
import { SlipVo } from 'app/taxes/mo/slip-mo/slip-vo'
import { SlipFactory as factory } from './slip-factory'
import { SlipAction as action, SlipStrategy as strategy } from './slip-union'
import { SlipDao as dao } from './slip-dao'
import { addSlip, getAllSlips, getSlipsBy, getSlipById, alterSlipById, delSlipById } from './slip-thunk'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleDao as TD } from 'app/systems/org/trouble-org/trouble-dao'
import { TroubleAspect as TA } from 'app/systems/org/trouble-org/trouble-aspect'
import { DateMap } from 'app/utils/atom/date-atom'

interface SlipState {
  items: SlipVo[]
  len: number
  itemsBy: SlipVo[]
  isLoading: boolean
  hasItem: boolean
  hasMessage: string
}

const initialState: SlipState = {
  items: [],
  len: 0,
  itemsBy: [],
  isLoading: false,
  hasItem: false,
  hasMessage: ''
}

const SlipSlice = createSlice({
  name: `slips`,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addSlip.fulfilled, (state, { payload }) => {
        console.log('간이영수증 게시판 프론트에서는 추가하기 기능이 없습니다. ')
      })
      .addCase(getAllSlips.fulfilled, (state, { payload }) => {
        const queryIsGood = TA.check().isGoodQuery(payload)
        const authorHasToken = TA.check().hasToken(payload)
        if (queryIsGood && authorHasToken) {
          state.items = dao.getAllSuccess(payload)
          state.isLoading = true
          if (state.items.length > 0) {
            state.hasItem = true
            state.len = state.items.length
          } else {
            state.hasMessage = '등록된 간이영수증이 없습니다.'
          }
        } else {
          console.log('간이영수증 게시판에 도달할 수 없는 에러발생')
        }
      })

      .addCase(getSlipsBy.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
          state.itemsBy = dao.addOneSuccess(payload)
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 간이영수증 수정작업 : 쿼리 체크 Error `)
        }
        // state.itemsToAdd =
        //   payload.data.code === "200" ? dao.addOneSuccess(payload) : undefined; //**TODO
      })

      .addCase(getSlipById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 간이영수증 상세보기 : 쿼리 체크 Error `)
        }
      })
      .addCase(alterSlipById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 간이영수증 수정작업 : 쿼리 체크 Error `)
        }
      })

      .addCase(delSlipById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 간이영수증 삭제작업 : 쿼리 체크 Error `)
        }
      })
      .addCase(getAllSlips.rejected, (state, { payload }) => {
        TD.rejectedTrouble(`[Reject Issue] ${DateMap().get()} 간이영수증 전체목록 : 서버연결 실패 `)
      })
  }
})

export const {} = SlipSlice.actions
export default SlipSlice.reducer

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { RefundAxios as axios } from './refund-axios'
import { RefundVo } from 'app/taxes/mo/refund-mo/refund-vo'
import { RefundFactory as factory } from './refund-factory'
import { RefundAction as action, RefundStrategy as strategy } from './refund-union'
import { RefundDao as dao } from './refund-dao'
import { addRefund, getAllRefunds, getRefundsBy, getRefundById, alterRefundById, delRefundById } from './refund-thunk'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleDao as TD } from 'app/systems/org/trouble-org/trouble-dao'
import { TroubleAspect as TA } from 'app/systems/org/trouble-org/trouble-aspect'
import { DateMap } from 'app/utils/atom/date-atom'

interface RefundState {
  items: RefundVo[]
  len: number
  itemsBy: RefundVo[]
  isLoading: boolean
  hasItem: boolean
  hasMessage: string
}

const initialState: RefundState = {
  items: [],
  len: 0,
  itemsBy: [],
  isLoading: false,
  hasItem: false,
  hasMessage: ''
}

const RefundSlice = createSlice({
  name: `refunds`,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addRefund.fulfilled, (state, { payload }) => {
        console.log('환불 게시판 프론트에서는 추가하기 기능이 없습니다. ')
      })
      .addCase(getAllRefunds.fulfilled, (state, { payload }) => {
        const queryIsGood = TA.check().isGoodQuery(payload)
        const authorHasToken = TA.check().hasToken(payload)
        if (queryIsGood && authorHasToken) {
          state.items = dao.getAllSuccess(payload)
          state.isLoading = true
          if (state.items.length > 0) {
            state.hasItem = true
            state.len = state.items.length
          } else {
            state.hasMessage = '등록된 환불이 없습니다.'
          }
        } else {
          console.log('환불 게시판에 도달할 수 없는 에러발생')
        }
      })

      .addCase(getRefundsBy.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
          state.itemsBy = dao.addOneSuccess(payload)
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 환불 수정작업 : 쿼리 체크 Error `)
        }
        // state.itemsToAdd =
        //   payload.data.code === "200" ? dao.addOneSuccess(payload) : undefined; //**TODO
      })

      .addCase(getRefundById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 환불 상세보기 : 쿼리 체크 Error `)
        }
      })
      .addCase(alterRefundById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 환불 수정작업 : 쿼리 체크 Error `)
        }
      })

      .addCase(delRefundById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 환불 삭제작업 : 쿼리 체크 Error `)
        }
      })
      .addCase(getAllRefunds.rejected, (state, { payload }) => {
        TD.rejectedTrouble(`[Reject Issue] ${DateMap().get()} 환불 전체목록 : 서버연결 실패 `)
      })
  }
})

export const {} = RefundSlice.actions
export default RefundSlice.reducer

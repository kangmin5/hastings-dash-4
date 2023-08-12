import { createSlice } from '@reduxjs/toolkit'
import { ReceiptVo } from 'app/taxes/mo/receipt-mo/receipt-vo'
import { ReceiptDao as dao } from './receipt-dao'
import {
  addReceipt,
  alterReceiptById,
  delReceiptById,
  getAllReceiptApplies,
  getReceiptAppliesBy,
  getReceiptById
} from './receipt-thunk'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleDao as TD } from 'app/systems/org/trouble-org/trouble-dao'
import { TroubleAspect as TA } from 'app/systems/org/trouble-org/trouble-aspect'
import { DateMap } from 'app/utils/atom/date-atom'

interface ReceiptState {
  items: ReceiptVo[]
  itemsBy: ReceiptVo[]
  isLoading: boolean
  hasItem: boolean
  hasMessage: string
}

const initialState: ReceiptState = {
  items: [],
  itemsBy: [],
  isLoading: false,
  hasItem: false,
  hasMessage: ''
}

const ReceiptSlice = createSlice({
  name: `receiptApplies`,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addReceipt.fulfilled, (state, { payload }) => {})

      .addCase(getAllReceiptApplies.fulfilled, (state, { payload }) => {
        console.log(' >>>>>>>> 8888 >>>>>>>>')
        const queryIsGood = TA.check().isGoodQuery(payload)
        const authorHasToken = TA.check().hasToken(payload)
        if (queryIsGood && authorHasToken) {
          state.items = dao.getAllSuccess(payload)
          state.isLoading = true
          if (state.items.length > 0) {
            state.hasItem = true
          } else {
            state.hasMessage = '등록된 영수증 신청내역이 없습니다.'
          }
        } else if (queryIsGood && !authorHasToken) {
          state.hasMessage = '로그인이 필요합니다'
        } else if (!queryIsGood && authorHasToken) {
          state.hasMessage = '.'
        } else {
          state.hasMessage = '쿼리 요청과 토큰이 모두 유효하지 않습니다. 관리자에게 문의 바랍니다.'
        }
      })
      .addCase(getAllReceiptApplies.rejected, (state, { payload }) => {
        state.hasMessage = '서버에서 요청을 거절합니다. 관리자에게 문의 바랍니다.'
      })
      .addCase(getReceiptAppliesBy.fulfilled, (state, { payload }) => {
        if (payload.data.code === '200') {
          dao.getBySuccess(payload)
        }
      })
      .addCase(getReceiptById.fulfilled, (state, { payload }) => {
        if (payload.data.code === '200') {
          dao.getByIdSuccess(payload)
        }
      })
      .addCase(alterReceiptById.fulfilled, (state, { payload }) => {
        if (payload.data.code === '200') {
          dao.alterByIdSuccess(payload)
        }
      })
      .addCase(delReceiptById.fulfilled, (state, { payload }) => {
        if (payload.data.code === '200') {
          dao.delByIdSuccess(payload)
        }
      })
  }
})

export const {} = ReceiptSlice.actions

export default ReceiptSlice.reducer

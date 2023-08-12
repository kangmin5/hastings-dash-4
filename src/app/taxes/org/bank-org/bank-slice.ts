import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { BankAxios as axios } from './bank-axios'
import { BankVo } from 'app/taxes/mo/bank-mo/bank-vo'
import { BankFactory as factory } from './bank-factory'
import { BankAction as action, BankStrategy as strategy } from './bank-union'
import { BankDao as dao } from './bank-dao'
import { addBank, getAllBanks, getBanksBy, getBankById, alterBankById, delBankById } from './bank-thunk'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleDao as TD } from 'app/systems/org/trouble-org/trouble-dao'
import { TroubleAspect as TA } from 'app/systems/org/trouble-org/trouble-aspect'
import { DateMap } from 'app/utils/atom/date-atom'

interface BankState {
  items: BankVo[]
  len: number
  itemsBy: BankVo[]
  isLoading: boolean
  hasItem: boolean
  hasMessage: string
}

const initialState: BankState = {
  items: [],
  len: 0,
  itemsBy: [],
  isLoading: false,
  hasItem: false,
  hasMessage: ''
}

const BankSlice = createSlice({
  name: `banks`,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addBank.fulfilled, (state, { payload }) => {
        console.log('자주묻는 질문 게시판 프론트에서는 추가하기 기능이 없습니다. ')
      })
      .addCase(getAllBanks.fulfilled, (state, { payload }) => {
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

      .addCase(getBanksBy.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
          state.itemsBy = dao.addOneSuccess(payload)
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 수정작업 : 쿼리 체크 Error `)
        }
        // state.itemsToAdd =
        //   payload.data.code === "200" ? dao.addOneSuccess(payload) : undefined; //**TODO
      })

      .addCase(getBankById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 상세보기 : 쿼리 체크 Error `)
        }
      })
      .addCase(alterBankById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 수정작업 : 쿼리 체크 Error `)
        }
      })

      .addCase(delBankById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 삭제작업 : 쿼리 체크 Error `)
        }
      })
      .addCase(getAllBanks.rejected, (state, { payload }) => {
        TD.rejectedTrouble(`[Reject Issue] ${DateMap().get()} 자주묻는 질문 전체목록 : 서버연결 실패 `)
      })
  }
})

export const {} = BankSlice.actions
export default BankSlice.reducer

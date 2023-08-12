import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { TaxAxios as axios } from './tax-axios'
import { TaxVo } from 'app/taxes/mo/tax-bill-mo/tax-bill-vo'
import { TaxFactory as factory } from './tax-factory'
import { TaxAction as action, TaxStrategy as strategy } from './tax-union'
import { TaxDao as dao } from './tax-dao'
import { addTax, getAllTaxes, getTaxesBy, getTaxById, alterTaxById, delTaxById } from './tax-thunk'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleDao as TD } from 'app/systems/org/trouble-org/trouble-dao'
import { TroubleAspect as TA } from 'app/systems/org/trouble-org/trouble-aspect'
import { DateMap } from 'app/utils/atom/date-atom'

interface TaxState {
  items: TaxVo[]
  len: number
  itemsBy: TaxVo[]
  isLoading: boolean
  hasItem: boolean
  hasMessage: string
}

const initialState: TaxState = {
  items: [],
  len: 0,
  itemsBy: [],
  isLoading: false,
  hasItem: false,
  hasMessage: ''
}

const TaxSlice = createSlice({
  name: `taxes`,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addTax.fulfilled, (state, { payload }) => {
        console.log('세금계산서 게시판 프론트에서는 추가하기 기능이 없습니다. ')
      })
      .addCase(getAllTaxes.fulfilled, (state, { payload }) => {
        const queryIsGood = TA.check().isGoodQuery(payload)
        const authorHasToken = TA.check().hasToken(payload)
        if (queryIsGood && authorHasToken) {
          state.items = dao.getAllSuccess(payload)
          state.isLoading = true
          if (state.items.length > 0) {
            state.hasItem = true
            state.len = state.items.length
          } else {
            state.hasMessage = '등록된 세금계산서이 없습니다.'
          }
        } else {
          console.log('세금계산서 게시판에 도달할 수 없는 에러발생')
        }
      })

      .addCase(getTaxesBy.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
          state.itemsBy = dao.addOneSuccess(payload)
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 세금계산서 수정작업 : 쿼리 체크 Error `)
        }
        // state.itemsToAdd =
        //   payload.data.code === "200" ? dao.addOneSuccess(payload) : undefined; //**TODO
      })

      .addCase(getTaxById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 세금계산서 상세보기 : 쿼리 체크 Error `)
        }
      })
      .addCase(alterTaxById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 세금계산서 수정작업 : 쿼리 체크 Error `)
        }
      })

      .addCase(delTaxById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 세금계산서 삭제작업 : 쿼리 체크 Error `)
        }
      })
      .addCase(getAllTaxes.rejected, (state, { payload }) => {
        TD.rejectedTrouble(`[Reject Issue] ${DateMap().get()} 세금계산서 전체목록 : 서버연결 실패 `)
      })
  }
})

export const {} = TaxSlice.actions
export default TaxSlice.reducer

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { InquiryAxios as axios } from './inquiry-axios'
import { InquiryVo } from 'app/boards/mo/inquiry-mo/inquiry-vo'
import { InquiryFactory as factory } from './inquiry-factory'
import { InquiryAction as action, InquiryStrategy as strategy } from './inquiry-union'
import { InquiryDao as dao } from './inquiry-dao'
import {
  addInquiry,
  getAllInquiries,
  getInquiriesBy,
  getInquiryById,
  alterInquiryById,
  delInquiryById
} from './inquiry-thunk'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleDao as TD } from 'app/systems/org/trouble-org/trouble-dao'
import { TroubleAspect as TA } from 'app/systems/org/trouble-org/trouble-aspect'
import { DateMap } from 'app/utils/atom/date-atom'

interface InquiryState {
  items: InquiryVo[]
  len: number
  isLoading: boolean
  hasItem: boolean
  hasMessage: string
}

const initialState: InquiryState = {
  items: [],
  len: 0,
  isLoading: false,
  hasItem: false,
  hasMessage: ''
}

const InquirySlice = createSlice({
  name: `inquiries`,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addInquiry.fulfilled, (state, { payload }) => {
        console.log('자주묻는 질문 게시판 프론트에서는 추가하기 기능이 없습니다. ')
      })
      .addCase(getAllInquiries.fulfilled, (state, { payload }) => {
        const queryIsGood = TA.check().isGoodQuery(payload)
        const authorHasToken = TA.check().hasToken(payload)
        if (queryIsGood && authorHasToken) {
          const array = payload.data.array
          console.log('배열: ', JSON.stringify(array))
          const page = payload.data.page
          console.log('페이지: ', JSON.stringify(page))
          const json = payload.data.json
          console.log('제이슨: ', JSON.stringify(json))
          state.items = dao.getAllSuccess(array)
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

      .addCase(getInquiriesBy.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
          state.items = dao.addOneSuccess(payload)
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 수정작업 : 쿼리 체크 Error `)
        }
        // state.itemsToAdd =
        //   payload.data.code === "200" ? dao.addOneSuccess(payload) : undefined; //**TODO
      })

      .addCase(getInquiryById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 상세보기 : 쿼리 체크 Error `)
        }
      })
      .addCase(alterInquiryById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 수정작업 : 쿼리 체크 Error `)
        }
      })

      .addCase(delInquiryById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 삭제작업 : 쿼리 체크 Error `)
        }
      })
      .addCase(getAllInquiries.rejected, (state, { payload }) => {
        TD.rejectedTrouble(`[Reject Issue] ${DateMap().get()} 자주묻는 질문 전체목록 : 서버연결 실패 `)
      })
  }
})

export const {} = InquirySlice.actions
export default InquirySlice.reducer

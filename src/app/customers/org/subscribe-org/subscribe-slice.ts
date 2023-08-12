import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { SubscribeAxios as axios } from './subscribe-axios'
import { SubscribeVo } from 'app/customers/mo/subscribe-mo/subscribe-vo'
import { SubscribeFactory as factory } from './subscribe-factory'
import { SubscribeAction as action, SubscribeStrategy as strategy } from './subscribe-union'
import { SubscribeDao as dao } from './subscribe-dao'
import {
  addSubscribe,
  getAllSubscribes,
  getSubscribesBy,
  getSubscribeById,
  alterSubscribeById,
  delSubscribeById
} from './subscribe-thunk'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleDao as TD } from 'app/systems/org/trouble-org/trouble-dao'
import { TroubleAspect as TA } from 'app/systems/org/trouble-org/trouble-aspect'
import { DateMap } from 'app/utils/atom/date-atom'

interface SubscribeState {
  items: SubscribeVo[]
  len: number
  itemsBy: SubscribeVo[]
  item: SubscribeVo
  isLoading: boolean
  hasItem: boolean
  hasMessage: string
}

const initialState: SubscribeState = {
  items: [],
  len: 0,
  itemsBy: [],
  item: new SubscribeVo(),
  isLoading: false,
  hasItem: false,
  hasMessage: ''
}

const SubscribeSlice = createSlice({
  name: `subscribes`,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addSubscribe.fulfilled, (state, { payload }) => {
        console.log('자주묻는 질문 게시판 프론트에서는 추가하기 기능이 없습니다. ')
      })
      .addCase(getAllSubscribes.fulfilled, (state, { payload }) => {
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

      .addCase(getSubscribesBy.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
          state.itemsBy = dao.addOneSuccess(payload)
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 수정작업 : 쿼리 체크 Error `)
        }
        // state.itemsToAdd =
        //   payload.data.code === "200" ? dao.addOneSuccess(payload) : undefined; //**TODO
      })

      .addCase(getSubscribeById.fulfilled, (state, { payload }) => {
        console.log(' [구독정보] 상세보기 : ')
        const queryIsGood = TA.check().isGoodQuery(payload)
        const authorHasToken = TA.check().hasToken(payload)
        if (queryIsGood && authorHasToken) {
          const jo = payload.data.json

          console.log(' [구독정보] 상세보기 (전) : ', JSON.stringify(jo))

          if (jo.id !== '') {
            const item = dao.getByIdSuccess(state.item)[0]
            console.log(' [구독정보] 상세보기 (후)) : ', JSON.stringify(item))
            state.item = item
          } else {
            state.hasMessage = '등록된 [구독정보] 가 없습니다.'
            console.log('등록된 [구독정보] 가 없습니다.')
          }
        } else {
          console.log(' [구독정보] 게시판에 도달할 수 없는 에러발생')
        }
      })
      .addCase(alterSubscribeById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 수정작업 : 쿼리 체크 Error `)
        }
      })

      .addCase(delSubscribeById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 삭제작업 : 쿼리 체크 Error `)
        }
      })
      .addCase(getAllSubscribes.rejected, (state, { payload }) => {
        TD.rejectedTrouble(`[Reject Issue] ${DateMap().get()} 자주묻는 질문 전체목록 : 서버연결 실패 `)
      })
  }
})

export const {} = SubscribeSlice.actions
export default SubscribeSlice.reducer

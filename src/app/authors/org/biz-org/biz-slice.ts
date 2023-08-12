import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { BizAxios as axios } from './biz-axios'
import { BizVo } from 'app/authors/mo/biz-mo/biz-vo'
import { BizFactory as factory } from './biz-factory'
import { BizAction as action, BizStrategy as strategy } from './biz-union'
import { BizDao as dao } from './biz-dao'
import {
  addBiz,
  getAllBizMembers,
  getBizMembersBy,
  getBizById,
  alterBizById,
  delBizById,
  login
} from './biz-thunk'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleDao as TD } from 'app/systems/org/trouble-org/trouble-dao'
import { TroubleAspect as TA } from 'app/systems/org/trouble-org/trouble-aspect'
import { DateMap } from 'app/utils/atom/date-atom'
import router from 'next/router'

interface BizState {
  isOpen: boolean
  items: BizVo[]
  token: string
  hasToken: boolean
  hasItem: boolean
  hasMessage: string
  hasAccount: boolean
  itemCount: string
}

const initialState: BizState = {
  isOpen: false,
  items: [],
  hasItem: false,
  hasMessage: '',
  hasAccount: false,
  token: '',
  hasToken: false,
  itemCount: '0'
}

const BizSlice = createSlice({
  name: `bizMembers`,
  initialState,
  reducers: {
    clear: () => {}
  },
  extraReducers: builder => {
    builder
      .addCase(addBiz.fulfilled, (state, { payload }) => {
        console.log('자주묻는 질문 게시판 프론트에서는 추가하기 기능이 없습니다. ')
      })
      .addCase(getAllBizMembers.fulfilled, (state, { payload }) => {
        const queryIsGood = TA.check().isGoodQuery(payload)
        const bizHasToken = TA.check().hasToken(payload)
        if (queryIsGood && bizHasToken) {
          state.items = dao.getAllSuccess(payload)
          if (state.items.length > 0) {
            state.hasItem = true
          } else {
            state.hasMessage = '등록된 자주 묻는 질문이 없습니다.'
          }
        } else {
          console.log('자주묻는 질문 게시판에 도달할 수 없는 에러발생')
        }
      })

      .addCase(getBizMembersBy.fulfilled, (state, { payload }) => {})

      .addCase(getBizById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 상세보기 : 쿼리 체크 Error `)
        }
      })
      .addCase(alterBizById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 수정작업 : 쿼리 체크 Error `)
        }
      })

      .addCase(delBizById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 삭제작업 : 쿼리 체크 Error `)
        }
      })
      .addCase(getAllBizMembers.rejected, (state, { payload }) => {
        TD.rejectedTrouble(`[Reject Issue] ${DateMap().get()} 자주묻는 질문 전체목록 : 서버연결 실패 `)
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        const data = payload.data
        console.log(`[${DateMap().get()}]  로그인 &&&&&&& \n`, JSON.stringify(data))
        const GOOD = TA.check().isGoodQuery(payload)
        const OK = payload.data.code == 200
        console.log('OK is ', OK, 'GOOD is ', GOOD)
        if (OK && GOOD) {
          state.hasToken = true
          state.token = data.accessToken
          window.localStorage.setItem('accessToken', data.accessToken)
          window.localStorage.setItem('refreshToken', data.refreshToken)
          // router.push('/')
        } else {
          TA.check().notOK(payload, OK, GOOD)
        }
      })
  }
})

export const {} = BizSlice.actions
export default BizSlice.reducer

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { AuthorAxios as axios } from './author-axios'
import { AuthorVo } from 'app/authors/mo/author-mo/author-vo'
import { AuthorFactory as factory } from './author-factory'
import { AuthorAction as action, AuthorStrategy as strategy } from './author-union'
import { AuthorDao as dao } from './author-dao'
import {
  addAuthor,
  getAllAuthors,
  getAuthorsBy,
  getAuthorById,
  alterAuthorById,
  delAuthorById,
  login
} from './author-thunk'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleDao as TD } from 'app/systems/org/trouble-org/trouble-dao'
import { TroubleAspect as TA } from 'app/systems/org/trouble-org/trouble-aspect'
import { DateMap } from 'app/utils/atom/date-atom'
import router from 'next/router'

interface AuthorState {
  isOpen: boolean
  items: AuthorVo[]
  token: string
  hasToken: boolean
  hasItem: boolean
  hasMessage: string
  hasAccount: boolean
}

const initialState: AuthorState = {
  isOpen: false,
  items: [],
  hasItem: false,
  hasMessage: '',
  hasAccount: false,
  token: '',
  hasToken: false
}

const AuthorSlice = createSlice({
  name: `authors`,
  initialState,
  reducers: {
    clear: () => {}
  },
  extraReducers: builder => {
    builder
      .addCase(addAuthor.fulfilled, (state, { payload }) => {
        console.log('자주묻는 질문 게시판 프론트에서는 추가하기 기능이 없습니다. ')
      })
      .addCase(getAllAuthors.fulfilled, (state, { payload }) => {
        const queryIsGood = TA.check().isGoodQuery(payload)
        const authorHasToken = TA.check().hasToken(payload)
        if (queryIsGood && authorHasToken) {
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

      .addCase(getAuthorsBy.fulfilled, (state, { payload }) => {})

      .addCase(getAuthorById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 상세보기 : 쿼리 체크 Error `)
        }
      })
      .addCase(alterAuthorById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 수정작업 : 쿼리 체크 Error `)
        }
      })

      .addCase(delAuthorById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 삭제작업 : 쿼리 체크 Error `)
        }
      })
      .addCase(getAllAuthors.rejected, (state, { payload }) => {
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

export const {} = AuthorSlice.actions
export default AuthorSlice.reducer

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { NoticeAxios as axios } from './notice-axios'
import { NoticeVo } from 'app/boards/mo/notice-mo/notice-vo'
import { NoticeFactory as factory } from './notice-factory'
import { NoticeAction as action, NoticeStrategy as strategy } from './notice-union'
import { NoticeDao as dao } from './notice-dao'
import { addNotice, 
  addNoticeImage,
  getAllNotices, getNoticesBy, getNoticeById, alterNoticeById, delNoticeById } from './notice-thunk'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleDao as TD } from 'app/systems/org/trouble-org/trouble-dao'
import { TroubleAspect as TA } from 'app/systems/org/trouble-org/trouble-aspect'
import { DateMap } from 'app/utils/atom/date-atom'
import { ImageVo } from 'app/systems/mo/image-mo/image-vo'

interface NoticeState {
  items: NoticeVo[]
  images: ImageVo[]
  len: number
  isLoading: boolean
  hasItem: boolean
  hasMessage: string
}

const initialState: NoticeState = {
  items: [],
  images:[],
  len: 0,
  isLoading: false,
  hasItem: false,
  hasMessage: ''
}

const NoticeSlice = createSlice({
  name: `notices`,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addNotice.fulfilled, (state, { payload }) => {
        console.log('공지사항 추가 성공 ', payload.data.json) 

        

      })
      .addCase(addNoticeImage.fulfilled, (state, { payload }) => {
        console.log('이미지 업로드')
        //const queryIsGood = TA.check().isGoodQuery(payload)
        //const authorHasToken = TA.check().hasToken(payload)
        console.log('이미지 업로드 결과 : ', payload)
        state.images = payload.data.array
      })
      .addCase(getAllNotices.fulfilled, (state, { payload }) => {
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

      .addCase(getNoticesBy.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
          state.items = dao.addOneSuccess(payload)
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 수정작업 : 쿼리 체크 Error `)
        }
        // state.itemsToAdd =
        //   payload.data.code === "200" ? dao.addOneSuccess(payload) : undefined; //**TODO
      })

      .addCase(getNoticeById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 상세보기 : 쿼리 체크 Error `)
        }
      })
      .addCase(alterNoticeById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 수정작업 : 쿼리 체크 Error `)
        }
      })

      .addCase(delNoticeById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 삭제작업 : 쿼리 체크 Error `)
        }
      })
      .addCase(getAllNotices.rejected, (state, { payload }) => {
        TD.rejectedTrouble(`[Reject Issue] ${DateMap().get()} 자주묻는 질문 전체목록 : 서버연결 실패 `)
      })
  }
})

export const {} = NoticeSlice.actions
export default NoticeSlice.reducer

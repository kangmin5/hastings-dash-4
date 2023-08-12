import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { ProfileAxios as axios } from './profile-axios'
import { ProfileVo } from 'app/customers/mo/profile-mo/profile-vo'
import { ProfileFactory as factory } from './profile-factory'
import { ProfileAction as action, ProfileStrategy as strategy } from './profile-union'
import { ProfileDao as dao } from './profile-dao'
import {
  addProfile,
  getAllProfiles,
  getProfilesBy,
  getProfileById,
  alterProfileById,
  delProfileById
} from './profile-thunk'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleDao as TD } from 'app/systems/org/trouble-org/trouble-dao'
import { TroubleAspect as TA } from 'app/systems/org/trouble-org/trouble-aspect'
import { DateMap } from 'app/utils/atom/date-atom'

interface ProfileState {
  items: ProfileVo[]
  len: number
  itemsBy: ProfileVo[]
  isLoading: boolean
  hasItem: boolean
  hasMessage: string
}

const initialState: ProfileState = {
  items: [],
  len: 0,
  itemsBy: [],
  isLoading: false,
  hasItem: false,
  hasMessage: ''
}

const ProfileSlice = createSlice({
  name: `profiles`,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addProfile.fulfilled, (state, { payload }) => {
        console.log('자주묻는 질문 게시판 프론트에서는 추가하기 기능이 없습니다. ')
      })
      .addCase(getAllProfiles.fulfilled, (state, { payload }) => {
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

      .addCase(getProfilesBy.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
          state.itemsBy = dao.addOneSuccess(payload)
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 수정작업 : 쿼리 체크 Error `)
        }
        // state.itemsToAdd =
        //   payload.data.code === "200" ? dao.addOneSuccess(payload) : undefined; //**TODO
      })

      .addCase(getProfileById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 상세보기 : 쿼리 체크 Error `)
        }
      })
      .addCase(alterProfileById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 수정작업 : 쿼리 체크 Error `)
        }
      })

      .addCase(delProfileById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 삭제작업 : 쿼리 체크 Error `)
        }
      })
      .addCase(getAllProfiles.rejected, (state, { payload }) => {
        TD.rejectedTrouble(`[Reject Issue] ${DateMap().get()} 자주묻는 질문 전체목록 : 서버연결 실패 `)
      })
  }
})

export const {} = ProfileSlice.actions
export default ProfileSlice.reducer

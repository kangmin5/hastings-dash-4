import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { TunnelAxios as axios } from './tunnel-axios'
import { TunnelVo } from 'app/customers/mo/tunnel-mo/tunnel-vo'
import { TunnelFactory as factory } from './tunnel-factory'
import { TunnelAction as action, TunnelStrategy as strategy } from './tunnel-union'
import { TunnelDao as dao } from './tunnel-dao'
import { addTunnel, getAllTunnels, getTunnelsBy, getTunnelById, alterTunnelById, delTunnelById } from './tunnel-thunk'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleDao as TD } from 'app/systems/org/trouble-org/trouble-dao'
import { TroubleAspect as TA } from 'app/systems/org/trouble-org/trouble-aspect'
import { DateMap } from 'app/utils/atom/date-atom'

interface TunnelState {
  items: TunnelVo[]
  len: number
  isLoading: boolean
  hasItem: boolean
  hasMessage: string
}

const initialState: TunnelState = {
  items: [],
  len: 0,
  isLoading: false,
  hasItem: false,
  hasMessage: ''
}

const TunnelSlice = createSlice({
  name: `tunnels`,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addTunnel.fulfilled, (state, { payload }) => {
        console.log('자주묻는 질문 게시판 프론트에서는 추가하기 기능이 없습니다. ')
      })
      .addCase(getAllTunnels.fulfilled, (state, { payload }) => {
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

      .addCase(getTunnelsBy.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
          state.items = dao.addOneSuccess(payload)
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 수정작업 : 쿼리 체크 Error `)
        }
        // state.itemsToAdd =
        //   payload.data.code === "200" ? dao.addOneSuccess(payload) : undefined; //**TODO
      })

      .addCase(getTunnelById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 상세보기 : 쿼리 체크 Error `)
        }
      })
      .addCase(alterTunnelById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 수정작업 : 쿼리 체크 Error `)
        }
      })

      .addCase(delTunnelById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 삭제작업 : 쿼리 체크 Error `)
        }
      })
      .addCase(getAllTunnels.rejected, (state, { payload }) => {
        TD.rejectedTrouble(`[Reject Issue] ${DateMap().get()} 자주묻는 질문 전체목록 : 서버연결 실패 `)
      })
  }
})

export const {} = TunnelSlice.actions
export default TunnelSlice.reducer

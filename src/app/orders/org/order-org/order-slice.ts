import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { OrderAxios as axios } from './order-axios'
import { OrderFactory as factory } from './order-factory'
import { OrderAction as action, OrderStrategy as strategy } from './order-union'
import { OrderDao as dao } from './order-dao'
import { addOrder, getAllOrders, getOrdersBy, getOrderById, alterOrderById, delOrderById } from './order-thunk'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleDao as TD } from 'app/systems/org/trouble-org/trouble-dao'
import { TroubleAspect as TA } from 'app/systems/org/trouble-org/trouble-aspect'
import { DateMap } from 'app/utils/atom/date-atom'
import { OrderVo } from 'app/orders/mo/order-mo/order-vo'

interface OrderState {
  items: OrderVo[]
  len: number
  itemsBy: OrderVo[]
  isLoading: boolean
  hasItem: boolean
  hasMessage: string
}

const initialState: OrderState = {
  items: [],
  len: 0,
  itemsBy: [],
  isLoading: false,
  hasItem: false,
  hasMessage: ''
}

const OrderSlice = createSlice({
  name: `orders`,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addOrder.fulfilled, (state, { payload }) => {
        console.log('[주문] 등록')
      })
      .addCase(getAllOrders.fulfilled, (state, { payload }) => {
        const queryIsGood = TA.check().isGoodQuery(payload)
        const authorHasToken = TA.check().hasToken(payload)
        if (queryIsGood && authorHasToken) {
          // console.log("&&&&&&&&&&& [주문] 데이터 : ",JSON.stringify(payload.data))
          const json = payload.data.json
          const array = payload.data.array
          if (json.msg == undefined) {
            console.log('&&&&&&&&&&& [주문] 제이슨 : ', json.msg)
          }
          console.log(' &&&&&&&&&&& [주문] 배열 : ', JSON.stringify(array[0]))
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

      .addCase(getOrdersBy.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
          state.itemsBy = dao.addOneSuccess(payload)
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 수정작업 : 쿼리 체크 Error `)
        }
        // state.itemsToAdd =
        //   payload.data.code === "200" ? dao.addOneSuccess(payload) : undefined; //**TODO
      })

      .addCase(getOrderById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 상세보기 : 쿼리 체크 Error `)
        }
      })
      .addCase(alterOrderById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 수정작업 : 쿼리 체크 Error `)
        }
      })

      .addCase(delOrderById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 자주묻는 질문 삭제작업 : 쿼리 체크 Error `)
        }
      })
      .addCase(getAllOrders.rejected, (state, { payload }) => {
        TD.rejectedTrouble(`[Reject Issue] ${DateMap().get()} 자주묻는 질문 전체목록 : 서버연결 실패 `)
      })
  }
})

export const {} = OrderSlice.actions
export default OrderSlice.reducer

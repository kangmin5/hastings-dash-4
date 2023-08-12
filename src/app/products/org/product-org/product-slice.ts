import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { ProductAxios as axios } from './product-axios'
import { ProductVo } from 'app/products/mo/product-mo/product-vo'
import { ProductFactory as factory } from './product-factory'
import { ProductAction as action, ProductStrategy as strategy } from './product-union'
import { ProductDao as dao } from './product-dao'
import {
  addProduct,
  getAllProducts,
  getProductsBy,
  getProductsByMain,
  getProductById,
  alterProductById,
  delProductById
} from './product-thunk'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleDao as TD } from 'app/systems/org/trouble-org/trouble-dao'
import { TroubleAspect as TA } from 'app/systems/org/trouble-org/trouble-aspect'
import { DateMap } from 'app/utils/atom/date-atom'

interface ProductState {
  items: ProductVo[]
  len: number
  isLoading: boolean
  hasItem: boolean
  hasMessage: string
  countOfAll: number
  countOfSelling: number
  countOfStopSelling: number
  countOfDisplayed: number
  countOfNoShow: number
}

const initialState: ProductState = {
  items: [],
  len: 0,
  isLoading: false,
  hasItem: false,
  hasMessage: '',
  countOfAll: 0,
  countOfSelling: 0,
  countOfStopSelling: 0,
  countOfDisplayed: 0,
  countOfNoShow: 0
}

const ProductSlice = createSlice({
  name: `products`,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        console.log('상품 게시판 프론트에서는 추가하기 기능이 없습니다. ')
      })
      .addCase(getAllProducts.fulfilled, (state, { payload }) => {
        const queryIsGood = TA.check().isGoodQuery(payload)
        const authorHasToken = TA.check().hasToken(payload)
        if (queryIsGood && authorHasToken) {
          state.items = dao.getAllSuccess(payload)
          state.isLoading = true
          if (state.items.length > 0) {
            state.hasItem = true
            state.len = state.items.length
            const data = state.items
            console.log(' &&&&&&&&&&& data ', JSON.stringify(data))
            const json = payload.data.json
            console.log('&&&&&&&&&&& 전체 상품수량 : ', json.numberOfProducts)
            console.log('&&&&&&&&&&& 판매 상품수량 : ', json.numberOfSellingProducts)
            console.log('&&&&&&&&&&& 판매중단 상품수량 : ', json.numberOfStopSellingProducts)
            console.log('&&&&&&&&&&& 진열 상품수량 : ', json.numberOfDisplayedProducts)
            console.log('&&&&&&&&&&& 미진열 상품수량 : ', json.numberOfNotDisplayedProducts)
            state.countOfDisplayed = json.numberOfDisplayedProducts
            state.countOfStopSelling = json.numberOfStopSellingProducts
            state.countOfAll = json.numberOfProducts
            state.countOfSelling = json.numberOfSellingProducts
            state.countOfNoShow = json.numberOfNotDisplayedProducts

          } else {
            state.hasMessage = '등록된 상품이 없습니다.'
          }
        } else {
          console.log('상품 게시판에 도달할 수 없는 에러발생')
        }
      })

      .addCase(getProductsBy.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
          state.items = dao.addOneSuccess(payload)
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 상품 수정작업 : 쿼리 체크 Error `)
        }
        // state.itemsToAdd =
        //   payload.data.code === "200" ? dao.addOneSuccess(payload) : undefined; //**TODO
      })
      .addCase(getProductsByMain.fulfilled, (state, { payload }) => {
        const queryIsGood = TA.check().isGoodQuery(payload)
        const authorHasToken = TA.check().hasToken(payload)
        if (queryIsGood && authorHasToken) {
          state.items = dao.getByMainSuccess(payload)
          state.isLoading = true
          if (state.items.length > 0) {
            state.hasItem = true
            state.len = state.items.length
          } else {
            state.hasMessage = '등록된 메인 상품이 없습니다.'
          }
        } else {
          console.log('상품 게시판에 도달할 수 없는 에러발생')
        }
      })

      .addCase(getProductById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 상품 상세보기 : 쿼리 체크 Error `)
        }
      })
      .addCase(alterProductById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 상품 수정작업 : 쿼리 체크 Error `)
        }
      })

      .addCase(delProductById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} 상품 삭제작업 : 쿼리 체크 Error `)
        }
      })
      .addCase(getAllProducts.rejected, (state, { payload }) => {
        TD.rejectedTrouble(`[Reject Issue] ${DateMap().get()} 상품 전체목록 : 서버연결 실패 `)
      })
  }
})

export const {} = ProductSlice.actions
export default ProductSlice.reducer

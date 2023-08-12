import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductVo } from 'app/products/mo/product-mo/product-vo'
interface ProductState {
  item: ProductVo
}
const initialState: ProductState = {
  item: new ProductVo()
}
const ProductReducer = createSlice({
  name: `product`,
  initialState,
  reducers: {
    saveProduct(state, action: PayloadAction<ProductVo>) {
      state.item = action.payload
    }
  }
})

export const { saveProduct } = ProductReducer.actions
export const productReducer = ProductReducer.reducer

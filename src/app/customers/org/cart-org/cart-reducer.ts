import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartVo } from 'app/customers/mo/cart-mo/cart-vo'
interface CartState {
  item: CartVo
}
const initialState: CartState = {
  item: new CartVo()
}
const CartReducer = createSlice({
  name: `cart`,
  initialState,
  reducers: {
    saveCart(state, action: PayloadAction<CartVo>) {
      state.item = action.payload
    }
  }
})

export const { saveCart } = CartReducer.actions
export const cartReducer = CartReducer.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { OrderVo } from 'app/orders/mo/order-mo/order-vo'
interface OrderState {
  item: OrderVo
}
const initialState: OrderState = {
  item: new OrderVo()
}
const OrderReducer = createSlice({
  name: `order`,
  initialState,
  reducers: {
    saveOrder(state, action: PayloadAction<OrderVo>) {
      state.item = action.payload
    }
  }
})

export const { saveOrder } = OrderReducer.actions
export const orderReducer = OrderReducer.reducer

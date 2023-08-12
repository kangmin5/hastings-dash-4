import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CustomerVo } from 'app/customers/mo/customer-mo/customer-vo'
interface CustomerState {
  item: CustomerVo
}
const initialState: CustomerState = {
  item: new CustomerVo()
}
const CustomerReducer = createSlice({
  name: `customer`,
  initialState,
  reducers: {
    saveCustomer(state, action: PayloadAction<CustomerVo>) {
      state.item = action.payload
    }
  }
})

export const { saveCustomer } = CustomerReducer.actions
export const customerReducer = CustomerReducer.reducer

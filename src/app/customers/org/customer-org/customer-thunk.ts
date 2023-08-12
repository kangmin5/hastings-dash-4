import { createAsyncThunk } from '@reduxjs/toolkit'
import { CustomerAxios as axios } from './customer-axios'
import { CustomerVo } from 'app/customers/mo/customer-mo/customer-vo'
import { CustomerAction as action, CustomerStrategy as strategy } from 'app/customers/org/customer-org/customer-union'

export const addCustomer = createAsyncThunk(action.addOne, (parameter: CustomerVo) => axios.then().addOne(parameter))
export const getAllCustomers = createAsyncThunk(action.getAll, (parameter?: CustomerVo) =>
  axios.then().getAll(parameter)
)
export const getCustomersBy = createAsyncThunk(action.getBy, (parameter: CustomerVo) => axios.then().getBy(parameter))
export const getCustomerById = createAsyncThunk(action.getById, async (parameter: CustomerVo) => {
  return await axios.then().getById(parameter)
})
export const alterCustomerById = createAsyncThunk(action.alterById, async (parameter: CustomerVo) => {
  return await axios.then().alterById(parameter)
})
export const delCustomerById = createAsyncThunk(action.delById, async (parameter: CustomerVo) => {
  return await axios.then().delById(parameter)
})

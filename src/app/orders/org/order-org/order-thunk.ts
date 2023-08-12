import { createAsyncThunk } from '@reduxjs/toolkit'
import { OrderAxios as axios } from './order-axios'
import { OrderVo } from 'app/orders/mo/order-mo/order-vo'
import { OrderAction as action, OrderStrategy as strategy } from './order-union'
import { CustomerVo } from 'app/customers/mo/customer-mo/customer-vo'

export const addOrder = createAsyncThunk(action.addOne, (parameter: OrderVo) => axios.then().addOne(parameter))
export const getAllOrders = createAsyncThunk(action.getAll, (parameter?: OrderVo) => axios.then().getAll(parameter))
export const getOrdersBy = createAsyncThunk(action.getBy, (parameter: OrderVo) => axios.then().getBy(parameter))
export const getOrdersByUser = createAsyncThunk(action.getByUser, (parameter: CustomerVo) => axios.then().getByUser(parameter))
export const getOrderById = createAsyncThunk(action.getById, async (parameter: OrderVo) => {
  return await axios.then().getById(parameter)
})
export const alterOrderById = createAsyncThunk(action.alterById, async (parameter: OrderVo) => {
  return await axios.then().alterById(parameter)
})
export const delOrderById = createAsyncThunk(action.delById, async (parameter: OrderVo) => {
  return await axios.then().delById(parameter)
})

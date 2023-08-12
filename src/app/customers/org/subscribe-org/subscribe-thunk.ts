import { createAsyncThunk } from '@reduxjs/toolkit'
import { SubscribeAxios as axios } from './subscribe-axios'
import { SubscribeVo } from 'app/customers/mo/subscribe-mo/subscribe-vo'
import { SubscribeAction as action, SubscribeStrategy as strategy } from './subscribe-union'
import { CustomerVo } from 'app/customers/mo/customer-mo/customer-vo'

export const addSubscribe = createAsyncThunk(action.addOne, (parameter: SubscribeVo) => axios.then().addOne(parameter))
export const getAllSubscribes = createAsyncThunk(action.getAll, (parameter?: SubscribeVo) =>
  axios.then().getAll(parameter)
)
export const getSubscribesBy = createAsyncThunk(action.getBy, (parameter: SubscribeVo) => axios.then().getBy(parameter))
export const getSubscribesByUser = createAsyncThunk(action.getByUser, (parameter: CustomerVo) => axios.then().getByUser(parameter))
export const getSubscribeById = createAsyncThunk(action.getById, async (parameter: SubscribeVo) => {
  return await axios.then().getById(parameter)
})
export const alterSubscribeById = createAsyncThunk(action.alterById, async (parameter: SubscribeVo) => {
  return await axios.then().alterById(parameter)
})
export const delSubscribeById = createAsyncThunk(action.delById, async (parameter: SubscribeVo) => {
  return await axios.then().delById(parameter)
})

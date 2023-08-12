import { createAsyncThunk } from '@reduxjs/toolkit'
import { RefundAxios as axios } from './refund-axios'
import { RefundVo } from 'app/taxes/mo/refund-mo/refund-vo'
import { RefundAction as action, RefundStrategy as strategy } from './refund-union'

export const addRefund = createAsyncThunk(action.addOne, (parameter: RefundVo) => axios.then().addOne(parameter))
export const getAllRefunds = createAsyncThunk(action.getAll, (parameter?: RefundVo) => axios.then().getAll(parameter))
export const getRefundsBy = createAsyncThunk(action.getBy, (parameter: RefundVo) => axios.then().getBy(parameter))
export const getRefundById = createAsyncThunk(action.getById, async (parameter: RefundVo) => {
  return await axios.then().getById(parameter)
})
export const alterRefundById = createAsyncThunk(action.alterById, async (parameter: RefundVo) => {
  return await axios.then().alterById(parameter)
})
export const delRefundById = createAsyncThunk(action.delById, async (parameter: RefundVo) => {
  return await axios.then().delById(parameter)
})

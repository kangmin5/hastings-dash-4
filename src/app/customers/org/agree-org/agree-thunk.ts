import { createAsyncThunk } from '@reduxjs/toolkit'
import { AgreeAxios as axios } from './agree-axios'
import { AgreeVo } from 'app/customers/mo/agree-mo/agree-vo'
import { AgreeAction as action, AgreeStrategy as strategy } from './agree-union'
import { CustomerVo } from 'app/customers/mo/customer-mo/customer-vo'

export const addAgree = createAsyncThunk(action.addOne, (parameter: AgreeVo) => axios.then().addOne(parameter))
export const getAllAgrees = createAsyncThunk(action.getAll, (parameter?: AgreeVo) => axios.then().getAll(parameter))
export const getAgreesBy = createAsyncThunk(action.getBy, (parameter: AgreeVo) => axios.then().getBy(parameter))
export const getAgreesByUser = createAsyncThunk(action.getByUser, (parameter: CustomerVo) => axios.then().getByUser(parameter))
export const getAgreeById = createAsyncThunk(action.getById, async (parameter: AgreeVo) => {
  return await axios.then().getById(parameter)
})
export const alterAgreeById = createAsyncThunk(action.alterById, async (parameter: AgreeVo) => {
  return await axios.then().alterById(parameter)
})
export const delAgreeById = createAsyncThunk(action.delById, async (parameter: AgreeVo) => {
  return await axios.then().delById(parameter)
})

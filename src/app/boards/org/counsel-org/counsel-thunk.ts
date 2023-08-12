import { createAsyncThunk } from '@reduxjs/toolkit'
import { CounselAxios as axios } from './counsel-axios'
import { CounselVo } from 'app/boards/mo/counsel-mo/counsel-vo'
import { CounselAction as action, CounselStrategy as strategy } from './counsel-union'
import { CustomerVo } from 'app/customers/mo/customer-mo/customer-vo'

export const addCounsel = createAsyncThunk(action.addOne, (parameter: CounselVo) => axios.then().addOne(parameter))
export const getAllCounsels = createAsyncThunk(action.getAll, (parameter?: CounselVo) => axios.then().getAll(parameter))
export const getCounselsBy = createAsyncThunk(action.getBy, (parameter: CounselVo) => axios.then().getBy(parameter))
export const getCounselsByUser = createAsyncThunk(action.getByUser, (parameter: CustomerVo) => axios.then().getByUser(parameter))
export const getCounselById = createAsyncThunk(action.getById, async (parameter: CounselVo) => {
  return await axios.then().getById(parameter)
})
export const alterCounselById = createAsyncThunk(action.alterById, async (parameter: CounselVo) => {
  return await axios.then().alterById(parameter)
})
export const delCounselById = createAsyncThunk(action.delById, async (parameter: CounselVo) => {
  return await axios.then().delById(parameter)
})

import { createAsyncThunk } from '@reduxjs/toolkit'
import { DormantAxios as axios } from './dormant-axios'
import { DormantVo } from 'app/customers/mo/dormant-mo/dormant-vo'
import { DormantAction as action, DormantStrategy as strategy } from './dormant-union'

export const addDormant = createAsyncThunk(action.addOne, (parameter: DormantVo) => axios.then().addOne(parameter))
export const getAllDormants = createAsyncThunk(action.getAll, (parameter?: DormantVo) => axios.then().getAll(parameter))
export const getDormantsBy = createAsyncThunk(action.getBy, (parameter: DormantVo) => axios.then().getBy(parameter))
export const getDormantById = createAsyncThunk(action.getById, async (parameter: DormantVo) => {
  return await axios.then().getById(parameter)
})
export const alterDormantById = createAsyncThunk(action.alterById, async (parameter: DormantVo) => {
  return await axios.then().alterById(parameter)
})
export const delDormantById = createAsyncThunk(action.delById, async (parameter: DormantVo) => {
  return await axios.then().delById(parameter)
})

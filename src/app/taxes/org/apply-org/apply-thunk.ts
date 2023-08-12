import { createAsyncThunk } from '@reduxjs/toolkit'
import { ApplyAxios as axios } from './apply-axios'
import { ApplyVo } from 'app/taxes/mo/apply-mo/apply-vo'
import { ApplyAction as action, ApplyStrategy as strategy } from './apply-union'

export const addApply = createAsyncThunk(action.addOne, (parameter: ApplyVo) => axios.then().addOne(parameter))
export const getAllApplies = createAsyncThunk(action.getAll, (parameter?: ApplyVo) => axios.then().getAll(parameter))
export const getAppliesBy = createAsyncThunk(action.getBy, (parameter: ApplyVo) => axios.then().getBy(parameter))
export const getApplyById = createAsyncThunk(action.getById, async (parameter: ApplyVo) => {
  return await axios.then().getById(parameter)
})
export const alterApplyById = createAsyncThunk(action.alterById, async (parameter: ApplyVo) => {
  return await axios.then().alterById(parameter)
})
export const delApplyById = createAsyncThunk(action.delById, async (parameter: ApplyVo) => {
  return await axios.then().delById(parameter)
})

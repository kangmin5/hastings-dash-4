import { createAsyncThunk } from '@reduxjs/toolkit'
import { SlipAxios as axios } from './slip-axios'
import { SlipVo } from 'app/taxes/mo/slip-mo/slip-vo'
import { SlipAction as action, SlipStrategy as strategy } from './slip-union'

export const addSlip = createAsyncThunk(action.addOne, (parameter: SlipVo) => axios.then().addOne(parameter))
export const getAllSlips = createAsyncThunk(action.getAll, (parameter?: SlipVo) => axios.then().getAll(parameter))
export const getSlipsBy = createAsyncThunk(action.getBy, (parameter: SlipVo) => axios.then().getBy(parameter))
export const getSlipById = createAsyncThunk(action.getById, async (parameter: SlipVo) => {
  return await axios.then().getById(parameter)
})
export const alterSlipById = createAsyncThunk(action.alterById, async (parameter: SlipVo) => {
  return await axios.then().alterById(parameter)
})
export const delSlipById = createAsyncThunk(action.delById, async (parameter: SlipVo) => {
  return await axios.then().delById(parameter)
})

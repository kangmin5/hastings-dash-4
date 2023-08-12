import { createAsyncThunk } from '@reduxjs/toolkit'
import { UnshipAxios as axios } from './unship-axios'
import { UnshipVo } from 'app/deliveries/mo/unship-mo/unship-vo'
import { UnshipAction as action, UnshipStrategy as strategy } from './unship-union'

export const addUnship = createAsyncThunk(action.addOne, (parameter: UnshipVo) => axios.then().addOne(parameter))
export const getAllUnship = createAsyncThunk(action.getAll, (parameter?: UnshipVo) => axios.then().getAll(parameter))
export const getUnshipBy = createAsyncThunk(action.getBy, (parameter: UnshipVo) => axios.then().getBy(parameter))
export const getUnshipById = createAsyncThunk(action.getById, async (parameter: UnshipVo) => {
  return await axios.then().getById(parameter)
})
export const alterUnshipById = createAsyncThunk(action.alterById, async (parameter: UnshipVo) => {
  return await axios.then().alterById(parameter)
})
export const delUnshipById = createAsyncThunk(action.delById, async (parameter: UnshipVo) => {
  return await axios.then().delById(parameter)
})

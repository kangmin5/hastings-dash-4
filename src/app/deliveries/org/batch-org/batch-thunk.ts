import { createAsyncThunk } from '@reduxjs/toolkit'
import { BatchAxios as axios } from './batch-axios'
import { BatchVo } from 'app/deliveries/mo/batch-mo/batch-vo'
import { BatchAction as action, BatchStrategy as strategy } from './batch-union'

export const addBatch = createAsyncThunk(action.addOne, (parameter: BatchVo) => axios.then().addOne(parameter))
export const getAllBatches = createAsyncThunk(action.getAll, (parameter?: BatchVo) => axios.then().getAll(parameter))
export const getBatchesBy = createAsyncThunk(action.getBy, (parameter: BatchVo) => axios.then().getBy(parameter))
export const getBatchById = createAsyncThunk(action.getById, async (parameter: BatchVo) => {
  return await axios.then().getById(parameter)
})
export const alterBatchById = createAsyncThunk(action.alterById, async (parameter: BatchVo) => {
  return await axios.then().alterById(parameter)
})
export const delBatchById = createAsyncThunk(action.delById, async (parameter: BatchVo) => {
  return await axios.then().delById(parameter)
})

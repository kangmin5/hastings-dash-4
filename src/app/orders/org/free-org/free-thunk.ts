import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { FreeAxios as axios } from './free-axios'
import { FreeAction as action } from './free-union'
import { FreeVo } from '../../mo/free-mo/free-vo'
import { FreeDao as dao } from './free-dao'

export const addFree = createAsyncThunk(action.addOne, async (parameter: FreeVo) => {
  return await axios.then().addOne(parameter)
})
export const getAllFrees = createAsyncThunk(action.getAll, async () => {
  return await axios.then().getAll(undefined)
})
export const getFreesBy = createAsyncThunk(action.getBy, async (parameter: FreeVo) => {
  return await axios.then().getBy(parameter)
})
export const getFreeById = createAsyncThunk(action.getById, async (parameter: FreeVo) => {
  return await axios.then().getById(parameter)
})
export const alterFreeById = createAsyncThunk(action.alterById, async (parameter: FreeVo) => {
  return await axios.then().alterById(parameter)
})
export const delFreeById = createAsyncThunk(action.delById, async (parameter: FreeVo) => {
  return await axios.then().delById(parameter)
})
export const hasFreeNo = createAsyncThunk(action.hasFreeNo, async (parameter: string) => {
  return await axios.then().hasFreeNo(parameter)
})

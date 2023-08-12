import { createAsyncThunk } from '@reduxjs/toolkit'
import { AskAxios as axios } from './ask-axios'
import { AskVo } from 'app/products/mo/ask-mo/ask-vo'
import { AskAction as action, AskStrategy as strategy } from './ask-union'

export const addAsk = createAsyncThunk(action.addOne, (parameter: AskVo) => axios.then().addOne(parameter))
export const getAllAsks = createAsyncThunk(action.getAll, (parameter?: AskVo) => axios.then().getAll(parameter))
export const getAsksBy = createAsyncThunk(action.getBy, (parameter: AskVo) => axios.then().getBy(parameter))
export const getAskById = createAsyncThunk(action.getById, async (parameter: AskVo) => {
  return await axios.then().getById(parameter)
})
export const alterAskById = createAsyncThunk(action.alterById, async (parameter: AskVo) => {
  return await axios.then().alterById(parameter)
})
export const delAskById = createAsyncThunk(action.delById, async (parameter: AskVo) => {
  return await axios.then().delById(parameter)
})

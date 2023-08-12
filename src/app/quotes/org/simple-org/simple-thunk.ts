import { createAsyncThunk } from '@reduxjs/toolkit'
import { SimpleAxios as axios } from './simple-axios'
import { SimpleVo } from 'app/quotes/mo/simple-mo/simple-vo'
import { SimpleAction as action, SimpleStrategy as strategy } from './simple-union'

export const addSimple = createAsyncThunk(action.addOne, (parameter: SimpleVo) => axios.then().addOne(parameter))
export const getAllSimples = createAsyncThunk(action.getAll, (parameter?: SimpleVo) => axios.then().getAll(parameter))
export const getSimplesBy = createAsyncThunk(action.getBy, (parameter: SimpleVo) => axios.then().getBy(parameter))
export const getSimpleById = createAsyncThunk(action.getById, async (parameter: SimpleVo) => {
  return await axios.then().getById(parameter)
})
export const alterSimpleById = createAsyncThunk(action.alterById, async (parameter: SimpleVo) => {
  return await axios.then().alterById(parameter)
})
export const delSimpleById = createAsyncThunk(action.delById, async (parameter: SimpleVo) => {
  return await axios.then().delById(parameter)
})

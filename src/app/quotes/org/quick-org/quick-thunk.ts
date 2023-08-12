import { createAsyncThunk } from '@reduxjs/toolkit'
import { QuickAxios as axios } from './quick-axios'
import { QuickVo } from 'app/quotes/mo/quick-mo/quick-vo'
import { QuickAction as action, QuickStrategy as strategy } from './quick-union'

export const addQuick = createAsyncThunk(action.addOne, (parameter: QuickVo) => axios.then().addOne(parameter))
export const getAllQuicks = createAsyncThunk(action.getAll, (parameter?: QuickVo) => axios.then().getAll(parameter))
export const getQuicksBy = createAsyncThunk(action.getBy, (parameter: QuickVo) => axios.then().getBy(parameter))
export const getQuickById = createAsyncThunk(action.getById, async (parameter: QuickVo) => {
  return await axios.then().getById(parameter)
})
export const alterQuickById = createAsyncThunk(action.alterById, async (parameter: QuickVo) => {
  return await axios.then().alterById(parameter)
})
export const delQuickById = createAsyncThunk(action.delById, async (parameter: QuickVo) => {
  return await axios.then().delById(parameter)
})

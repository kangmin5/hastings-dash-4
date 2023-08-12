import { createAsyncThunk } from '@reduxjs/toolkit'
import { QuickEntryAxios as axios } from './quick-entry-axios'
import { QuickEntryVo } from 'app/quotes/mo/quick-entry-mo/quick-entry-vo'
import { QuickEntryAction as action, QuickEntryStrategy as strategy } from './quick-entry-union'

export const addQuickEntry = createAsyncThunk(action.addOne, (parameter: QuickEntryVo) => axios.then().addOne(parameter))
export const getAllQuickEntries = createAsyncThunk(action.getAll, (parameter?: QuickEntryVo) => axios.then().getAll(parameter))
export const getQuickEntriesBy = createAsyncThunk(action.getBy, (parameter: QuickEntryVo) => axios.then().getBy(parameter))
export const getQuickEntryById = createAsyncThunk(action.getById, async (parameter: QuickEntryVo) => {
  return await axios.then().getById(parameter)
})
export const alterQuickEntryById = createAsyncThunk(action.alterById, async (parameter: QuickEntryVo) => {
  return await axios.then().alterById(parameter)
})
export const delQuickEntryById = createAsyncThunk(action.delById, async (parameter: QuickEntryVo) => {
  return await axios.then().delById(parameter)
})

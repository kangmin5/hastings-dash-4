import { createAsyncThunk } from '@reduxjs/toolkit'
import { FaqAxios as axios } from './faq-axios'
import { FaqVo } from 'app/boards/mo/faq-mo/faq-vo'
import { FaqAction as action, FaqStrategy as strategy } from './faq-union'

export const addFaq = createAsyncThunk(action.addOne, (parameter: FaqVo) => axios.then().addOne(parameter))
export const getAllFaqs = createAsyncThunk(action.getAll, (parameter?: FaqVo) => axios.then().getAll(parameter))
export const getFaqsBy = createAsyncThunk(action.getBy, (parameter: FaqVo) => axios.then().getBy(parameter))
export const getFaqById = createAsyncThunk(action.getById, async (parameter: FaqVo) => {
  return await axios.then().getById(parameter)
})
export const alterFaqById = createAsyncThunk(action.alterById, async (parameter: FaqVo) => {
  return await axios.then().alterById(parameter)
})
export const delFaqById = createAsyncThunk(action.delById, async (parameter: FaqVo) => {
  return await axios.then().delById(parameter)
})

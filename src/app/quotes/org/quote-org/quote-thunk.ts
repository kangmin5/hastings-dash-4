import { createAsyncThunk } from '@reduxjs/toolkit'
import { QuoteAxios as axios } from './quote-axios'
import { QuoteVo } from 'app/quotes/mo/quote-mo/quote-vo'
import { QuoteAction as action, QuoteStrategy as strategy } from './quote-union'

export const addQuote = createAsyncThunk(action.addOne, (parameter: QuoteVo) => axios.then().addOne(parameter))
export const getAllQuotes = createAsyncThunk(action.getAll, (parameter?: QuoteVo) => axios.then().getAll(parameter))
export const getQuotesBy = createAsyncThunk(action.getBy, (parameter: QuoteVo) => axios.then().getBy(parameter))
export const getQuoteById = createAsyncThunk(action.getById, async (parameter: QuoteVo) => {
  return await axios.then().getById(parameter)
})
export const alterQuoteById = createAsyncThunk(action.alterById, async (parameter: QuoteVo) => {
  return await axios.then().alterById(parameter)
})
export const delQuoteById = createAsyncThunk(action.delById, async (parameter: QuoteVo) => {
  return await axios.then().delById(parameter)
})

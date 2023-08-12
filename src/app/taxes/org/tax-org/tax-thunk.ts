import { createAsyncThunk } from '@reduxjs/toolkit'
import { TaxAxios as axios } from './tax-axios'
import { TaxVo } from 'app/taxes/mo/tax-bill-mo/tax-bill-vo'
import { TaxAction as action, TaxStrategy as strategy } from './tax-union'

export const addTax = createAsyncThunk(action.addOne, (parameter: TaxVo) => axios.then().addOne(parameter))
export const getAllTaxes = createAsyncThunk(action.getAll, (parameter?: TaxVo) => axios.then().getAll(parameter))
export const getTaxesBy = createAsyncThunk(action.getBy, (parameter: TaxVo) => axios.then().getBy(parameter))
export const getTaxById = createAsyncThunk(action.getById, async (parameter: TaxVo) => {
  return await axios.then().getById(parameter)
})
export const alterTaxById = createAsyncThunk(action.alterById, async (parameter: TaxVo) => {
  return await axios.then().alterById(parameter)
})
export const delTaxById = createAsyncThunk(action.delById, async (parameter: TaxVo) => {
  return await axios.then().delById(parameter)
})

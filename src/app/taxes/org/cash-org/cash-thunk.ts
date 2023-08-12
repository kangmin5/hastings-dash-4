import { createAsyncThunk } from '@reduxjs/toolkit'
import { CashAxios as axios } from './cash-axios'
import { CashVo } from 'app/taxes/mo/cash-mo/cash-vo'
import { CashAction as action, CashStrategy as strategy } from './cash-union'

export const addCash = createAsyncThunk(action.addOne, (parameter: CashVo) => axios.then().addOne(parameter))
export const getAllCashes = createAsyncThunk(action.getAll, (parameter?: CashVo) => axios.then().getAll(parameter))
export const getCashesBy = createAsyncThunk(action.getBy, (parameter: CashVo) => axios.then().getBy(parameter))
export const getCashById = createAsyncThunk(action.getById, async (parameter: CashVo) => {
  return await axios.then().getById(parameter)
})
export const alterCashById = createAsyncThunk(action.alterById, async (parameter: CashVo) => {
  return await axios.then().alterById(parameter)
})
export const delCashById = createAsyncThunk(action.delById, async (parameter: CashVo) => {
  return await axios.then().delById(parameter)
})

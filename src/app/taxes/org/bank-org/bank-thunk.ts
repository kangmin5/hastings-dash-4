import { createAsyncThunk } from '@reduxjs/toolkit'
import { BankAxios as axios } from './bank-axios'
import { BankVo } from 'app/taxes/mo/bank-mo/bank-vo'
import { BankAction as action, BankStrategy as strategy } from './bank-union'

export const addBank = createAsyncThunk(action.addOne, (parameter: BankVo) => axios.then().addOne(parameter))
export const getAllBanks = createAsyncThunk(action.getAll, (parameter?: BankVo) => axios.then().getAll(parameter))
export const getBanksBy = createAsyncThunk(action.getBy, (parameter: BankVo) => axios.then().getBy(parameter))
export const getBankById = createAsyncThunk(action.getById, async (parameter: BankVo) => {
  return await axios.then().getById(parameter)
})
export const alterBankById = createAsyncThunk(action.alterById, async (parameter: BankVo) => {
  return await axios.then().alterById(parameter)
})
export const delBankById = createAsyncThunk(action.delById, async (parameter: BankVo) => {
  return await axios.then().delById(parameter)
})

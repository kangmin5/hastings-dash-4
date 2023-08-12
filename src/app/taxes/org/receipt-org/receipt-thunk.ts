import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { ReceiptVo } from 'app/taxes/mo/receipt-mo/receipt-vo'
import { ReceiptAxios as axios } from './receipt-axios'
import { ReceiptAction as action } from './receipt-union'

export const addReceipt = createAsyncThunk(action.addOne, async (parameter: ReceiptVo) => {
  return await axios.then().addOne(parameter)
})
export const getAllReceiptApplies = createAsyncThunk(action.getAll, async (parameter: ReceiptVo) => {
  return await axios.then().getAll(parameter)
})
export const getReceiptAppliesBy = createAsyncThunk(action.getBy, async (parameter: ReceiptVo) => {
  return await axios.then().getBy(parameter)
})
export const getReceiptById = createAsyncThunk(action.getById, async (parameter: ReceiptVo) => {
  return await axios.then().getAll(parameter)
})
export const alterReceiptById = createAsyncThunk(action.alterById, async (parameter: ReceiptVo) => {
  return await axios.then().alterById(parameter)
})
export const delReceiptById = createAsyncThunk(action.delById, async (parameter: ReceiptVo) => {
  return await axios.then().delById(parameter)
})

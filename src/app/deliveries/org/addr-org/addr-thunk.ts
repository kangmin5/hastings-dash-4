import { createAsyncThunk } from '@reduxjs/toolkit'
import { AddrAxios as axios } from './addr-axios'
import { AddrVo } from 'app/deliveries/mo/addr-mo/addr-vo'
import { AddrAction as action, AddrStrategy as strategy } from './addr-union'

export const addAddr = createAsyncThunk(action.addOne, (parameter: AddrVo) => axios.then().addOne(parameter))
export const getAllAddrs = createAsyncThunk(action.getAll, (parameter?: AddrVo) => axios.then().getAll(parameter))
export const getAddrsBy = createAsyncThunk(action.getBy, (parameter: AddrVo) => axios.then().getBy(parameter))
export const getAddrById = createAsyncThunk(action.getById, async (parameter: AddrVo) => {
  return await axios.then().getById(parameter)
})
export const alterAddrById = createAsyncThunk(action.alterById, async (parameter: AddrVo) => {
  return await axios.then().alterById(parameter)
})
export const delAddrById = createAsyncThunk(action.delById, async (parameter: AddrVo) => {
  return await axios.then().delById(parameter)
})

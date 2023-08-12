import { createAsyncThunk } from '@reduxjs/toolkit'
import { TunnelAxios as axios } from './tunnel-axios'
import { TunnelVo } from 'app/customers/mo/tunnel-mo/tunnel-vo'
import { TunnelAction as action, TunnelStrategy as strategy } from './tunnel-union'

export const addTunnel = createAsyncThunk(action.addOne, (parameter: TunnelVo) => axios.then().addOne(parameter))
export const getAllTunnels = createAsyncThunk(action.getAll, (parameter?: TunnelVo) => axios.then().getAll(parameter))
export const getTunnelsBy = createAsyncThunk(action.getBy, (parameter: TunnelVo) => axios.then().getBy(parameter))
export const getTunnelById = createAsyncThunk(action.getById, async (parameter: TunnelVo) => {
  return await axios.then().getById(parameter)
})
export const alterTunnelById = createAsyncThunk(action.alterById, async (parameter: TunnelVo) => {
  return await axios.then().alterById(parameter)
})
export const delTunnelById = createAsyncThunk(action.delById, async (parameter: TunnelVo) => {
  return await axios.then().delById(parameter)
})

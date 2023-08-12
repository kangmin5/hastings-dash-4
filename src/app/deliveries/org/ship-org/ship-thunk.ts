import { createAsyncThunk } from '@reduxjs/toolkit'
import { ShipAxios as axios } from './ship-axios'
import { ShipVo } from 'app/deliveries/mo/ship-mo/ship-vo'
import { ShipAction as action, ShipStrategy as strategy } from './ship-union'

export const addShip = createAsyncThunk(action.addOne, (parameter: ShipVo) => axios.then().addOne(parameter))
export const getAllShips = createAsyncThunk(action.getAll, (parameter?: ShipVo) => axios.then().getAll(parameter))
export const getDeliveriesBy = createAsyncThunk(action.getBy, (parameter: ShipVo) => axios.then().getBy(parameter))
export const getShipById = createAsyncThunk(action.getById, async (parameter: ShipVo) => {
  return await axios.then().getById(parameter)
})
export const alterShipById = createAsyncThunk(action.alterById, async (parameter: ShipVo) => {
  return await axios.then().alterById(parameter)
})
export const delShipById = createAsyncThunk(action.delById, async (parameter: ShipVo) => {
  return await axios.then().delById(parameter)
})

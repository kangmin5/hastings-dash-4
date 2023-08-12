import { createAsyncThunk } from '@reduxjs/toolkit'
import { CourierAxios as axios } from './courier-axios'
import { CourierVo } from 'app/deliveries/mo/courier-mo/courier-vo'
import { CourierAction as action, CourierStrategy as strategy } from './courier-union'

export const addCourier = createAsyncThunk(action.addOne, (parameter: CourierVo) => axios.then().addOne(parameter))
export const getAllCouriers = createAsyncThunk(action.getAll, (parameter?: CourierVo) => axios.then().getAll(parameter))
export const getCouriersBy = createAsyncThunk(action.getBy, (parameter: CourierVo) => axios.then().getBy(parameter))
export const getCourierById = createAsyncThunk(action.getById, async (parameter: CourierVo) => {
  return await axios.then().getById(parameter)
})
export const alterCourierById = createAsyncThunk(action.alterById, async (parameter: CourierVo) => {
  return await axios.then().alterById(parameter)
})
export const delCourierById = createAsyncThunk(action.delById, async (parameter: CourierVo) => {
  return await axios.then().delById(parameter)
})

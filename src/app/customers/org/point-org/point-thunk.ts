import { createAsyncThunk } from '@reduxjs/toolkit'
import { PointAxios as axios } from './point-axios'
import { PointVo } from 'app/customers/mo/point-mo/point-vo'
import { PointAction as action, PointStrategy as strategy } from './point-union'
import { CustomerVo } from 'app/customers/mo/customer-mo/customer-vo'

export const addPoint = createAsyncThunk(action.addOne, (parameter: PointVo) => axios.then().addOne(parameter))
export const getAllPoints = createAsyncThunk(action.getAll, (parameter?: PointVo) => axios.then().getAll(parameter))
export const getPointsBy = createAsyncThunk(action.getBy, (parameter: PointVo) => axios.then().getBy(parameter))
export const getPointsByUser = createAsyncThunk(action.getByUser, (parameter: CustomerVo) =>
  axios.then().getByUser(parameter)
)
export const getPointById = createAsyncThunk(action.getById, async (parameter: PointVo) => {
  return await axios.then().getById(parameter)
})
export const alterPointById = createAsyncThunk(action.alterById, async (parameter: PointVo) => {
  return await axios.then().alterById(parameter)
})
export const delPointById = createAsyncThunk(action.delById, async (parameter: PointVo) => {
  return await axios.then().delById(parameter)
})

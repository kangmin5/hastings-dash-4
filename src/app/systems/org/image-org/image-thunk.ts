import { createAsyncThunk } from '@reduxjs/toolkit'
import { ImageAxios as axios } from './image-axios'
import { ImageVo } from 'app/systems/mo/image-mo/image-vo'
import { ImageAction as action, ImageStrategy as strategy } from './image-union'

export const addImage = createAsyncThunk(action.addOne, (parameter: ImageVo) => axios.then().addOne(parameter))
export const getAllCompanies = createAsyncThunk(action.getAll, (parameter?: ImageVo) =>
  axios.then().getAll(parameter)
)
export const getCompaniesBy = createAsyncThunk(action.getBy, (parameter: ImageVo) => axios.then().getBy(parameter))
export const getImageById = createAsyncThunk(action.getById, async (parameter: ImageVo) => {
  return await axios.then().getById(parameter)
})
export const alterImageById = createAsyncThunk(action.alterById, async (parameter: ImageVo) => {
  return await axios.then().alterById(parameter)
})
export const delImageById = createAsyncThunk(action.delById, async (parameter: ImageVo) => {
  return await axios.then().delById(parameter)
})

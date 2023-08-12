import { createAsyncThunk } from '@reduxjs/toolkit'
import { CatAxios as axios } from './cat-axios'
import { CatVo } from 'app/products/mo/cat-mo/cat-vo'
import { CatAction as action, CatStrategy as strategy } from './cat-union'

export const addCat = createAsyncThunk(action.addOne, (parameter: CatVo) => axios.then().addOne(parameter))
export const getAllCategories = createAsyncThunk(action.getAll, (parameter?: CatVo) => axios.then().getAll(parameter))
export const getCategoriesBy = createAsyncThunk(action.getBy, (parameter: CatVo) => axios.then().getBy(parameter))
export const getCatById = createAsyncThunk(action.getById, async (parameter: CatVo) => {
  return await axios.then().getById(parameter)
})
export const alterCatById = createAsyncThunk(action.alterById, async (parameter: CatVo) => {
  return await axios.then().alterById(parameter)
})
export const delCatById = createAsyncThunk(action.delById, async (parameter: CatVo) => {
  return await axios.then().delById(parameter)
})

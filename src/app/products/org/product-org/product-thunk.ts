import { createAsyncThunk } from '@reduxjs/toolkit'
import { ProductAxios as axios } from './product-axios'
import { ProductVo } from 'app/products/mo/product-mo/product-vo'
import { ProductAction as action, ProductStrategy as strategy } from './product-union'

export const addProduct = createAsyncThunk(action.addOne, (parameter: ProductVo) => axios.then().addOne(parameter))
export const getAllProducts = createAsyncThunk(action.getAll, (parameter?: ProductVo) => axios.then().getAll(parameter))
export const getProductsBy = createAsyncThunk(action.getBy, (parameter: ProductVo) => axios.then().getBy(parameter))
export const getProductsByMain = createAsyncThunk(action.getByMain, (parameter: ProductVo) =>
  axios.then().getByMain(parameter)
)
export const getProductById = createAsyncThunk(action.getById, async (parameter: ProductVo) => {
  return await axios.then().getById(parameter)
})
export const alterProductById = createAsyncThunk(action.alterById, async (parameter: ProductVo) => {
  return await axios.then().alterById(parameter)
})
export const delProductById = createAsyncThunk(action.delById, async (parameter: ProductVo) => {
  return await axios.then().delById(parameter)
})

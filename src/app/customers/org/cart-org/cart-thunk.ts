import { createAsyncThunk } from '@reduxjs/toolkit'
import { CartAxios as axios } from './cart-axios'
import { CartVo } from 'app/customers/mo/cart-mo/cart-vo'
import { CartAction as action, CartStrategy as strategy } from './cart-union'
import { CustomerVo } from 'app/customers/mo/customer-mo/customer-vo'

export const addCart = createAsyncThunk(action.addOne, (parameter: CartVo) => axios.then().addOne(parameter))
export const getAllCarts = createAsyncThunk(action.getAll, (parameter?: CartVo) => axios.then().getAll(parameter))
export const getCartsBy = createAsyncThunk(action.getBy, (parameter: CartVo) => axios.then().getBy(parameter))
export const getCartsByUser = createAsyncThunk(action.getByUser, (parameter: CustomerVo) => axios.then().getByUser(parameter))
export const getCartById = createAsyncThunk(action.getById, async (parameter: CartVo) => {
  return await axios.then().getById(parameter)
})
export const alterCartById = createAsyncThunk(action.alterById, async (parameter: CartVo) => {
  return await axios.then().alterById(parameter)
})
export const delCartById = createAsyncThunk(action.delById, async (parameter: CartVo) => {
  return await axios.then().delById(parameter)
})

import { createAsyncThunk } from '@reduxjs/toolkit'
import { AttrAxios as axios } from './attr-axios'
import { AttrVo } from 'app/products/mo/attr-mo/attr-vo'
import { AttrAction as action, AttrStrategy as strategy } from './attr-union'

export const addAttr = createAsyncThunk(action.addOne, (parameter: AttrVo) => axios.then().addOne(parameter))
export const getAllAttrs = createAsyncThunk(action.getAll, (parameter?: AttrVo) => axios.then().getAll(parameter))
export const getAttrsBy = createAsyncThunk(action.getBy, (parameter: AttrVo) => axios.then().getBy(parameter))
export const getAttrById = createAsyncThunk(action.getById, async (parameter: AttrVo) => {
  return await axios.then().getById(parameter)
})
export const alterAttrById = createAsyncThunk(action.alterById, async (parameter: AttrVo) => {
  return await axios.then().alterById(parameter)
})
export const delAttrById = createAsyncThunk(action.delById, async (parameter: AttrVo) => {
  return await axios.then().delById(parameter)
})

import { createAsyncThunk } from '@reduxjs/toolkit'
import { BizAxios as axios } from './biz-axios'
import { BizVo } from 'app/authors/mo/biz-mo/biz-vo'
import { BizAction as action, BizStrategy as strategy } from './biz-union'

export const addBiz = createAsyncThunk(action.addOne, (parameter: BizVo) => axios.then().addOne(parameter))
export const getAllBizMembers = createAsyncThunk(action.getAll, (parameter?: BizVo) => axios.then().getAll(parameter))
export const getBizMembersBy = createAsyncThunk(action.getBy, (parameter: BizVo) => axios.then().getBy(parameter))
export const getBizById = createAsyncThunk(action.getById, async (parameter: BizVo) => {
  return await axios.then().getById(parameter)
})
export const alterBizById = createAsyncThunk(action.alterById, async (parameter: BizVo) => {
  return await axios.then().alterById(parameter)
})
export const delBizById = createAsyncThunk(action.delById, async (parameter: BizVo) => {
  return await axios.then().delById(parameter)
})
export const login = createAsyncThunk(action.login, async (parameter: BizVo) => {
  return await axios.then().login(parameter)
})

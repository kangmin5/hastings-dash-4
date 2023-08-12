import { createAsyncThunk } from '@reduxjs/toolkit'
import { MemberAxios as axios } from './member-axios'
import { MemberVo } from 'app/customers/mo/member-mo/member-vo'
import { MemberAction as action, MemberStrategy as strategy } from './member-union'

export const addMember = createAsyncThunk(action.addOne, (parameter: MemberVo) => axios.then().addOne(parameter))
export const getAllMembers = createAsyncThunk(action.getAll, (parameter?: MemberVo) => axios.then().getAll(parameter))
export const getMembersBy = createAsyncThunk(action.getBy, (parameter: MemberVo) => axios.then().getBy(parameter))
export const getMemberById = createAsyncThunk(action.getById, async (parameter: MemberVo) => {
  return await axios.then().getById(parameter)
})
export const alterMemberById = createAsyncThunk(action.alterById, async (parameter: MemberVo) => {
  return await axios.then().alterById(parameter)
})
export const delMemberById = createAsyncThunk(action.delById, async (parameter: MemberVo) => {
  return await axios.then().delById(parameter)
})

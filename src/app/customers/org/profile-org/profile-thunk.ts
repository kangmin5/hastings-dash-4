import { createAsyncThunk } from '@reduxjs/toolkit'
import { ProfileAxios as axios } from './profile-axios'
import { ProfileVo } from 'app/customers/mo/profile-mo/profile-vo'
import { ProfileAction as action, ProfileStrategy as strategy } from './profile-union'

export const addProfile = createAsyncThunk(action.addOne, (parameter: ProfileVo) => axios.then().addOne(parameter))
export const getAllProfiles = createAsyncThunk(action.getAll, (parameter?: ProfileVo) => axios.then().getAll(parameter))
export const getProfilesBy = createAsyncThunk(action.getBy, (parameter: ProfileVo) => axios.then().getBy(parameter))
export const getProfileById = createAsyncThunk(action.getById, async (parameter: ProfileVo) => {
  return await axios.then().getById(parameter)
})
export const alterProfileById = createAsyncThunk(action.alterById, async (parameter: ProfileVo) => {
  return await axios.then().alterById(parameter)
})
export const delProfileById = createAsyncThunk(action.delById, async (parameter: ProfileVo) => {
  return await axios.then().delById(parameter)
})

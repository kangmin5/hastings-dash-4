import { createAsyncThunk } from '@reduxjs/toolkit'
import { EmployAxios as axios } from './employ-axios'
import { EmployAtom } from './employ-vo'
import { EmployAction as action, EmployStrategy as strategy } from './employ-union'

export const addEmploy = createAsyncThunk(action.addOne, (parameter: EmployAtom) => axios.then().addOne(parameter))
export const getAllEmploys = createAsyncThunk(action.getAll, (parameter?: EmployAtom) => axios.then().getAll(parameter))
export const getEmploysBy = createAsyncThunk(action.getBy, (parameter: EmployAtom) => axios.then().getBy(parameter))
export const getEmployById = createAsyncThunk(action.getById, async (parameter: EmployAtom) => {
  return await axios.then().getById(parameter)
})
export const alterEmployById = createAsyncThunk(action.alterById, async (parameter: EmployAtom) => {
  return await axios.then().alterById(parameter)
})
export const delEmployById = createAsyncThunk(action.delById, async (parameter: EmployAtom) => {
  return await axios.then().delById(parameter)
})

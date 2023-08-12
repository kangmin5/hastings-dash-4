import { createAsyncThunk } from '@reduxjs/toolkit'
import { DepartAxios as axios } from './depart-axios'
import { DepartAtom } from './depart-vo'
import { DepartAction as action, DepartStrategy as strategy } from './depart-union'

export const addDepart = createAsyncThunk(action.addOne, (parameter: DepartAtom) => axios.then().addOne(parameter))
export const getAllDeparts = createAsyncThunk(action.getAll, (parameter?: DepartAtom) => axios.then().getAll(parameter))
export const getDepartsBy = createAsyncThunk(action.getBy, (parameter: DepartAtom) => axios.then().getBy(parameter))
export const getDepartById = createAsyncThunk(action.getById, async (parameter: DepartAtom) => {
  return await axios.then().getById(parameter)
})
export const alterDepartById = createAsyncThunk(action.alterById, async (parameter: DepartAtom) => {
  return await axios.then().alterById(parameter)
})
export const delDepartById = createAsyncThunk(action.delById, async (parameter: DepartAtom) => {
  return await axios.then().delById(parameter)
})

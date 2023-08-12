import { createAsyncThunk } from '@reduxjs/toolkit'
import { CompanyAxios as axios } from './company-axios'
import { CompanyVo } from 'app/systems/mo/company-mo/company-vo'
import { CompanyAction as action, CompanyStrategy as strategy } from './company-union'

export const addCompany = createAsyncThunk(action.addOne, (parameter: CompanyVo) => axios.then().addOne(parameter))
export const getAllCompanies = createAsyncThunk(action.getAll, (parameter?: CompanyVo) =>
  axios.then().getAll(parameter)
)
export const getCompaniesBy = createAsyncThunk(action.getBy, (parameter: CompanyVo) => axios.then().getBy(parameter))
export const getCompanyById = createAsyncThunk(action.getById, async (parameter: CompanyVo) => {
  return await axios.then().getById(parameter)
})
export const alterCompanyById = createAsyncThunk(action.alterById, async (parameter: CompanyVo) => {
  return await axios.then().alterById(parameter)
})
export const delCompanyById = createAsyncThunk(action.delById, async (parameter: CompanyVo) => {
  return await axios.then().delById(parameter)
})

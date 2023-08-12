import { createAsyncThunk } from '@reduxjs/toolkit'
import { InquiryAxios as axios } from './inquiry-axios'
import { InquiryVo } from 'app/boards/mo/inquiry-mo/inquiry-vo'
import { InquiryAction as action, InquiryStrategy as strategy } from './inquiry-union'

export const addInquiry = createAsyncThunk(action.addOne, (parameter: InquiryVo) => axios.then().addOne(parameter))
export const getAllInquiries = createAsyncThunk(action.getAll, (parameter?: InquiryVo) =>
  axios.then().getAll(parameter)
)
export const getInquiriesBy = createAsyncThunk(action.getBy, (parameter: InquiryVo) => axios.then().getBy(parameter))
export const getInquiriesByUser = createAsyncThunk(action.getByUser, (parameter: InquiryVo) => axios.then().getByUser(parameter))
export const getInquiryById = createAsyncThunk(action.getById, async (parameter: InquiryVo) => {
  return await axios.then().getById(parameter)
})
export const alterInquiryById = createAsyncThunk(action.alterById, async (parameter: InquiryVo) => {
  return await axios.then().alterById(parameter)
})
export const delInquiryById = createAsyncThunk(action.delById, async (parameter: InquiryVo) => {
  return await axios.then().delById(parameter)
})

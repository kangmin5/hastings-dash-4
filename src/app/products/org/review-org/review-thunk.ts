import { createAsyncThunk } from '@reduxjs/toolkit'
import { ReviewAxios as axios } from './review-axios'
import { ReviewVo } from 'app/products/mo/review-mo/review-vo'
import { ReviewAction as action, ReviewStrategy as strategy } from './review-union'
import { CustomerVo } from 'app/customers/mo/customer-mo/customer-vo'

export const addReview = createAsyncThunk(action.addOne, (parameter: ReviewVo) => axios.then().addOne(parameter))
export const getAllReviews = createAsyncThunk(action.getAll, (parameter?: ReviewVo) => axios.then().getAll(parameter))
export const getReviewsBy = createAsyncThunk(action.getBy, (parameter: ReviewVo) => axios.then().getBy(parameter))
export const getReviewsByUser = createAsyncThunk(action.getByUser, (parameter: CustomerVo) => axios.then().getByUser(parameter))
export const getReviewById = createAsyncThunk(action.getById, async (parameter: ReviewVo) => {
  return await axios.then().getById(parameter)
})
export const alterReviewById = createAsyncThunk(action.alterById, async (parameter: ReviewVo) => {
  return await axios.then().alterById(parameter)
})
export const delReviewById = createAsyncThunk(action.delById, async (parameter: ReviewVo) => {
  return await axios.then().delById(parameter)
})

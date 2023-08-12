import { createAsyncThunk } from '@reduxjs/toolkit'
import { NoticeAxios as ajax } from './notice-axios'
import { NoticeVo } from 'app/boards/mo/notice-mo/notice-vo'
import { NoticeAction as action, NoticeStrategy as strategy } from './notice-union'
import axios from 'axios'
import { NoticeUrl as url } from 'app/boards/org/notice-org/notice-union'
export const addNotice = createAsyncThunk(action.addOne, (parameter: NoticeVo) => ajax.then().addOne(parameter))
export const addNoticeImage = createAsyncThunk(action.addImage, 
(parameter: FormData) => {

  const addImage = 'http://3.34.85.184/'+url.addImage
  const auth = typeof window !== 'undefined' ? `Bearer ${window.localStorage.getItem('accessToken')}` : 'Bearer null'
  const res =  axios.post(addImage, parameter, {
    
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: auth
    }
  })

  return res
  
  
  // ajax.then().addImage(parameter)
})
export const getAllNotices = createAsyncThunk(action.getAll, (parameter?: NoticeVo) => ajax.then().getAll(parameter))
export const getNoticesBy = createAsyncThunk(action.getBy, (parameter: NoticeVo) => ajax.then().getBy(parameter))
export const getNoticeById = createAsyncThunk(action.getById, async (parameter: NoticeVo) => {
  return await ajax.then().getById(parameter)
})
export const alterNoticeById = createAsyncThunk(action.alterById, async (parameter: NoticeVo) => {
  return await ajax.then().alterById(parameter)
})
export const delNoticeById = createAsyncThunk(action.delById, async (parameter: NoticeVo) => {
  return await ajax.then().delById(parameter)
})

import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthorAxios as axios } from './author-axios'
import { AuthorVo } from 'app/authors/mo/author-mo/author-vo'
import { AuthorAction as action, AuthorStrategy as strategy } from './author-union'

export const addAuthor = createAsyncThunk(action.addOne, (parameter: AuthorVo) => axios.then().addOne(parameter))
export const getAllAuthors = createAsyncThunk(action.getAll, (parameter?: AuthorVo) => axios.then().getAll(parameter))
export const getAuthorsBy = createAsyncThunk(action.getBy, (parameter: AuthorVo) => axios.then().getBy(parameter))
export const getAuthorById = createAsyncThunk(action.getById, async (parameter: AuthorVo) => {
  return await axios.then().getById(parameter)
})
export const alterAuthorById = createAsyncThunk(action.alterById, async (parameter: AuthorVo) => {
  return await axios.then().alterById(parameter)
})
export const delAuthorById = createAsyncThunk(action.delById, async (parameter: AuthorVo) => {
  return await axios.then().delById(parameter)
})
export const login = createAsyncThunk(action.login, async (parameter: AuthorVo) => {
  return await axios.then().login(parameter)
})

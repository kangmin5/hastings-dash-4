import { createAsyncThunk } from '@reduxjs/toolkit'
import { CardAxios as axios } from './card-axios'
import { CardVo } from 'app/taxes/mo/card-mo/card-vo'
import { CardAction as action, CardStrategy as strategy } from './card-union'

export const addCard = createAsyncThunk(action.addOne, (parameter: CardVo) => axios.then().addOne(parameter))
export const getAllCards = createAsyncThunk(action.getAll, (parameter?: CardVo) => axios.then().getAll(parameter))
export const getCardsBy = createAsyncThunk(action.getBy, (parameter: CardVo) => axios.then().getBy(parameter))
export const getCardById = createAsyncThunk(action.getById, async (parameter: CardVo) => {
  return await axios.then().getById(parameter)
})
export const alterCardById = createAsyncThunk(action.alterById, async (parameter: CardVo) => {
  return await axios.then().alterById(parameter)
})
export const delCardById = createAsyncThunk(action.delById, async (parameter: CardVo) => {
  return await axios.then().delById(parameter)
})

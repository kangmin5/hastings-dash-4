import { createAsyncThunk } from '@reduxjs/toolkit'
import { BoardAxios as axios } from './board-axios'
import { BoardVo } from 'app/boards/mo/board-mo/board-vo'
import { BoardAction as action, BoardStrategy as strategy } from './board-union'

export const addBoard = createAsyncThunk(action.addOne, (parameter: BoardVo) => axios.then().addOne(parameter))
export const getAllBoards = createAsyncThunk(action.getAll, (parameter?: BoardVo) => axios.then().getAll(parameter))
export const getBoardsBy = createAsyncThunk(action.getBy, (parameter: BoardVo) => axios.then().getBy(parameter))
export const getBoardById = createAsyncThunk(action.getById, async (parameter: BoardVo) => {
  return await axios.then().getById(parameter)
})
export const alterBoardById = createAsyncThunk(action.alterById, async (parameter: BoardVo) => {
  return await axios.then().alterById(parameter)
})
export const delBoardById = createAsyncThunk(action.delById, async (parameter: BoardVo) => {
  return await axios.then().delById(parameter)
})

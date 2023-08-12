import { createAsyncThunk } from '@reduxjs/toolkit'
import { NoteAxios as axios } from './note-axios'
import { NoteVo } from 'app/customers/mo/note-mo/note-vo'
import { NoteAction as action, NoteStrategy as strategy } from './note-union'

export const addNote = createAsyncThunk(action.addOne, (parameter: NoteVo) => axios.then().addOne(parameter))
export const getAllNotes = createAsyncThunk(action.getAll, (parameter?: NoteVo) => axios.then().getAll(parameter))
export const getNotesBy = createAsyncThunk(action.getBy, (parameter: NoteVo) => axios.then().getBy(parameter))
export const getNoteById = createAsyncThunk(action.getById, async (parameter: NoteVo) => {
  return await axios.then().getById(parameter)
})
export const alterNoteById = createAsyncThunk(action.alterById, async (parameter: NoteVo) => {
  return await axios.then().alterById(parameter)
})
export const delNoteById = createAsyncThunk(action.delById, async (parameter: NoteVo) => {
  return await axios.then().delById(parameter)
})

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { FreeAxios } from './free-axios'
import { FreeAction as action } from './free-union'
import { FreeVo } from '../../mo/free-mo/free-vo'
import { FreeDao as dao } from './free-dao'
import {
  addFree,
  getAllFrees,
  getFreesBy,
  getFreeById,
  alterFreeById,
  delFreeById,
  hasFreeNo
} from './free-thunk'
import { saveHasFreeNo } from './free-reducer'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleDao as TD } from 'app/systems/org/trouble-org/trouble-dao'
import { TroubleAspect as TA } from 'app/systems/org/trouble-org/trouble-aspect'
interface FreeState {
  items: FreeVo[]
  hasItem: boolean
  hasMessage: string
}

const initialState: FreeState = {
  items: [],
  hasItem: false,
  hasMessage: ''
}

const FreeSlice = createSlice({
  name: `freeOrders`,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addFree.fulfilled, (state, { payload }) => {
        if (payload.data.code === '200') {
          dao.addOneSuccess(payload)
        }
      })
      .addCase(getAllFrees.fulfilled, (state, { payload }) => {
        if (payload.data.code === '200') {
          dao.getAllSuccess(payload)
        }
      })
      .addCase(getFreesBy.fulfilled, (state, { payload }) => {
        if (payload.data.code === '200') {
          dao.getBySuccess(payload)
        }
      })
      .addCase(getFreeById.fulfilled, (state, { payload }) => {
        if (payload.data.code === '200') {
          dao.getByIdSuccess(payload)
        }
      })
      .addCase(alterFreeById.fulfilled, (state, { payload }) => {
        if (payload.data.code === '200') {
          dao.alterByIdSuccess(payload)
        }
      })
      .addCase(delFreeById.fulfilled, (state, { payload }) => {
        if (payload.data.code === '200') {
          dao.delByIdSuccess(payload)
        }
      })
      .addCase(hasFreeNo.fulfilled, (state, { payload }) => {
        if (payload.data.code === '200') {
          saveHasFreeNo(payload.data.hasFreeNo)
        }
      })
  }
})

export const {} = FreeSlice.actions

export default FreeSlice.reducer

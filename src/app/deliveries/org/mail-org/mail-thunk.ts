// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

// ** Types
import { Dispatch } from 'redux'
import {
  MailType,
  UpdateMailLabelType,
  FetchMailParamsType,
  UpdateMailParamsType,
  PaginateMailParamsType
} from 'app/deliveries/mo/mail-mo/mail-vo'

interface ReduxType {
  getState: any
  dispatch: Dispatch<any>
}

// ** Fetch Mails
export const fetchMails = createAsyncThunk('appEmail/fetchMails', async (params: FetchMailParamsType) => {
  const response = await axios.get('/apps/email/emails', {
    params
  })

  return { ...response.data, filter: params }
})

// ** Get Current Mail
export const getCurrentMail = createAsyncThunk('appEmail/selectMail', async (id: number | string) => {
  const response = await axios.get('/apps/email/get-email', {
    params: {
      id
    }
  })

  return response.data
})

// ** Update Mail
export const updateMail = createAsyncThunk(
  'appEmail/updateMail',
  async (params: UpdateMailParamsType, { dispatch, getState }: ReduxType) => {
    const response = await axios.post('/apps/email/update-emails', {
      data: { emailIds: params.emailIds, dataToUpdate: params.dataToUpdate }
    })

    await dispatch(fetchMails(getState().email.filter))
    if (Array.isArray(params.emailIds)) {
      await dispatch(getCurrentMail(params.emailIds[0]))
    }

    return response.data
  }
)

// ** Update Mail Label
export const updateMailLabel = createAsyncThunk(
  'appEmail/updateMailLabel',
  async (params: UpdateMailLabelType, { dispatch, getState }: ReduxType) => {
    const response = await axios.post('/apps/email/update-emails-label', {
      data: { emailIds: params.emailIds, label: params.label }
    })

    await dispatch(fetchMails(getState().email.filter))

    if (Array.isArray(params.emailIds)) {
      await dispatch(getCurrentMail(params.emailIds[0]))
    }

    return response.data
  }
)

// ** Prev/Next Mails
export const paginateMail = createAsyncThunk('appEmail/paginateMail', async (params: PaginateMailParamsType) => {
  const response = await axios.get('/apps/email/paginate-email', { params })

  return response.data
})



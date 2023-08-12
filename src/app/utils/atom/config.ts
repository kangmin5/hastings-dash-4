import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import { POST_API_REDUCER_KEY, noticeApi } from 'app/utils/atoms/notice-atom/notice-api'
import dialogSlice from '../../../systems/organisms/modal-organism/modal-reducer'
import alertSlice from '../../valves/org/alert-org/alert-slice'
import paginationSlice from '../../organisms/page-organism/pagination-slice'

const logger = createLogger()

const reducers = {
  [dialogSlice.name]: dialogSlice.reducer,
  [alertSlice.name]: alertSlice.reducer,
  [paginationSlice.name]: paginationSlice.reducer,
  [POST_API_REDUCER_KEY]: noticeApi.reducer
}

const rootReducer = combineReducers<typeof reducers>(reducers)

const initialState = {}

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false
    }).concat([logger, noticeApi.middleware])
  },
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState,
  enhancers: defaultEnhancers => [...defaultEnhancers]
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store

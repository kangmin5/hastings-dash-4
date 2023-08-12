import { createSlice, PayloadAction  } from '@reduxjs/toolkit'

interface LnbState {
  selectedId: string,
  myPageId: string
}

const initialState: LnbState = {
    selectedId: '',
    myPageId: ''
}

const LnbReducer = createSlice({
  name: `lnb`,
  initialState,
  reducers: {
    saveSelectedId(state, action: PayloadAction<string>){
      state.selectedId = action.payload;
      window.localStorage.setItem('selectedId', action.payload);
      return state;
    },
    saveMyPageId(state, action: PayloadAction<string>){
      state.myPageId = action.payload;
      return state;
    },
  },
})

export const {saveSelectedId, saveMyPageId} = LnbReducer.actions;
export const lnbReducer = LnbReducer.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardVo } from 'app/taxes/mo/card-mo/card-vo'
interface CardState {
  item: CardVo
}
const initialState: CardState = {
  item: new CardVo()
}
const CardReducer = createSlice({
  name: `card`,
  initialState,
  reducers: {
    saveCard(state, action: PayloadAction<CardVo>) {
      state.item = action.payload
    }
  }
})

export const { saveCard } = CardReducer.actions
export const cardReducer = CardReducer.reducer

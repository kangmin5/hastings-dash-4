import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TroubleVo } from "./trouble-vo";
import { addTrouble, getAllTroubles, 
  getTroublesBy, getTroubleById, 
  alterTroubleById, delTroubleById } from './trouble-thunk'

interface TroubleState {
  items: TroubleVo[];

}

const initialState: TroubleState = {
  items: [],

};

const TroubleSlice = createSlice({
  name: `troubles`,
  initialState,
  reducers: {

  },
  extraReducers: builder => {

    builder.addCase(addTrouble.fulfilled, (state, {payload}) => {
     
    })
    .addCase(getAllTroubles.fulfilled, (state, {payload}) => {
      
    })
    .addCase(getTroublesBy.fulfilled, (state, {payload}) => {
      
    })

    .addCase(getTroubleById.fulfilled, (state, {payload}) => {
      
    })
    .addCase(alterTroubleById.fulfilled, (state, {payload}) => {
      
    })
    .addCase(delTroubleById.fulfilled, (state, {payload}) => {
      
    })
    
  },
});

export const {} = TroubleSlice.actions;
export default TroubleSlice.reducer;

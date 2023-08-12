import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { BuyAxios as axios } from "./buy-axios";
import { DealAtom } from "../../atom/deal-atom";
import { BuyFactory as factory } from "./buy-factory";
import { BuyAction as action, BuyStrategy as strategy } from "./buy-union";
import { BuyDao as dao } from "./buy-dao";
import {
  addBuy,
  getAllBuys,
  getBuysBy,
  getBuyById,
  alterBuyById,
  delBuyById,
} from "./buy-thunk";

interface BuyState {
  items: DealAtom[];
  hasItem: boolean;
  hasMessage: string;
}

const initialState: BuyState = {
  items: [],
  hasItem: false,
  hasMessage: "",
};

const BuySlice = createSlice({
  name: `buys`,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBuy.fulfilled, (state, { payload }) => {
        if (payload.data.code === "200") {
          dao.addOneSuccess(payload);
        }
      })
      .addCase(getAllBuys.fulfilled, (state, { payload }) => {
        if (payload.data.code !== "200") {
          // factory.create(strategy.allBuys).handle(state.items);
          if (payload.data.code === "200") {
          }
        }
      })
      .addCase(getBuysBy.fulfilled, (state, { payload }) => {
        if (payload.data.code === "200") {
        }
      })
      .addCase(getBuyById.fulfilled, (state, { payload }) => {
        if (payload.data.code === "200") {
        }
      })
      .addCase(alterBuyById.fulfilled, (state, { payload }) => {
        if (payload.data.code === "200") {
        }
      })
      .addCase(delBuyById.fulfilled, (state, { payload }) => {
        if (payload.data.code === "200") {
        }
      });
  },
});

export const {} = BuySlice.actions;

export default BuySlice.reducer;

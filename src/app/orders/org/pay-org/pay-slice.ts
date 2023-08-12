import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { PayAxios } from "./pay-axios";
import { PayAction as action } from "./pay-union";
import { PayVo } from "../../mo/pay-mo/pay-vo";
import { PayDao as dao } from "./pay-dao";
import {
  addPay,
  getAllPays,
  getPaysBy,
  getPayById,
  alterPayById,
  delPayById,
} from "./pay-thunk";
import { TroubleVo as TV } from "app/systems/org/trouble-org/trouble-vo";
import { TroubleDao as TD } from "app/systems/org/trouble-org/trouble-dao";
import { TroubleAspect as TA } from "app/systems/org/trouble-org/trouble-aspect";
interface PayState {
  items: PayVo[];
  hasItem: boolean;
  hasMessage: string;
}

const initialState: PayState = {
  items: [],
  hasItem: false,
  hasMessage: "",
};

const PaySlice = createSlice({
  name: `pays`,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPay.fulfilled, (state, { payload }) => {
        if (payload.data.code === "200") {
          dao.addOneSuccess( payload);
        }
      })
      .addCase(getAllPays.fulfilled, (state, { payload }) => {
        if (payload.data.code === "200") {
          console.log("");
        }
      })
      .addCase(getPaysBy.fulfilled, (state, { payload }) => {
        if (payload.data.code === "200") {
          console.log("");
        }
      })
      .addCase(getPayById.fulfilled, (state, { payload }) => {
        if (payload.data.code === "200") {
          console.log("");
        }
      })
      .addCase(alterPayById.fulfilled, (state, { payload }) => {
        if (payload.data.code === "200") {
          console.log("");
        }
      })
      .addCase(delPayById.fulfilled, (state, { payload }) => {
        if (payload.data.code === "200") {
          console.log("");
        }
      });
  },
});

export const {} = PaySlice.actions;

export default PaySlice.reducer;

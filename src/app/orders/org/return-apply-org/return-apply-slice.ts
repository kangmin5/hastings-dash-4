import { createSlice } from "@reduxjs/toolkit";
import { ReturnApplyAxios } from "./return-apply-axios";
import { ReturnApplyAction as action } from "./return-apply-union";
import { ReturnApplyVo } from "./return-apply-vo";
import { ReturnApplyDao as dao } from "./return-apply-dao";
import {
  addReturnApply,
  getAllReturnApplies,
  getReturnAppliesBy,
  getReturnApplyById,
  alterReturnApplyById,
  delReturnApplyById,
} from "./return-apply-thunk";
import { TroubleVo as TV } from "app/systems/org/trouble-org/trouble-vo";
import { TroubleDao as TD } from "app/systems/org/trouble-org/trouble-dao";
import { TroubleAspect as TA } from "app/systems/org/trouble-org/trouble-aspect";
interface ReturnApplyState {
  items: ReturnApplyVo[];
  hasItem: boolean;
  hasMessage: string;
}

const initialState: ReturnApplyState = {
  items: [],
  hasItem: false,
  hasMessage: "",
};

const ReturnApplySlice = createSlice({
  name: `returnApplies`,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addReturnApply.fulfilled, (state, { payload }) => {
        console.log("addReturnApply pending");
      })
      .addCase(getAllReturnApplies.fulfilled, (state, { payload }) => {
        console.log("allReturnApplies pending");
      })
      .addCase(getReturnAppliesBy.fulfilled, (state, { payload }) => {
        console.log("filterReturnApplies pending");
      })
      .addCase(getReturnApplyById.fulfilled, (state, { payload }) => {
        console.log("theReturnApply pending");
      })
      .addCase(alterReturnApplyById.fulfilled, (state, { payload }) => {
        console.log("alterReturnApply pending");
      })
      .addCase(delReturnApplyById.fulfilled, (state, { payload }) => {
        console.log("delReturnApply pending");
      });
  },
});

export const {} = ReturnApplySlice.actions;

export default ReturnApplySlice.reducer;

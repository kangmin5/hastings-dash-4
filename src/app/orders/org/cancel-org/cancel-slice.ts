import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CancelAxios } from "./cancel-axios";
import { CancelAction as action } from "./cancel-union";
import { CutAtom } from "../../atom/cut-atom";
import { CancelDao as dao } from "./cancel-dao";
import {
  addCancel,
  getAllCancels,
  getCancelsBy,
  getCancelById,
  alterCancelById,
  delCancelById,
} from "./cancel-thunk";
import { TroubleVo as TV } from "app/systems/org/trouble-org/trouble-vo";
import { TroubleDao as TD } from "app/systems/org/trouble-org/trouble-dao";
import { TroubleAspect as TA } from "app/systems/org/trouble-org/trouble-aspect";
interface CancelState {
  items: CutAtom[];
  hasItem: boolean;
  hasMessage: string;
}

const initialState: CancelState = {
  items: [],
  hasItem: false,
  hasMessage: "",
};

const CancelSlice = createSlice({
  name: `cancels`,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCancel.fulfilled, (state, { payload }) => {
        if (payload.data.code === "200") {
          dao.addOneSuccess(payload);
        }
      })
      .addCase(getAllCancels.fulfilled, (state, { payload }) => {
        if (payload.data.code === "200") {
          dao.getAllSuccess(payload);
        }
      })
      .addCase(getCancelsBy.fulfilled, (state, { payload }) => {
        if (payload.data.code === "200") {
          dao.getBySuccess(payload);
        }
      })
      .addCase(getCancelById.fulfilled, (state, { payload }) => {
        if (payload.data.code === "200") {
          dao.getByIdSuccess( payload);
        }
      })
      .addCase(alterCancelById.fulfilled, (state, { payload }) => {
        if (payload.data.code === "200") {
          dao.alterByIdSuccess(payload);
        }
      })
      .addCase(delCancelById.fulfilled, (state, { payload }) => {
        if (payload.data.code === "200") {
          dao.delByIdSuccess(payload);
        }
      });
  },
});

export const {} = CancelSlice.actions;

export default CancelSlice.reducer;

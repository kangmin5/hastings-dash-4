import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ReturnApplyAxios } from "./return-apply-axios";
import { ReturnApplyAction as action } from "./return-apply-union";
import { ReturnApplyVo } from "./return-apply-vo";
import { ReturnApplyDao as dao } from "./return-apply-dao";

export const addReturnApply = createAsyncThunk(
  action.addOne,
  async (parameter: ReturnApplyVo) => {
    return await ReturnApplyAxios.then().addOne(parameter);
  }
);
export const getAllReturnApplies = createAsyncThunk(action.getAll, async () => {
  return await ReturnApplyAxios.then().getAll(undefined);
});
export const getReturnAppliesBy = createAsyncThunk(
  action.getBy,
  async (parameter: ReturnApplyVo) => {
    return await ReturnApplyAxios.then().getBy(parameter);
  }
);
export const getReturnApplyById = createAsyncThunk(
  action.getById,
  async (parameter: ReturnApplyVo) => {
    return await ReturnApplyAxios.then().getById(parameter);
  }
);
export const alterReturnApplyById = createAsyncThunk(
  action.alterById,
  async (parameter: ReturnApplyVo) => {
    return await ReturnApplyAxios.then().alterById(parameter);
  }
);
export const delReturnApplyById = createAsyncThunk(
  action.delById,
  async (parameter: ReturnApplyVo) => {
    return await ReturnApplyAxios.then().delById(parameter);
  }
);

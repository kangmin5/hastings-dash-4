import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CancelAxios } from "./cancel-axios";
import { CancelAction as action } from "./cancel-union";
import { CutAtom } from "../../atom/cut-atom";
import { CancelDao as dao } from "./cancel-dao";

export const addCancel = createAsyncThunk(
    action.addOne,
    async (parameter: CutAtom) => {
      return await CancelAxios.then().addOne(parameter);
    }
  );
  export const getAllCancels = createAsyncThunk(
    action.getAll, async (parameter: CutAtom) => {
    return await CancelAxios.then().getAll(undefined);
  });
  export const getCancelsBy = createAsyncThunk(
    action.getBy,
    async (parameter: CutAtom) => {
      return await CancelAxios.then().getBy(parameter);
    }
  );
  export const getCancelById = createAsyncThunk(
    action.getById,
    async (parameter: CutAtom) => {
      return await CancelAxios.then().getById(parameter);
    }
  );
  export const alterCancelById = createAsyncThunk(
    action.alterById,
    async (parameter: CutAtom) => {
      return await CancelAxios.then().alterById(parameter);
    }
  );
  export const delCancelById = createAsyncThunk(
    action.delById,
    async (parameter: CutAtom) => {
      return await CancelAxios.then().delById(parameter);
    }
  );
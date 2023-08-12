import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { PayAxios } from "./pay-axios";
import { PayAction as action } from "./pay-union";
import { PayVo } from "../../mo/pay-mo/pay-vo";
import { PayDao as dao } from "./pay-dao";



export const addPay = createAsyncThunk(
    action.addOne,
    async (parameter: PayVo) => {
      return await PayAxios.then().addOne(parameter);
    }
  );
  export const getAllPays = createAsyncThunk(action.getAll, async () => {
    return await PayAxios.then().getAll(undefined);
  });
  export const getPaysBy = createAsyncThunk(
    action.getBy,
    async (parameter: PayVo) => {
      return await PayAxios.then().getBy(parameter);
    }
  );
  export const getPayById = createAsyncThunk(
    action.getById,
    async (parameter: PayVo) => {
      return await PayAxios.then().getById(parameter);
    }
  );
  export const alterPayById = createAsyncThunk(
    action.alterById,
    async (parameter: PayVo) => {
      return await PayAxios.then().alterById(parameter);
    }
  );
  export const delPayById = createAsyncThunk(
    action.delById,
    async (parameter: PayVo) => {
      return await PayAxios.then().delById(parameter);
    }
  );
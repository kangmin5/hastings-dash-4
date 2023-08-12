import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { BuyAxios as axios } from "./buy-axios";
import { DealAtom } from "../../atom/deal-atom";
import { BuyFactory as factory } from "./buy-factory";
import { BuyAction as action, BuyStrategy as strategy } from "./buy-union";
import { BuyDao as dao} from "./buy-dao";

export const addBuy = createAsyncThunk(
    action.addOne,
    async (parameter: DealAtom) => {
      return await axios.then().addOne(parameter);
    }
  );
  export const getAllBuys = createAsyncThunk(action.getAll, async () => {
    return await axios.then().getAll(undefined);
  });
  export const getBuysBy = createAsyncThunk(
    action.getBy,
    async (parameter: DealAtom) => {
      return await axios.then().getBy(parameter);
    }
  );
  export const getBuyById = createAsyncThunk(
    action.getById,
    async (parameter: DealAtom) => {
      return await axios.then().getById(parameter);
    }
  );
  export const alterBuyById = createAsyncThunk(
    action.alterById,
    async (parameter: DealAtom) => {
      return await axios.then().alterById(parameter);
    }
  );
  export const delBuyById = createAsyncThunk(
    action.delById,
    async (parameter: DealAtom) => {
      return await axios.then().delById(parameter);
    }
  );
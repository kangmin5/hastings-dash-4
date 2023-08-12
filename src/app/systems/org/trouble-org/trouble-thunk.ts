import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { TroubleAction as action } from "./trouble-union";
import { TroubleVo } from "./trouble-vo";
import { TroubleDao as dao} from "./trouble-dao";



export const addTrouble = createAsyncThunk(
    action.addOne,
    async (parameter: TroubleVo) => {
      return 
    }
  );
  export const getAllTroubles = createAsyncThunk(
    action.getAll, async () => {
    return 
  });
  export const getTroublesBy = createAsyncThunk(
    action.getBy,
    async (parameter: TroubleVo) => {
      return 
    }
  );
  export const getTroubleById = createAsyncThunk(
    action.getById,
    async (parameter: TroubleVo) => {
      return 
    }
  );
  export const alterTroubleById = createAsyncThunk(
    action.alterById,
    async (parameter: TroubleVo) => {
      return 
    }
  );
  export const delTroubleById = createAsyncThunk(
    action.delById,
    async (parameter: TroubleVo) => {
      return 
    }
  );
  
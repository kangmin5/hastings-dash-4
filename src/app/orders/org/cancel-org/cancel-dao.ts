import { CancelAxios } from "./cancel-axios";
import { CancelFactory as factory } from './cancel-factory';
import { CancelStrategy as strategy } from './cancel-union';
import { default as CancelSlice } from "./cancel-slice";
import { CutAtom } from "../../atom/cut-atom";

export class CancelDao {
  static addOneSuccess = (payload: any) =>  (factory.create(strategy.addCancel).handle(payload))
  static addOneFailure = (state: any) =>  (undefined)  
  static getAllSuccess = (payload: any): CutAtom[] => (factory.create(strategy.getAllCancels).handle(payload))
  static getAllFailure = (payload: any): CutAtom[] => (factory.create(strategy.fakeCancels).handle())
  static getBySuccess = (payload: any) =>   (undefined)  
  static getByFailure = (payload: any) =>   (undefined)  
  static getByIdSuccess = (payload: any) =>   (undefined)  
  static getByIdFailure = (payload: any) =>  (undefined)  
  static alterByIdFailure = (payload: any) =>  (undefined)  
  static alterByIdSuccess = (payload: any) => (undefined)  
  static delByIdFailure = (payload: any) => (undefined)  
  static delByIdSuccess = (payload: any) => (undefined)  
}

export { CancelSlice };

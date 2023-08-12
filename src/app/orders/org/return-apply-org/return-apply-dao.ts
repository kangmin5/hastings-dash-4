import { ReturnApplyAxios } from "./return-apply-axios";
import { ReturnApplyFactory as factory } from './return-apply-factory';
import { ReturnApplyStrategy as strategy } from './return-apply-union';
import { default as ReturnApplySlice } from "./return-apply-slice";
import { ReturnApplyVo } from "./return-apply-vo";

export class ReturnApplyDao {
  static addOneSuccess = (payload: any) =>  (factory.create(strategy.addReturnApply).handle(payload))
  static addOneFailure = (state: any) =>  (undefined)  
  static getAllSuccess = (payload: any): ReturnApplyVo[] => (factory.create(strategy.getAllReturnApplies).handle(payload))
  static getAllFailure = (payload: any): ReturnApplyVo[] => (factory.create(strategy.fakeReturnApplies).handle())
  static getBySuccess = (payload: any) =>   (undefined)  
  static getByFailure = (payload: any) =>   (undefined)  
  static getByIdSuccess = (payload: any) =>   (undefined)  
  static getByIdFailure = (payload: any) =>  (undefined)  
  static alterByIdFailure = (payload: any) =>  (undefined)  
  static alterByIdSuccess = (payload: any) => (undefined)  
  static delByIdFailure = (payload: any) => (undefined)  
  static delByIdSuccess = (payload: any) => (undefined)  
}

export { ReturnApplySlice };

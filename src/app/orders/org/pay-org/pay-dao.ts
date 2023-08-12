import { PayAxios } from "./pay-axios";
import { PayFactory as factory } from "./pay-factory";
import { PayStrategy as strategy } from "./pay-union";
import { default as PaySlice } from "./pay-slice";
import { PayVo } from "../../mo/pay-mo/pay-vo";

export class PayDao {
  static addOneSuccess = (payload: any) =>  (factory.create(strategy.addPay).handle(payload))
  static addOneFailure = (state: any) =>  (undefined)  
  static getAllSuccess = (payload: any): PayVo[] => (factory.create(strategy.getAllPays).handle(payload))
  static getAllFailure = (payload: any): PayVo[] => (factory.create(strategy.fakePays).handle())
  static getBySuccess = (payload: any) =>   (undefined)  
  static getByFailure = (payload: any) =>   (undefined)  
  static getByIdSuccess = (payload: any) =>   (undefined)  
  static getByIdFailure = (payload: any) =>  (undefined)  
  static alterByIdFailure = (payload: any) =>  (undefined)  
  static alterByIdSuccess = (payload: any) => (undefined)  
  static delByIdFailure = (payload: any) => (undefined)  
  static delByIdSuccess = (payload: any) => (undefined)  
}

export { PaySlice };

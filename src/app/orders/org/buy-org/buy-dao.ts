import { BuyAxios } from './buy-axios'
import { BuyFactory as factory } from "./buy-factory";
import { BuyStrategy as strategy } from "./buy-union";
import { default as BuySlice } from './buy-slice'
import { DealAtom } from '../../atom/deal-atom';

export class BuyDao {
  static addOneSuccess = (payload: any) =>  (factory.create(strategy.addBuy).handle(payload))
  static addOneFailure = (state: any) =>  (undefined)  
  static getAllSuccess = (payload: any): DealAtom[] => (factory.create(strategy.getAllBuys).handle(payload))
  static getAllFailure = (payload: any): DealAtom[] => (factory.create(strategy.fakeBuys).handle())
  static getBySuccess = (payload: any) =>   (undefined)  
  static getByFailure = (payload: any) =>   (undefined)  
  static getByIdSuccess = (payload: any) =>   (undefined)  
  static getByIdFailure = (payload: any) =>  (undefined)  
  static alterByIdFailure = (payload: any) =>  (undefined)  
  static alterByIdSuccess = (payload: any) => (undefined)  
  static delByIdFailure = (payload: any) => (undefined)  
  static delByIdSuccess = (payload: any) => (undefined)  
}

export { BuySlice } 


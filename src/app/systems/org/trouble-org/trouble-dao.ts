import { TroubleFactory as factory } from './trouble-factory';
import { TroubleStrategy as strategy } from './trouble-union';
import { default as TroubleSlice } from "./trouble-slice";
import { TroubleVo } from "./trouble-vo";

export class TroubleDao {
  static rejectedTrouble = (payload: any) =>  (factory.create(strategy.rejectedTrouble).handle(payload))
  static getByIdFailureTrouble = (payload: any): TroubleVo => (factory.create(strategy.getByIdFailureTrouble).handle(payload))
  static addOneFailureTrouble = (payload: any): TroubleVo => (factory.create(strategy.addOneFailureTrouble).handle())
  static alterByIdFailureTrouble = (payload: any): TroubleVo => (factory.create(strategy.alterByIdFailureTrouble).handle())
  static getByFailureTrouble = (payload: any) =>   (factory.create(strategy.getByFailureTrouble).handle(payload))
  static delByIdFailureTrouble = (payload: any) =>   (factory.create(strategy.delByIdFailureTrouble).handle(payload))
  static successIsFalseTrouble = (payload: any) =>   (factory.create(strategy.successIsFalseTrouble).handle(payload))
  static hasNotAccessTokenTrouble = (payload: any) =>   (factory.create(strategy.hasNotAccessTokenTrouble).handle(payload))

}
export { TroubleSlice };

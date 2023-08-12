import { FaqFactory as factory } from './faq-factory'
import { FaqStrategy as strategy } from './faq-union'
import { default as FaqSlice } from './faq-slice'
import { FaqVo } from 'app/boards/mo/faq-mo/faq-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class FaqDao {
  static addOneSuccess = (payload: any): FaqVo[] => factory.create(strategy.addFaq).handle(payload)
  static getAllSuccess = (payload: any): FaqVo[] => factory.create(strategy.getAllFaqs).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { FaqSlice }

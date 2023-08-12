import { QuoteFactory as factory } from './quote-factory'
import { QuoteStrategy as strategy } from './quote-union'
import { default as QuoteSlice } from './quote-slice'
import { QuoteVo } from 'app/quotes/mo/quote-mo/quote-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class QuoteDao {
  static addOneSuccess = (payload: any): QuoteVo[] => factory.create(strategy.addQuote).handle(payload)
  static getAllSuccess = (payload: any): QuoteVo[] => factory.create(strategy.getAllQuotes).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { QuoteSlice }

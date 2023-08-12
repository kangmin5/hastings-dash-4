import { AuthorFactory as factory } from './author-factory'
import { AuthorStrategy as strategy } from './author-union'
import { default as AuthorSlice } from './author-slice'
import { AuthorVo } from 'app/authors/mo/author-mo/author-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class AuthorDao {
  static addOneSuccess = (payload: any): AuthorVo[] => factory.create(strategy.addAuthor).handle(payload)
  static getAllSuccess = (payload: any): AuthorVo[] => factory.create(strategy.getAllAuthors).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { AuthorSlice }

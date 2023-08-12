import { AuthorVo } from 'app/authors/mo/author-mo/author-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { AuthorStrategy } from './author-union'
import { AuthorList } from 'app/authors/mo/author-mo/author-list'

type Strategy = keyof typeof AuthorStrategy

const AuthorMap: { [_case in Strategy]: StrategyType<AuthorVo[]> } = {
  getAllAuthors: new AuthorList(),
  getAuthorById: undefined,
  addAuthor: undefined,
  alterAuthorById: undefined,
  getAuthorsBy: undefined,
  delAuthorById: undefined
}

export class AuthorFactory {
  static create(_case: Strategy): StrategyType<AuthorVo[]> {
    const strategy = AuthorMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}

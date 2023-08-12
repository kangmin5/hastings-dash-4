import { AuthorVo, AuthorTo } from 'app/authors/mo/author-mo/author-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { UserAtom, UserBuilder } from 'app/authors/atom/user-atom'

export class AuthorList implements StrategyType<AuthorVo[]> {
  handle(args?: any): AuthorVo[] {
    const arr: AuthorVo[] = []
    console.log(' &&&&&&&&&&& array ', JSON.stringify(args))
    const len = args.length
    let i = 0
    for (; i < len; i++) {
      const enName = args[i].enName

      const a = new UserBuilder().userId(enName).build()

      const to = new AuthorTo()
      to.setUser(a)

      const jo = to.toJson()

      arr.push(jo)
    }
    return arr
  }
}

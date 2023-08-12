import { PersonBuilder } from 'app/authors/atom/person-atom'
import { UserBuilder } from 'app/authors/atom/user-atom'
import { ArticleBuilder } from 'app/boards/atom/article-atom'
import { BarBuilder } from 'app/boards/atom/bar-atom'
import { ConsultBuilder } from 'app/boards/atom/consult-atom'
import { CounselTo, CounselVo } from 'app/boards/mo/counsel-mo/counsel-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { TimeBuilder } from 'app/utils/atom/time-atom'

export class CounselList implements StrategyType<CounselVo[]> {
  handle(args?: any): CounselVo[] {
    const items: CounselVo[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].id
      console.log('1- 상담-아이디: ', x1)
      const x2 = array[i].inquiryType
      console.log('2- 종류: ', x2)
      const x3 = array[i].content
      console.log('3- 내용 : ', x3)
      const x4 = array[i].customerName
      console.log('4- 이름 : ', x4)
      const x5 = array[i].userId
      console.log('5- 사용자-아이디 : ', x5)
      const x6 = array[i].counselor
      console.log('6- 직원명 : ', x6)
      const x7 = array[i].createdAt
      console.log('7- 생산일 : ', x7)
      const x8 = array[i].fiveEvaluations
      console.log('8- 등급 : ', x8)
      const x9 = array[i].threeStatus
      console.log('9- 상태 : ', x9)

      const a1 = new BarBuilder().id(x1).build()

      const a2 = new ArticleBuilder()
        .content(x3) // 종류
        .kind(x2) // 종류
        .build()

      const a3 = new UserBuilder()
        .username(x4) // 이름
        .userId(x5) // 사용자-아이디
        .build()

      const a4 = new TimeBuilder()
        .createdAt(x7) // 작성일
        .build()

      const a5 = new ConsultBuilder()
        .counselor(x6) // 직원명
        .evaluation(x8) // 등급
        .status(x9) // 상태
        .build()

      const to = new CounselTo()
      to.setBar(a1)
      to.setArticle(a2)
      to.setUser(a3)
      to.setTime(a4)
      to.setConsult(a5)
      const jo = to.toJson()

      items.push(jo)
    }
    return items
  }
}

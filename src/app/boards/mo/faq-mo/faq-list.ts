import { ArticleBuilder } from 'app/boards/atom/article-atom'
import { FaqTo, FaqVo } from 'app/boards/mo/faq-mo/faq-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { PersonBuilder } from 'app/authors/atom/person-atom'
import { TimeBuilder } from 'app/utils/atom/time-atom'
import { BarBuilder } from 'app/boards/atom/bar-atom'

export class FaqList implements StrategyType<FaqVo[]> {
  handle(args?: any): FaqVo[] {
    const items: FaqVo[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].id
      console.log('1- 자주묻는질문-아이디: ', x1)
      const x2 = array[i].question
      console.log('2- 질문 : ', x2)
      const x3 = array[i].inquiryType
      console.log('3- 자주묻는질문-종류: ', x3)
      const x4 = array[i].employeeTitle
      console.log('4- 이름 : ', x4)
      const x5 = array[i].createdAt
      console.log('5- 작성일 : ', x5)
      const x6 = array[i].updatedAt
      console.log('6- 수정일 : ', x6)
      const x7 = array[i].viewCount
      console.log('7- 조회수 : ', x7)
      const x8 = array[i].isPosted == 'Y' ? true : false
      console.log('8 게시여부 : ', x8 ? '게시' : '게시안함')

      const a1 = new BarBuilder().id(x1).build() // 1- 공지사항아이디

      const a2 = new ArticleBuilder()
        .title(x2) // 2- 질문
        .kind(x3) // 3- 자주묻는질문-종류
        .viewCount(x7) // 7- 조회수
        .isPosted(x8) // 8- 게시여부
        .build()

      const a3 = new PersonBuilder()
        .name(x4) // 4- 이름
        .build()

      const a4 = new TimeBuilder()
        .createdAt(x5) // 2- 작성일
        .updatedAt(x6) // 3- 수정일
        .build()

      const to = new FaqTo()
      to.setBar(a1)
      to.setArticle(a2)
      to.setPerson(a3)
      to.setTime(a4)
      const jo = to.toJson()

      items.push(jo)
    }
    return items
  }
}

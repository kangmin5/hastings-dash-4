import { NoticeVo, NoticeTo } from 'app/boards/mo/notice-mo/notice-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { BarBuilder } from 'app/boards/atom/bar-atom'
import { ArticleBuilder } from 'app/boards/atom/article-atom'
import { TimeBuilder } from 'app/utils/atom/time-atom'
import { PersonBuilder } from 'app/authors/atom/person-atom'
import { AttachBuilder } from 'app/boards/atom/attach-atom'

export class NoticeList implements StrategyType<NoticeVo[]> {
  handle(args?: any): NoticeVo[] {
    const items: NoticeVo[] = []
    const array = args
    const len = array.length
    console.log('회전수 : ', len)
    let i = 0
    for (; i < len; i++) {
      console.log('=== 순환 시작 ===')
      const t01 = array[i].id
      console.log('1- 공지사항아이디: ', t01)
      const t02 = array[i].isPinned == 'Y' ? true : false
      console.log('2- 상단고정여부 : ', t02 ? '고정' : '고정안함')
      const t03 = array[i].title
      console.log('3- 공지사항제목: ', t03)
      const t04 = array[i].hasImageAttachment == 'Y' ? true : false
      console.log('4- 첨부파일여부 : ', t04 ? '첨부' : '첨부안함')
      const t05 = array[i].writer
      console.log('5- 작성자 : ', t05)
      const t06 = array[i].createdAt
      console.log('6- 작성일 : ', t06)
      const t07 = array[i].updatedAt
      console.log('7- 수정일 : ', t07)
      const t08_ = array[i].display
      let t08 = ''
      switch (t08_) {
        case 'all':
          t08 = '전체공개'
          break
        case 'web':
          t08 = '웹에서만 공개'
          break
        case 'mobile':
          t08 = '모바일에서만 공개'
          break
        default:
          t08 = '전체공개'
          break
      }
      console.log('8- 공개조건 : ', t08)
      const t09 = array[i].viewCount
      console.log('9- 조회수 : ', t09)
      const t10 = array[i].isPosted == 'Y' ? true : false
      console.log('10- 게시여부 : ', t10 ? '게시' : '게시안함')
      console.log('=== 순환 종료 ===', t01)

      const a2 = new ArticleBuilder()
        .isPinned(t02) // 2- 상단고정여부
        .isPosted(t10) // 10- 게시여부
        .title(t03) // 3- 공지사항제목
        .viewCount(t09) // 9- 조회수
        .build()

      const a1 = new BarBuilder()
        .id(t01) // 1- 공지사항아이디
        .display(t08) // 8- 공개조건
        .build()

      const a3 = new TimeBuilder()
        .createdAt(t06) // 6- 작성일
        .updatedAt(t07) // 7- 수정일
        .build()

      const a4 = new PersonBuilder()
        .name(t05) // 5- 작성자
        .build()

      const a5 = new AttachBuilder()
        .hasFile(t04) // 4- 첨부파일여부
        .build()

      const to = new NoticeTo()
      to.setArticle(a2)
      to.setBar(a1)
      to.setTime(a3)
      to.setPerson(a4)
      to.setAttach(a5)
      const jo = to.toJson()
      items.push(jo)
    }
    return items
  }
}

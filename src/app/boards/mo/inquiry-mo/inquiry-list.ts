import { InquiryTo, InquiryVo } from './inquiry-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { PersonBuilder } from 'app/authors/atom/person-atom'
import { AttachBuilder } from 'app/boards/atom/attach-atom'
import { TimeBuilder } from 'app/utils/atom/time-atom'
import { BarBuilder } from 'app/boards/atom/bar-atom'
import { ReplyBuilder } from 'app/boards/atom/reply-atom'
import { ArticleBuilder } from 'app/boards/atom/article-atom'

export class InquiryList implements StrategyType<InquiryVo[]> {
  handle(args?: any): InquiryVo[] {
    const items: InquiryVo[] = []
    const array = args

    /**
      object		{10}
      id	:	8
      inquiryType	:	배송문의
      title	:	더미 일대일 문의 제목
      hasImageAttachment	:	N
      hasfileAttachment	:	N
      writer	:	강백호
      createdAt	:	2023-07-19 14:12:20
      isReceivedReply	:	N
      cellPhone	:	010-0000-0000
      isAnswered	:	N
    */

    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].id
      const x2 = array[i].inquiryType
      const x3 = array[i].title
      const x4 = array[i].hasImageAttachment
      const x5 = array[i].hasfileAttachment
      const x6 = array[i].writer
      const x7 = array[i].createdAt
      const x8 = array[i].isReceivedReply
      const x9 = array[i].cellPhone
      const x10 = array[i].isAnswered

      const a1 = new BarBuilder().id(x1).build()
      const a2 = new ArticleBuilder().kind(x2).title(x3).build()
      const a3 = new PersonBuilder().name(x6).phone(x9).build()
      const a4 = new AttachBuilder().hasImage(x4).hasFile(x5).build()
      const a5 = new TimeBuilder().createdAt(x7).build()
      const a6 = new ReplyBuilder().answer(x8).hasAnswer(x10).build()

      const to = new InquiryTo()
      to.setBar(a1)
      to.setTime(a5)
      to.setArticle(a2)
      to.setPerson(a3)
      to.setAttach(a4)
      to.setReply(a6)

      const jo = to.toJson()

      console.log(' &&&&&&&&&&& 1:1 문의 &&&&&&&&&&& \n ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}

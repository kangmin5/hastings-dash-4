import { PersonDto, PersonAtom, PersonBuilder } from 'app/authors/atom/person-atom'
import { ArticleDto, ArticleAtom, ArticleBuilder } from 'app/boards/atom/article-atom'
import { AttachDto, AttachAtom, AttachBuilder } from 'app/boards/atom/attach-atom'
import { BarAtom, BarBuilder, BarDto } from 'app/boards/atom/bar-atom'
import { ReplyAtom, ReplyBuilder, ReplyDto } from 'app/boards/atom/reply-atom'
import { TimeAtom, TimeBuilder, TimeDto } from 'app/utils/atom/time-atom'
export class InquiryVo {
  constructor(
    public bar?: BarAtom,
    public article?: ArticleAtom,
    public person?: PersonAtom,
    public attach?: AttachAtom,
    public time?: TimeAtom,
    public reply?: ReplyAtom
  ) {}
}

export class InquiryTo {
  protected bar?: BarDto
  protected article?: ArticleDto
  protected person?: PersonDto
  protected attach?: AttachDto
  protected time?: TimeDto
  protected reply?: ReplyDto

  setBar(bar: BarAtom): void {
    this.bar = new BarBuilder().id(bar.id).transform()
  }

  setArticle(article: ArticleAtom): void {
    this.article = new ArticleBuilder().kind(article.kind).title(article.title).transform()
  }
  setPerson(person: PersonAtom): void {
    this.person = new PersonBuilder().name(person.name).phone(person.phone).transform()
  }
  setAttach(attach: AttachAtom): void {
    this.attach = new AttachBuilder().hasImage(attach.hasImage).hasFile(attach.hasFile).transform()
  }
  setTime(time: TimeAtom): void {
    this.time = new TimeBuilder().createdAt(time.createdAt).updatedAt(time.updatedAt).transform()
  }
  setReply(reply: ReplyAtom): void {
    this.reply = new ReplyBuilder().answer(reply.answer).hasAnswer(reply.hasAnswer).transform()
  }

  toJson() {
    return {
      bar: this.bar.toJson(),
      article: this.article.toJson(),
      person: this.person.toJson(),
      attach: this.attach.toJson(),
      time: this.time.toJson(),
      reply: this.reply.toJson()
    }
  }
}
export class InquiryBo {
  private readonly instance: InquiryVo

  constructor() {
    this.instance = {
      bar: new BarAtom(),
      article: new ArticleAtom(),
      person: new PersonAtom(),
      time: new TimeAtom(),
      attach: new AttachAtom(),
      reply: new ReplyAtom()
    }
  }
  article(article: ArticleAtom): InquiryBo {
    this.instance.article = article
    return this
  }
  person(person: PersonAtom): InquiryBo {
    this.instance.person = person
    return this
  }
  time(time: TimeAtom): InquiryBo {
    this.instance.time = time
    return this
  }
  bar(bar: BarAtom): InquiryBo {
    this.instance.bar = bar
    return this
  }
  attach(attach: AttachAtom): InquiryBo {
    this.instance.attach = attach
    return this
  }
  reply(reply: ReplyAtom): InquiryBo {
    this.instance.reply = reply
    return this
  }

  build(): InquiryVo {
    return this.instance
  }
  transform(): InquiryTo {
    const to = new InquiryTo()
    to.setArticle(this.instance.article)
    to.setPerson(this.instance.person)
    to.setTime(this.instance.time)
    to.setBar(this.instance.bar)
    to.setAttach(this.instance.attach)
    to.setReply(this.instance.reply)
    return to
  }
}

import { PersonAtom, PersonBuilder, PersonDto } from 'app/authors/atom/person-atom'
import { ArticleAtom, ArticleBuilder, ArticleDto } from 'app/boards/atom/article-atom'
import { AttachAtom, AttachBuilder, AttachDto } from 'app/boards/atom/attach-atom'
import { BarAtom, BarBuilder, BarDto } from 'app/boards/atom/bar-atom'
import { TimeAtom, TimeBuilder, TimeDto } from 'app/utils/atom/time-atom'

export class NoticeVo {
  constructor(
    public bar?: BarAtom,
    public article?: ArticleAtom,
    public person?: PersonAtom,
    public attach?: AttachAtom,
    public time?: TimeAtom,
    public s3?: string[]
  ) {}
}

export class NoticeTo {
  bar: BarDto
  article: ArticleDto
  person: PersonDto
  attach: AttachDto
  time: TimeDto
  s3: string[]


  setBar(bar: BarAtom): void {
    this.bar = new BarBuilder().id(bar.id).transform()
  }

  setArticle(article: ArticleAtom): void {
    this.article = new ArticleBuilder()
      .isPosted(article.isPosted)
      .title(article.title)
      .expose(article.expose) 
      .isPinned(article.isPinned)
      .transform()
  }
  setPerson(person: PersonAtom): void {
    this.person = new PersonBuilder().name(person.name).transform()
  }
  setAttach(attach: AttachAtom): void {
    this.attach = new AttachBuilder().transform()
  }
  setTime(time: TimeAtom): void {
    this.time = new TimeBuilder().createdAt(time.createdAt).updatedAt(time.updatedAt).transform()
  }
  setS3(s3: string[]): void {
    this.s3 = s3
  }
  toJson() {
    return {
      bar: this.bar.toJson(),
      article: this.article.toJson(),
      person: this.person.toJson(),
      attach: this.attach.toJson(),
      time: this.time.toJson(),
      s3: this.s3
    }
  }
}

export class NoticeBo {
  private readonly instance: NoticeVo

  constructor() {
    this.instance = {
      article: new ArticleAtom(),
    }
  }
 
  article(article: ArticleAtom): NoticeBo {
    this.instance.article = article
    return this
  }
 
  transform(): NoticeVo {
    const to = new NoticeTo()
    to.setArticle(this.instance.article)
   
    return to
  }
  build(): NoticeVo {
    return this.instance
  }

}

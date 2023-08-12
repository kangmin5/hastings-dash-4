import { PersonAtom, PersonBuilder, PersonDto } from 'app/authors/atom/person-atom'
import { ArticleAtom, ArticleBuilder, ArticleDto } from 'app/boards/atom/article-atom'
import { ReplyAtom, ReplyBuilder, ReplyDto } from 'app/boards/atom/reply-atom'
import { QuadAtom, QuadBuilder, QuadDto } from 'app/quotes/atom/quad-atom'
import { TimeAtom, TimeBuilder, TimeDto } from 'app/utils/atom/time-atom'

export class SimpleVo {
  constructor(
    public quad?: QuadAtom,
    public article?: ArticleAtom,
    public person?: PersonAtom,
    public time?: TimeAtom,
    public reply?: ReplyAtom
    ) {}
}

export class SimpleTo {
  quad?: QuadDto
  article?: ArticleDto
  person?: PersonDto
  time?: TimeDto
  reply?: ReplyDto

  constructor() {
    this.quad = new QuadDto()
    this.article = new ArticleDto()
    this.person = new PersonDto()
    this.time = new TimeDto()
    this.reply = new ReplyDto()
  }

  setQuad(quad: QuadAtom): void {
    this.quad = new QuadBuilder().id(quad.id)
    
    
    
    .transform()
  }

  setArticle(article: ArticleAtom): void {
    this.article = new ArticleBuilder()  //**TODO */


    .transform()
  }

  setPerson(person: PersonAtom): void {
    this.person = new PersonBuilder() //**TODO */


    .transform()
  }

  setTime(time: TimeAtom): void {
    this.time = new TimeBuilder() //**TODO */


    .transform()
  }

  setReply(reply: ReplyAtom): void {
    this.reply = new ReplyBuilder()


    .transform()

  }



  toJson() {
    return {
      quad: this.quad.toJson(),
      article: this.article.toJson(),
      person: this.person.toJson(),
      time: this.time.toJson(),
      reply: this.reply.toJson()
    }
  }
}

export class SimpleBo {
  private readonly instance: SimpleVo
  constructor() {
    this.instance = {
      quad: new QuadAtom(),
      article: new ArticleAtom(),
      person: new PersonAtom(),
      time: new TimeAtom()
    }
  }
  quad(quad: QuadAtom): SimpleBo {
    this.instance.quad = new QuadBuilder().id(quad.id).transform()
    return this
  }
  article(article: ArticleAtom): SimpleBo {
    this.instance.article = new ArticleBuilder().transform()
    return this
  }
  person(person: PersonAtom): SimpleBo {
    this.instance.person = new PersonBuilder().transform()
    return this
  }
  time(time: TimeAtom): SimpleBo {
    this.instance.time = new TimeBuilder().transform()
    return this
  }

  transform(): SimpleTo {
    const d = new SimpleTo()
    d.setQuad(this.instance.quad)
    d.setArticle(this.instance.article)
    d.setPerson(this.instance.person)
    d.setTime(this.instance.time)

    return d
  }
  build(): SimpleVo {
    return this.instance
  }
}

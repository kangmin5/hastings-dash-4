import { ParAtom, ParBuilder, ParDto } from 'app/products/atom/par-atom'
import { ArticleAtom, ArticleBuilder, ArticleDto } from 'app/boards/atom/article-atom'
import { PersonAtom, PersonBuilder, PersonDto } from 'app/authors/atom/person-atom'
import { AttachAtom, AttachBuilder, AttachDto } from 'app/boards/atom/attach-atom'
import { ReplyAtom, ReplyBuilder, ReplyDto } from 'app/boards/atom/reply-atom'

export class AskVo {
  constructor(
    public par?: ParAtom,
    public article?: ArticleAtom,
    public person?: PersonAtom,
    public attach?: AttachAtom,
    public reply?: ReplyAtom
    ) {}
}
export class AskTo {

  protected par?: ParDto
  protected article?: ArticleDto
  protected person?: PersonDto
  protected attach?: AttachDto
  protected reply?: ReplyDto

  setPar(par: ParAtom): void {
    this.par = new ParBuilder()
    .id(par.id)

    .transform()

  }
  setArticle(article: ArticleAtom): void {
    this.article = new ArticleBuilder()

    .transform()
  }
  setPerson(person: PersonAtom): void {
    this.person = new PersonBuilder()

    .transform()
  }
  setAttach(attach: AttachAtom): void {
    this.attach = new AttachBuilder()

    .transform()
  }
  setReply(reply: ReplyAtom): void {
    this.reply = new ReplyBuilder()

    .transform()

  }

  toJson() {
    return {
      article: this.article.toJson(),
      par: this.par.toJson(),
      person: this.person.toJson(),
      attach: this.attach.toJson(),
      reply: this.reply.toJson()
    }
  }
}
export class AskBo {
  private readonly instance: AskVo

  constructor() {
    this.instance = {
      par: new ParAtom(),
      article: new ArticleAtom(),
      person: new PersonAtom(),
      attach: new AttachAtom(),
      reply: new ReplyAtom()
    }
  }

  par(par: ParAtom): AskBo {
    this.instance.par = new ParBuilder().id(par.id)


    .transform()
    return this
  }

  build(): AskVo {
    return this.instance
  }
  transform(): AskTo {
    const to = new AskTo()
    to.setPar(this.instance.par)
    to.setArticle(this.instance.article)
    to.setPerson(this.instance.person)
    to.setAttach(this.instance.attach)
    to.setReply(this.instance.reply)
    return to
  }
}

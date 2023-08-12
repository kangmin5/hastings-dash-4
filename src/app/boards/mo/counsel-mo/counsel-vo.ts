import { UserAtom, UserBuilder, UserDto } from 'app/authors/atom/user-atom'
import { ArticleAtom, ArticleBuilder, ArticleDto } from 'app/boards/atom/article-atom'
import { BarAtom, BarBuilder, BarDto } from 'app/boards/atom/bar-atom'
import { ConsultAtom, ConsultBuilder, ConsultDto } from 'app/boards/atom/consult-atom'
import { TimeAtom, TimeBuilder, TimeDto } from 'app/utils/atom/time-atom'

export class CounselVo {
  constructor(
    public bar?: BarAtom,
    public user?: UserAtom,
    public article?: ArticleAtom,
    public time?: TimeAtom,
    public consult?: ConsultAtom
  ) {}
}
export class CounselTo {
  bar?: BarDto
  user?: UserDto
  article?: ArticleDto
  time?: TimeDto
  consult?: ConsultDto

  setBar(x: BarAtom): void {
    this.bar = new BarBuilder().id(x.id).transform()
  }
  setUser(x: UserAtom): void {
    this.user = new UserBuilder().userId(x.userId).username(x.username).transform()
  }
  setArticle(x: ArticleAtom): void {
    this.article = new ArticleBuilder().kind(x.kind).title(x.title).content(x.content).transform()
  }
  setTime(x: TimeAtom): void {
    this.time = new TimeBuilder().createdAt(x.createdAt).transform()
  }
  setConsult(x: ConsultAtom): void {
    this.consult = new ConsultBuilder().counselor(x.counselor).evaluation(x.evaluation).status(x.status).transform()
  }

  toJson() {
    return {
      bar: this.bar.toJson(),
      consult: this.consult.toJson(),
      article: this.article.toJson(),
      time: this.time.toJson(),
      user: this.user.toJson()
    }
  }
}
export class CounselBo {
  private readonly instance: CounselVo

  constructor() {
    this.instance = {
      bar: new BarAtom(),
      consult: new ConsultAtom(),
      article: new ArticleAtom(),
      time: new TimeAtom(),
      user: new UserAtom()
    }
  }
  bar(bar: BarAtom): CounselBo {
    this.instance.bar = bar
    return this
  }

  consult(consult: ConsultAtom): CounselBo {
    this.instance.consult = consult
    return this
  }
  article(article: ArticleAtom): CounselBo {
    this.instance.article = article
    return this
  }
  time(time: TimeAtom): CounselBo {
    this.instance.time = time
    return this
  }
  user(user: UserAtom): CounselBo {
    this.instance.user = user
    return this
  }

  build(): CounselVo {
    return this.instance
  }
  transform(): CounselTo {
    const to = new CounselTo()
    to.setBar(this.instance.bar)
    to.setConsult(this.instance.consult)
    to.setArticle(this.instance.article)
    to.setTime(this.instance.time)
    to.setUser(this.instance.user)
    return to
  }
}

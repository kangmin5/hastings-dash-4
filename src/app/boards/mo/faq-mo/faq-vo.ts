import { PersonAtom, PersonBuilder, PersonDto } from 'app/authors/atom/person-atom'
import { ArticleAtom, ArticleBuilder, ArticleDto } from 'app/boards/atom/article-atom'
import { BarAtom, BarBuilder, BarDto } from 'app/boards/atom/bar-atom'
import { TimeAtom, TimeBuilder, TimeDto } from 'app/utils/atom/time-atom'

export class FaqVo {
  constructor(
    public bar?: BarAtom,
    public article?: ArticleAtom,
    public person?: PersonAtom,
    public time?: TimeAtom
  ) {}
}

export class FaqTo {
  article?: ArticleDto
  bar?: BarDto
  person?: PersonDto
  time?: TimeDto

  setBar(bar: BarAtom): void {
    this.bar = new BarBuilder().id(bar.id).transform()
  }

  setPerson(person: PersonAtom): void {
    this.person = new PersonBuilder()
      .name(person.name)
      .phone(person.phone)
      .birth(person.birth)
      .email(person.email)
      .transform()
  }

  setArticle(article: ArticleAtom): void {
    this.article = new ArticleBuilder()

      .title(article.title)
      .content(article.content)
      .isPinned(article.isPinned)
      .isPosted(article.isPosted)
      .kind(article.kind)
      .transform()
  }

  setTime(time: TimeAtom): void {
    this.time = new TimeBuilder().createdAt(time.createdAt).updatedAt(time.updatedAt).transform()
  }

  toJson() {
    return {
      bar: this.bar.toJson(),
      article: this.article.toJson(),
      person: this.person.toJson(),
      time: this.time.toJson()
    }
  }
}

export class FaqBo {
  private readonly instance: FaqVo
  constructor() {
    this.instance = {
      bar: new BarBuilder().build(),
      article: new ArticleBuilder().build(),
      person: new PersonBuilder().build(),
      time: new TimeBuilder().build()
    }
  }
  bar(bar: BarAtom): FaqBo {
    this.instance.bar = new BarBuilder().id(bar.id).transform()
    return this
  }

  article(article: ArticleAtom): FaqBo {
    this.instance.article = new ArticleBuilder()
//**TODO */
    .transform()
    return this
  }
  person(person: PersonAtom): FaqBo {
    this.instance.person = new PersonBuilder()
//**TODO */
    .transform()
    return this
  }
  time(time: TimeAtom): FaqBo {
    this.instance.time = new TimeBuilder()
//**TODO */
.transform()
    return this
  }
  transform(): FaqTo {
    const to = new FaqTo()
    to.setBar(this.instance.bar)
    to.setArticle(this.instance.article)
    to.setPerson(this.instance.person)
    to.setTime(this.instance.time)
    return to
  }
  build(): FaqVo {
    return this.instance
  }
}

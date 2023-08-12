export class ArticleAtom {
  constructor(
    public title?: string,
    public kind?: string,
    public content?: string,
    public viewCount?: string,
    public isPinned?: boolean,
    public isPosted?: boolean,
    public expose?: string // all, web, mobile
  ) {}
}
export class ArticleDto {
  title?: string
  kind?: string
  content?: string
  viewCount?: string
  writtenAt?: string
  isPinned?: boolean
  isPosted?: boolean
  expose?: string

  constructor() {
    this.title = ''
    this.kind = ''
    this.writtenAt = ''
    this.content = ''
    this.viewCount = ''

    this.isPinned = false
    this.isPosted = false
    this.expose = ''
  }

  setTitle(title: string): void {
    this.title = title
  }

  setKind(kind: string): void {
    this.kind = kind
  }

  setContent(content: string): void {
    this.content = content
  }

  setWrittenAt(writtenAt: string): void {
    this.writtenAt = writtenAt
  }

  setIsPinned(isPinned: boolean): void {
    this.isPinned = isPinned
  }

  setIsPosted(isPosted: boolean): void {
    this.isPosted = isPosted
  }

  setViewCount(viewCount: string): void {
    this.viewCount = viewCount
  }

  setExpose(expose: string): void {
    this.expose = expose
  }

  toJson() {
    return {
      title: this.title,
      kind: this.kind,
      isPinned: this.isPinned,
      isPosted: this.isPosted,
      content: this.content,
      writtenAt: this.writtenAt,
      viewCount: this.viewCount,
      expose: this.expose
    }
  }
}

export class ArticleBuilder {
  private readonly instance: ArticleAtom

  constructor() {
    this.instance = {
      title: '',
      kind: '',
      content: '',
      viewCount: '',
      isPosted: false,
      isPinned: false,
      expose: ''
    }
  }

  title(title: string): ArticleBuilder {
    this.instance.title = title
    return this
  }
  kind(kind: string): ArticleBuilder {
    this.instance.kind = kind
    return this
  }
  content(content: string): ArticleBuilder {
    this.instance.content = content
    return this
  }

  viewCount(viewCount: string): ArticleBuilder {
    this.instance.viewCount = viewCount
    return this
  }
  isPinned(isPinned: boolean): ArticleBuilder {
    this.instance.isPinned = isPinned
    return this
  }
  isPosted(isPosted: boolean): ArticleBuilder {
    this.instance.isPosted = isPosted
    return this
  }
  expose(expose: string): ArticleBuilder {
    this.instance.expose = expose
    return this
  }

  build = (): ArticleAtom => this.instance

  transform = (): ArticleDto => {
    const { title, kind, content, viewCount, expose, isPinned, isPosted } = this.instance
    const d = new ArticleDto()
    if (title) d.setTitle(title)
    if (kind) d.setKind(kind)
    if (content) d.setContent(content)
    if (viewCount) d.setViewCount(viewCount)
    if (isPinned) d.setIsPinned(this.instance.isPinned)
    if (isPosted) d.setIsPosted(this.instance.isPosted)
    if (expose) d.setExpose(this.instance.expose)

    return d
  }
}



//** https://www.geeksforgeeks.org/how-to-cast-a-json-object-inside-of-typescript-class/ */

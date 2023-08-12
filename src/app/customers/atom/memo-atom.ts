export class MemoAtom {
  constructor(
    public title?: string,
    public writtenAt?: string,
    public reWrittenAt?: string,
    public content?: string,
    ) {}
}

export class MemoDto {
   title?: string
    writtenAt?: string
    reWrittenAt?: string
    content?: string

  constructor() {
    this.title = ''
    this.writtenAt = ''
    this.reWrittenAt = ''
    this.content = ''
  }

  setTitle(title: string): void {
    this.title = title
  }
  setWrittenAt(writtenAt: string): void {
    this.writtenAt = writtenAt
  }
  setReWrittenAt(reWrittenAt: string): void {
    this.reWrittenAt = reWrittenAt
  }
  setContent(content: string): void {
    this.content = content
  }

  toJson() {
    return {
      title: this.title,
      writtenAt: this.writtenAt,
      reWrittenAt: this.reWrittenAt,
      content: this.content
    }
  }
}

export class MemoBuilder {
  private readonly instance: MemoAtom
  constructor() {
    this.instance = {
      title: '',
      writtenAt: '',
      reWrittenAt: '',
      content: ''
    }
  }
  title(title: string): MemoBuilder {
    this.instance.title = title
    return this
  }
  writtenAt(writtenAt: string): MemoBuilder {
    this.instance.writtenAt = writtenAt
    return this
  }
  reWrittenAt(reWrittenAt: string): MemoBuilder {
    this.instance.reWrittenAt = reWrittenAt
    return this
  }
  content(content: string): MemoBuilder {
    this.instance.content = content
    return this
  }

  transform(): MemoDto {
    const d = new MemoDto()
    d.setTitle(this.instance.title)
    d.setWrittenAt(this.instance.writtenAt)
    d.setReWrittenAt(this.instance.reWrittenAt)
    d.setContent(this.instance.content)

    return d
  }
  build(): MemoAtom {
    return this.instance
  }
}

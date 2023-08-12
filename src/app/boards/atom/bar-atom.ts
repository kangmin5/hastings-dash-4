export class BarAtom {
  constructor(
    public id?: string,
    public kind?: string,
    public count?: string,
    public display?: string // (전체 웹 모바일) 데이터 들어와야함
  ) {}
}
export class BarDto {
  id?: string
  kind?: string
 count?: string
  display?: string

  constructor() {
    this.id = ''
    this.kind = ''
    this.count = ''
    this.display = ''
  }

  getBid(): string {
    return this.id!
  }
  setBid(id: string): void {
    this.id = id
  }
  getKind(): string {
    return this.kind!
  }
  setKind(kind: string): void {
    this.kind = kind
  }
  setCount(count: string): void {
    this.count = count
  }


  getDisplay(): string {
    return this.display!
  }
  setDisplay(display: string): void {
    this.display = display
  }

  toJson() {
    return {
      id: this.id,
      kind: this.kind,

      display: this.display
    }
  }
}

export class BarBuilder {
  private readonly instance: BarAtom
  constructor() {
    this.instance = {
      id: '',
      kind: '',
count: '',
      display: ''
    }
  }
  id(id: string): BarBuilder {
    this.instance.id = id
    return this
  }

  kind(kind: string): BarBuilder {
    this.instance.kind = kind
    return this
  }
count(count: string): BarBuilder {
    this.instance.count = count
    return this
  }
  display(display: string): BarBuilder {
    this.instance.display = display
    return this
  }

  build = (): BarAtom => this.instance
  transform = (): BarDto => {
    const { id, kind, display, count } = this.instance

    const d = new BarDto()
    d.setBid(id)
    d.setCount(count)
    d.setKind(kind)
    d.setDisplay(display)
    return d
  }
}

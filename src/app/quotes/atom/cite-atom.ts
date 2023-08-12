export class CiteAtom {
  constructor(public quickId?: string) {}
}

export class CiteDto {
  quickId?: string

  constructor() {
    this.quickId = ''
  }
  getQuickId(): string {
    return this.quickId!
  }
  setQuickId(quickId: string): void {
    this.quickId = quickId
  }

  toJson() {
    return {
      quickId: this.quickId
    }
  }
}

export class CiteBuilder {
  private readonly instance: CiteAtom
  constructor() {
    this.instance = {
      quickId: ''
    }
  }
  quickId(quickId: string): CiteBuilder {
    this.instance.quickId = quickId
    return this
  }

  transform(): CiteDto {
    const dto = new CiteDto()
    dto.setQuickId(this.instance.quickId)

    return dto
  }
  build(): CiteAtom {
    return this.instance
  }
}

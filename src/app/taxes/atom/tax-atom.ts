export class TaxAtom {
  constructor(public tid?: string) {}
}

export class TaxDto {
   tid?: string

  constructor() {
    this.tid = ''
  }
  getTid(): string {
    return this.tid!
  }
  setTid(tid: string): void {
    this.tid = tid
  }

  toJson() {
    return {
      tid: this.tid
    }
  }
}

export class TaxBuilder {
  private readonly instance: TaxAtom
  constructor() {
    this.instance = {
      tid: ''
    }
  }
  tid(tid: string): TaxBuilder {
    this.instance.tid = tid
    return this
  }

  transform(): TaxDto {
    const dto = new TaxDto()
    dto.setTid(this.instance.tid)

    return dto
  }
  build(): TaxAtom {
    return this.instance
  }
}

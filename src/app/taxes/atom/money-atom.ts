export class ApplyAtom {
  constructor(public applyId?: string) {}
}

export class ApplyDto {
   applyId?: string

  constructor() {
    this.applyId = ''
  }
  getApplyId(): string {
    return this.applyId!
  }
  setApplyId(applyId: string): void {
    this.applyId = applyId
  }

  toJson() {
    return {
      applyId: this.applyId
    }
  }
}

export class ApplyBuilder {
  private readonly instance: ApplyAtom
  constructor() {
    this.instance = {
      applyId: ''
    }
  }
  applyId(applyId: string): ApplyBuilder {
    this.instance.applyId = applyId
    return this
  }

  transform(): ApplyDto {
    const dto = new ApplyDto()
    if (typeof this.instance.applyId === 'string') {
      dto.setApplyId(this.instance.applyId)
    }

    return dto
  }
  build(): ApplyAtom {
    return this.instance
  }
}

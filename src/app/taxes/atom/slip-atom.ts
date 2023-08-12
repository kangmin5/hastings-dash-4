export class SlipAtom {
  constructor(public slipId?: string) {}
}

export class SlipDto {
   slipId?: string

  constructor() {
    this.slipId = ''
  }
  getSlipId(): string {
    return this.slipId!
  }
  setSlipId(slipId: string): void {
    this.slipId = slipId
  }

  toJson() {
    return {
      slipId: this.slipId
    }
  }
}

export class SlipBuilder {
  private readonly instance: SlipAtom
  constructor() {
    this.instance = {
      slipId: ''
    }
  }
  slipId(slipId: string): SlipBuilder {
    this.instance.slipId = slipId
    return this
  }

  transform(): SlipDto {
    const dto = new SlipDto()
    if (typeof this.instance.slipId === 'string') {
      dto.setSlipId(this.instance.slipId)
    }

    return dto
  }
  build(): SlipAtom {
    return this.instance
  }
}

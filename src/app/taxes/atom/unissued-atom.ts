export class UnissuedAtom {
  constructor(public unissuedId?: string) {}
}

export class UnissuedDto {
   unissuedId?: string

  constructor() {
    this.unissuedId = ''
  }
  getUnissuedId(): string {
    return this.unissuedId!
  }
  setUnissuedId(unissuedId: string): void {
    this.unissuedId = unissuedId
  }

  toJson() {
    return {
      unissuedId: this.unissuedId
    }
  }
}

export class UnissuedBuilder {
  private readonly instance: UnissuedAtom
  constructor() {
    this.instance = {
      unissuedId: ''
    }
  }
  unissuedId(unissuedId: string): UnissuedBuilder {
    this.instance.unissuedId = unissuedId
    return this
  }

  transform(): UnissuedDto {
    const dto = new UnissuedDto()
    dto.setUnissuedId(this.instance.unissuedId)

    return dto
  }
  build(): UnissuedAtom {
    return this.instance
  }
}

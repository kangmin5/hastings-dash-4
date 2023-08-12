export class TarAtom {
  constructor(public id?: string) {}
}

export class TarDto {
   id?: string

  constructor() {
    this.id = ''
  }
  getTarId(): string {
    return this.id!
  }
  setTarId(id: string): void {
    this.id = id
  }

  toJson() {
    return {
      id: this.id
    }
  }
}

export class TarBuilder {
  private readonly instance: TarAtom
  constructor() {
    this.instance = {
      id: ''
    }
  }
  id(id: string): TarBuilder {
    this.instance.id = id
    return this
  }

  transform(): TarDto {
    const dto = new TarDto()
    if (typeof this.instance.id === 'string') {
      dto.setTarId(this.instance.id)
    }

    return dto
  }
  build(): TarAtom {
    return this.instance
  }
}

export class PictureAtom {
  constructor(public name?: string) {}
}

export class PictureDto {
  protected name?: string

  constructor() {
    this.name = ''
  }
  getName(): string {
    return this.name!
  }
  setName(name: string): void {
    this.name = name
  }

  toJson() {
    return {
      name: this.name
    }
  }
}

export class PictureBuilder {
  private readonly instance: PictureAtom
  constructor() {
    this.instance = {
      name: ''
    }
  }
  name(name: string): PictureBuilder {
    this.instance.name = name
    return this
  }

  transform(): PictureDto {
    const dto = new PictureDto()
    dto.setName(this.instance.name)

    return dto
  }
  build(): PictureAtom {
    return this.instance
  }
}

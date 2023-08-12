export class QuadAtom {
  constructor(public id?: string) {}
}

export class QuadDto {
   id?: string

  constructor() {
    this.id = ''
  }
  getId(): string {
    return this.id!
  }
  setId(id: string): void {
    this.id = id
  }

  toJson() {
    return {
      id: this.id
    }
  }
}

export class QuadBuilder {
  private readonly instance: QuadAtom
  constructor() {
    this.instance = {
      id: ''
    }
  }
  id(id: string): QuadBuilder {
    this.instance.id = id
    return this
  }

  transform(): QuadDto {
    const d = new QuadDto()
    d.setId(this.instance.id)

    return d
  }
  build(): QuadAtom {
    return this.instance
  }
}

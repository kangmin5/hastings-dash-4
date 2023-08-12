export class SoarAtom {
  constructor(public id?: string) {}
}

export class SoarDto {
   id?: string

  constructor() {
    this.id = ''
  }

  getSid(): string {
    return this.id!
  }
  setSid(id: string): void {
    this.id = id
  }


  toJson() {
    return {
      id: this.id,
    }
  }
}

export class SoarBuilder {
  private readonly instance: SoarAtom
  constructor() {
    this.instance = {
      id: '',
    }
  }
  id(id: string): SoarBuilder {
    this.instance.id = id
    return this
  }


  transform(): SoarDto {
    const dto = new SoarDto()
    dto.setSid(this.instance.id)


    return dto
  }
  build(): SoarAtom {
    return this.instance
  }
}

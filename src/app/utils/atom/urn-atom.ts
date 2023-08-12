export class UrnAtom {
  constructor(public id?: string,
    
    ) {}
}

export class UrnDto {
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

export class UrnBuilder {
  private readonly instance: UrnAtom
  constructor() {
    this.instance = {
      id: '',
    }
  }
  id(id: string): UrnBuilder {
    this.instance.id = id
    return this
  }


  transform(): UrnDto {
    const dto = new UrnDto()
    dto.setSid(this.instance.id)


    return dto
  }
  build(): UrnAtom {
    return this.instance
  }
}

export class CatAtom {
  constructor(public catId?: string,
    public category?: string,) {}
}

export class CatDto {
   catId?: string
    category?: string

  constructor() {
    this.catId = ''
    this.category = ''
  }
  getCatId(): string {
    return this.catId!
  }
  setCatId(catId: string): void {
    this.catId = catId
  }
  setCategory(category: string): void {
    this.category = category
  }

  toJson() {
    return {
      catId: this.catId,
      category: this.category
      
    }
  }
}

export class CatBuilder {
  private readonly instance: CatAtom
  constructor() {
    this.instance = {
      catId: '',
      category: ''
    }
  }
  catId(catId: string): CatBuilder {
    this.instance.catId = catId
    return this
  }
  category(category: string): CatBuilder {
    this.instance.category = category
    return this
  }

  transform(): CatDto {
    const dto = new CatDto()
    dto.setCatId(this.instance.catId)
    dto.setCategory(this.instance.category)

    return dto
  }
  build(): CatAtom {
    return this.instance
  }
}

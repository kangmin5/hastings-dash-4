export class FacetAtom {
  constructor(
    public isDisplayed?: string,
    public isSelling?: string,
    public orderCount?: string,
    ) {}
}

export class FacetDto {
  isDisplayed?: string
  isSelling?: string
  orderCount?: string

  constructor() {
    this.isDisplayed = ''
    this.isSelling = ''
    this.orderCount = ''
  }

  getIsDisplayed(): string {
    return this.isDisplayed!
  }
  setIsDisplayed(isDisplayed: string): void {
    this.isDisplayed = isDisplayed!
  }
  getIsSelling(): string {
    return this.isSelling!
  }
  setIsSelling(isSelling: string): void {
    this.isSelling = isSelling!
  }
  getOrderCount(): string {
    return this.orderCount!
  }
  setOrderCount(orderCount: string): void {
    this.orderCount = orderCount!
  }
  toJson() {
    return {
      isDisplayed: this.isDisplayed,
      isSelling: this.isSelling,
      orderCount: this.orderCount
    }
  }
}

export class FacetBuilder {
  private readonly instance: FacetAtom
  constructor() {
    this.instance = {
      isDisplayed: '',
      isSelling: '',
      orderCount: ''
    }
  }
  isDisplayed(isDisplayed: string): FacetBuilder {
    this.instance.isDisplayed = isDisplayed
    return this
  }
  isSelling(isSelling: string): FacetBuilder {
    this.instance.isSelling = isSelling
    return this
  }
  orderCount(orderCount: string): FacetBuilder {
    this.instance.orderCount = orderCount
    return this
  }

  transform(): FacetDto {
    const dto = new FacetDto()
    dto.setIsDisplayed(this.instance.isDisplayed)
    dto.setIsSelling(this.instance.isSelling)
    dto.setOrderCount(this.instance.orderCount)

    return dto
  }
  build(): FacetAtom {
    return this.instance
  }
}

export class BasketAtom {
  constructor() {}
}

export class BasketDto {


  constructor() {

  }

  toJson() {
    return {

    }
  }
}

export class BasketBuilder {
  private readonly instance: BasketAtom
  constructor() {
    this.instance = {

    }
  }

  transform(): BasketDto {
    const dto = new BasketDto()

    return dto
  }
  build(): BasketAtom {
    return this.instance
  }
}

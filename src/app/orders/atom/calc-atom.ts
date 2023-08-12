export class CalcAtom {
  constructor(
    public lastOrderAmount?: string,
    public orderCountPerUser?: string,
    public orderAmount?: string,
  ) {}
}

export class CalcDto {
  lastOrderAmount?: string
  orderCountPerUser?: string
  orderAmount?: string


  constructor() {
    this.lastOrderAmount = ''
    this.orderCountPerUser = ''
    this.orderAmount = ''
  }
  setLastOrderAmount(lastOrderAmount: string): void {
    this.lastOrderAmount = lastOrderAmount
  }
  setOrderCountPerUser(orderCountPerUser: string): void {
    this.orderCountPerUser = orderCountPerUser
  }
  setOrderAmount(orderAmount: string): void {
    this.orderAmount = orderAmount
  }
  toJson() {
    return {
      lastOrderAmount: this.lastOrderAmount,
      orderCountPerUser: this.orderCountPerUser,
      orderAmount: this.orderAmount,
    }
  }
}

export class CalcBuilder {
  private readonly instance: CalcAtom
  constructor() {
    this.instance = {
      lastOrderAmount: '',
      orderCountPerUser: '',
      orderAmount: '',
    }
  }
  lastOrderAmount(lastOrderAmount: string): CalcBuilder {
    this.instance.lastOrderAmount = lastOrderAmount
    return this
  }
  orderCountPerUser(orderCountPerUser: string): CalcBuilder {
    this.instance.orderCountPerUser = orderCountPerUser
    return this
  }
  orderAmount(orderAmount: string): CalcBuilder {
    this.instance.orderAmount = orderAmount
    return this
  }

  transform(): CalcDto {
    const d = new CalcDto()
    d.setLastOrderAmount(this.instance.lastOrderAmount)
    d.setOrderCountPerUser(this.instance.orderCountPerUser)
    d.setOrderAmount(this.instance.orderAmount)
    return d
  }
  build(): CalcAtom {
    return this.instance
  }
}

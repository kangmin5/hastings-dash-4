export class TodayAtom {
  constructor(

    public orderAmount?: string,
    public orderCount?: string,
    public payAmount?: string

    ) {}
}

export class TodayDto {
   orderAmount?: string
    orderCount?: string
    payAmount?: string

  constructor() {
    this.orderAmount = '',
    this.orderCount = '',
    this.payAmount = ''
  }
  getPayId(): string {
    return this.orderAmount!
  }
  setPayId(orderAmount: string): void {
    this.orderAmount = orderAmount
  }
  setOrderCount(orderCount: string): void {
    this.orderCount = orderCount
  }
  setPayAmount(payAmount: string): void {
    this.payAmount = payAmount
  }

  toJson() {
    return {
      orderAmount: this.orderAmount,
      orderCount: this.orderCount,
      payAmount: this.payAmount,
    }
  }
}

export class TodayBuilder{
  private readonly instance: TodayAtom
  constructor() {
    this.instance = {
      orderAmount: '',
      orderCount: '',
      payAmount: ''
    }
  }
  orderAmount(orderAmount: string): TodayBuilder{
    this.instance.orderAmount = orderAmount
    return this
  }
  orderCount(orderCount: string): TodayBuilder{
    this.instance.orderCount = orderCount
    return this
  }
  payAmount(payAmount: string): TodayBuilder{
    this.instance.payAmount = payAmount
    return this
  }

  transform(): TodayDto {
    const d = new TodayDto()
    if (typeof this.instance.orderAmount === 'string') {
      d.setPayId(this.instance.orderAmount)
    }
    d.setOrderCount(this.instance.orderCount)
    d.setPayAmount(this.instance.payAmount)
    

    return d
  }
  build(): TodayAtom {
    return this.instance
  }
}

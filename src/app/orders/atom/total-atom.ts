export class TotalAtom {
  constructor(
    public cancelCount?: string,
    public orderAmount?: string,
    public orderCount?: string,
    public payAmount?: string,
    public articleCount?: string,
    public rewardPoint?: string,
    ) {}
}

export class TotalDto {
   cancelCount?: string
    orderAmount?: string
    orderCount?: string
    payAmount?: string
    articleCount?: string
    rewardPoint?: string

  constructor() {
    this.cancelCount = ''
    this.orderAmount = ''
    this.orderCount = ''
    this.payAmount = ''
    this.articleCount = ''
    this.rewardPoint = ''
  }

  setCancelCount(cancelCount: string): void {
    this.cancelCount = cancelCount
  }
  setOrderAmount(orderAmount: string): void {
    this.orderAmount = orderAmount
  }
  setOrderCount(orderCount: string): void {
    this.orderCount = orderCount
  }
  setPayAmount(payAmount: string): void {
    this.payAmount = payAmount
  }
  setArticleCount(articleCount: string): void {
    this.articleCount = articleCount
  }
  setRewardPoint(rewardPoint: string): void {
    this.rewardPoint = rewardPoint
  }


  toJson() {
    return {
      cancelCount: this.cancelCount,
      orderAmount: this.orderAmount,
      orderCount: this.orderCount,
      payAmount: this.payAmount,
      articleCount: this.articleCount,
      rewardPoint: this.rewardPoint,
    }
  }
}

export class TotalBuilder{
  private readonly instance: TotalAtom
  constructor() {
    this.instance = {
      cancelCount: '',
      orderAmount: '',
      orderCount: '',
      payAmount: '',
      articleCount: '',
      rewardPoint: '',
    }
  }
  cancelCount(cancelCount: string): TotalBuilder{
    this.instance.cancelCount = cancelCount
    return this
  }
  orderAmount(orderAmount: string): TotalBuilder{
    this.instance.orderAmount = orderAmount
    return this
  }
  orderCount(orderCount: string): TotalBuilder{
    this.instance.orderCount = orderCount
    return this
  }
  payAmount(payAmount: string): TotalBuilder{
    this.instance.payAmount = payAmount
    return this
  }
  articleCount(articleCount: string): TotalBuilder{
    this.instance.articleCount = articleCount
    return this
  }
  rewardPoint(rewardPoint: string): TotalBuilder{
    this.instance.rewardPoint = rewardPoint
    return this
  }

  transform(): TotalDto {
    const d = new TotalDto()
    d.setCancelCount(this.instance.cancelCount)
    d.setOrderCount(this.instance.orderAmount)
    d.setPayAmount(this.instance.orderCount)
    d.setPayAmount(this.instance.payAmount)
    d.setArticleCount(this.instance.articleCount)
    d.setRewardPoint(this.instance.rewardPoint)


    return d
  }
  build(): TotalAtom {
    return this.instance
  }
}

export class RefundAtom {
  constructor(public refundId?: string) {}
}

export class RefundDto {
   refundId?: string

  constructor() {
    this.refundId = ''
  }
  getRefundId(): string {
    return this.refundId!
  }
  setRefundId(refundId: string): void {
    this.refundId = refundId
  }

  toJson() {
    return {
      refundId: this.refundId
    }
  }
}

export class RefundBuilder {
  private readonly instance: RefundAtom
  constructor() {
    this.instance = {
      refundId: ''
    }
  }
  refundId(refundId: string): RefundBuilder {
    this.instance.refundId = refundId
    return this
  }

  transform(): RefundDto {
    const dto = new RefundDto()
    dto.setRefundId(this.instance.refundId)

    return dto
  }
  build(): RefundAtom {
    return this.instance
  }
}

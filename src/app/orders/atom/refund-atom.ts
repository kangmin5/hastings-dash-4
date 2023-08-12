export class RefundAtom {
    constructor(public refundNo?: string) {}
  }
  
  export class RefundDto {
     refundNo?: string
  
    constructor() {
      this.refundNo = ''
    }
    getPayId(): string {
      return this.refundNo!
    }
    setPayId(refundNo: string): void {
      this.refundNo = refundNo
    }
  
    toJson() {
      return {
        refundNo: this.refundNo
      }
    }
  }
  
  export class RefundBuilder{
    private readonly instance: RefundAtom
    constructor() {
      this.instance = {
        refundNo: ''
      }
    }
    refundNo(refundNo: string): RefundBuilder{
      this.instance.refundNo = refundNo
      return this
    }
  
    transform(): RefundDto {
      const dto = new RefundDto()
      if (typeof this.instance.refundNo === 'string') {
        dto.setPayId(this.instance.refundNo)
      }
  
      return dto
    }
    build(): RefundAtom {
      return this.instance
    }
  }
  
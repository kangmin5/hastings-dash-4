export class FeeAtom {
  constructor(
    public feeNo?: string,
    public payMethod?: string,
    ) {}
}

export class FeeDto {
   feeNo?: string
   payMethod?: string


  constructor() {
    this.feeNo = ''
    this.payMethod = ''
  }
  getFeeNo(): string {
    return this.feeNo!
  }
  setFeeNo(feeNo: string): void {
    this.feeNo = feeNo
  }
  getPayMethod(): string {
    return this.payMethod!
  }
  setPayMethod(payMethod: string): void {
    this.payMethod = payMethod
  }

  toJson() {
    return {
      feeNo: this.feeNo,
      payMethod: this.payMethod,
    }
  }
}

export class FeeBuilder{
  private readonly instance: FeeAtom
  constructor() {
    this.instance = {
      feeNo: '',
      payMethod: '',
    }
  }
  feeNo(feeNo: string): FeeBuilder{
    this.instance.feeNo = feeNo
    return this
  }
  payMethod(payMethod: string): FeeBuilder{
    this.instance.payMethod = payMethod
    return this
  }

  transform(): FeeDto {
    const d = new FeeDto()
    d.setFeeNo(this.instance.feeNo!)
    d.setPayMethod(this.instance.payMethod!)
    return d
  }
  build(): FeeAtom {
    return this.instance
  }
}

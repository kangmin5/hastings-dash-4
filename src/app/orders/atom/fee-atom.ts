export class FeeAtom {
  constructor(
    public feeNo?: string,
    public payMethod?: string,
    public payStatus?: string,
    ) {}
}

export class FeeDto {
   feeNo?: string
   payMethod?: string
   payStatus?: string


  constructor() {
    this.feeNo = ''
    this.payMethod = ''
    this.payStatus
  }

  setFeeNo(feeNo: string): void {
    this.feeNo = feeNo
  }

  setPayMethod(payMethod: string): void {
    this.payMethod = payMethod
  }

  setPayStatus(payStatus: string): void {
    this.payStatus = payStatus
  }

  toJson() {
    return {
      feeNo: this.feeNo,
      payMethod: this.payMethod,
      payStatus: this.payStatus
    }
  }
}

export class FeeBuilder{
  private readonly instance: FeeAtom
  constructor() {
    this.instance = {
      feeNo: '',
      payMethod: '',
      payStatus: ''
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
  payStatus(payStatus: string): FeeBuilder{
    this.instance.payStatus = payStatus
    return this
  }

  transform(): FeeDto {
    const d = new FeeDto()
    d.setFeeNo(this.instance.feeNo!)
    d.setPayMethod(this.instance.payMethod!)
    d.setPayStatus(this.instance.payStatus!)
    return d
  }
  build(): FeeAtom {
    return this.instance
  }
}

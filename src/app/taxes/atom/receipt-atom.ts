export class ReceiptAtom {
  constructor(

    public kind?: string,
    public cashReceipt?: string,

    ) {}
}

/*
서버에서 받은 데이터
id
fourTypes
title
createdAt
isAnswered
requestDetails
purchaseOrderSummary
	id
	createdAt
	transactionNumber
	imageUrl
	productName
	totalAmount
	answer
*/

export class ReceiptDto {
   kind: string
   cashReceipt: string

  constructor() {
    this.kind = ''
    this.cashReceipt = ''
  }

  setKind(kind: string): void {
    this.kind = kind
  }
  setCashReceipt(cashReceipt: string): void {
    this.cashReceipt = cashReceipt
  }

  toJson() {
    return {
      kind: this.kind,
      cashReceipt: this.cashReceipt
    }
  }
}

export class ReceiptBuilder {
  private readonly instance: ReceiptAtom

  constructor() {
    this.instance = {
      kind: '',
      cashReceipt: ''
    }
  }
  kind = (kind: string): ReceiptBuilder => {
    this.instance.kind = kind

    return this
  }
  cashReceipt = (cashReceipt: string): ReceiptBuilder => {
    this.instance.cashReceipt = cashReceipt
    return this
  }

  build = (): ReceiptAtom => this.instance

  transform = (): ReceiptDto => {
    const d = new ReceiptDto()
    d.setKind(this.instance.kind)
    d.setCashReceipt(this.instance.cashReceipt)

    return d
  }
}

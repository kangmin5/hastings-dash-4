export class ReceiptAtom {
  constructor(

    public kind?: string) {}
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

  constructor() {
    this.kind = ''
  }
  getKind(): string {
    return this.kind
  }
  setKind(kind: string): void {
    this.kind = kind
  }

  toJson() {
    return {
      kind: this.kind
    }
  }
}

export class ReceiptBuilder {
  private readonly instance: ReceiptAtom

  constructor() {
    this.instance = {
      kind: ''
    }
  }
  kind = (kind: string): ReceiptBuilder => {
    this.instance.kind = kind

    return this
  }

  build = (): ReceiptAtom => this.instance

  transform = (): ReceiptDto => {
    const d = new ReceiptDto()
    d.setKind(this.instance.kind)

    return d
  }
}

export class OarAtom {
  constructor(public id?: string, public orderNo?: string, public status?: string,
    public orderLog?: string,
    public qty?: string) {}
}
export class OarDto {
  id?: string
  orderNo?: string
  status?: string
  qty?: string
  orderLog?: string

  constructor() {
    this.id = ''
    this.orderNo = ''
    this.status = ''
    this.qty = ''
    this.orderLog = ''
  }

  setId(id: string): void {
    this.id = id
  }

  setOrderNo(orderNo: string): void {
    this.orderNo = orderNo
  }

  setStatus(status: string): void {
    this.status = status
  }

  setQty(qty: string): void {
    this.qty = qty
  }

  setOrderLog(orderLog: string): void {
    this.orderLog = orderLog
  }

  toJson() {
    return {
      id: this.id,
      orderNo: this.orderNo,
      status: this.status,
      qty: this.qty,
      orderLog: this.orderLog
    }
  }
}

export class OarBuilder {
  private readonly instance: OarAtom
  constructor() {
    this.instance = {
      id: '',
      orderNo: '',
      status: '',
      qty: '',
      orderLog: ''
    }
  }
  id(id: string): OarBuilder {
    this.instance.id = id
    return this
  }
  orderNo(orderNo: string): OarBuilder {
    this.instance.orderNo = orderNo
    return this
  }
  status(status: string): OarBuilder {
    this.instance.status = status
    return this
  }
  orderLog(orderLog: string): OarBuilder {
    this.instance.orderLog = orderLog
    return this
  }
  qty(qty: string): OarBuilder {
    this.instance.qty = qty
    return this
  }

  transform(): OarDto {
    const d = new OarDto()
    d.setId(this.instance.id)
    d.setOrderNo(this.instance.orderNo)
    d.setStatus(this.instance.status)
    d.setQty(this.instance.qty)
    d.setOrderLog(this.instance.orderLog)

    return d
  }
  build(): OarAtom {
    return this.instance
  }
}

export class OarAtom {
  constructor(public id?: string, public orderNo?: string, public status?: string, public qty?: string) {}
}
export class OarDto {
  id?: string
  orderNo?: string
  status?: string
  qty?: string

  constructor() {
    this.id = ''
    this.orderNo = ''
    this.status = ''
    this.qty = ''
  }
  getId(): string {
    return this.id!
  }
  setId(id: string): void {
    this.id = id
  }
  getOrderNo(): string {
    return this.orderNo!
  }
  setOrderNo(orderNo: string): void {
    this.orderNo = orderNo
  }
  getStatus(): string {
    return this.status!
  }
  setStatus(status: string): void {
    this.status = status
  }
  getQty(): string {
    return this.qty!
  }
  setQty(qty: string): void {
    this.qty = qty
  }

  toJson() {
    return {
      id: this.id,
      orderNo: this.orderNo,
      status: this.status,
      qty: this.qty
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
      qty: ''
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

    return d
  }
  build(): OarAtom {
    return this.instance
  }
}

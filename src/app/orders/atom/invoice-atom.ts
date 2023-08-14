export class InvoiceAtom {
  constructor(
    public invoiceNo?: string,
    public invoiceKind?: string,
    ) {}
}

export class InvoiceDto {
   invoiceNo?: string
   invoiceKind?: string


  constructor() {
    this.invoiceNo = ''
    this.invoiceKind = ''
  }

  setInvoiceNo(invoiceNo: string): void {
    this.invoiceNo = invoiceNo
  }

  setInvoiceKind(invoiceKind: string): void {
    this.invoiceKind = invoiceKind
  }


  toJson() {
    return {
      invoiceNo: this.invoiceNo,
      invoiceKind: this.invoiceKind,
    }
  }
}

export class InvoiceBuilder{
  private readonly instance: InvoiceAtom
  constructor() {
    this.instance = {
      invoiceNo: '',
      invoiceKind: '',

    }
  }
  invoiceNo(invoiceNo: string): InvoiceBuilder{
    this.instance.invoiceNo = invoiceNo
    return this
  }
  invoiceKind(invoiceKind: string): InvoiceBuilder{
    this.instance.invoiceKind = invoiceKind
    return this
  }


  transform(): InvoiceDto {
    const d = new InvoiceDto()
    d.setInvoiceNo(this.instance.invoiceNo!)
    d.setInvoiceKind(this.instance.invoiceKind!)
    return d
  }
  build(): InvoiceAtom {
    return this.instance
  }
}

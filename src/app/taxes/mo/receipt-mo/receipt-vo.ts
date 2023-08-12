import { ReceiptAtom, ReceiptBuilder } from "app/taxes/atom/receipt-atom";
import { TarAtom, TarBuilder, TarDto } from "app/taxes/atom/tar-atom";

export class ReceiptVo{
  constructor(
    public tar?: TarAtom,
    public receipt?: ReceiptAtom,


  ){}
}

export class ReceiptTo{
  protected tar?: TarDto
  protected receipt?: ReceiptAtom

  setTar(tar: TarAtom): void {
    this.tar = new TarBuilder()
    .id(tar.id)
    .transform()
  }
  setReceipt(receipt: ReceiptAtom): void {
    this.receipt = new ReceiptBuilder()
    .kind(receipt.kind)
    .transform()
  }

  toJson(){
    return {
      tar: this.tar!.toJson()
    }
  }
}

export class ReceiptBo{
  private readonly instance: ReceiptVo

  constructor(){
    this.instance = {
      tar: new TarAtom(),
      receipt: new ReceiptAtom()
    }
  }

  tar(a: TarAtom): ReceiptBo{
    this.instance.tar = a
    return this
  }
  receipt(a : ReceiptAtom): ReceiptBo{
    this.instance.receipt = a
    return this
  }

  build(): ReceiptVo{
    return this.instance
  }
  transform(): ReceiptTo{
    const to = new ReceiptTo()
    to.setTar(this.instance.tar)
    to.setReceipt(this.instance.receipt)
    return to
  }

}

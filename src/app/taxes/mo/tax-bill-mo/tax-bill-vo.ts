import { TarAtom, TarBuilder, TarDto } from "app/taxes/atom/tar-atom";

export class TaxBillVo{
  constructor(
    public tar?: TarAtom,

  ){}
}

export class TaxBillTo{
  protected tar?: TarDto

  setTar(tar: TarAtom): void {
    this.tar = new TarBuilder()
    .id(tar.id)
    .transform()
  }

  toJson(){
    return {
      tar: this.tar!.toJson()
    }
  }
}
export class TaxBillBo {
  private readonly instance: TaxBillVo

  constructor() {
    this.instance = {
      tar: new TarAtom(),
    }
  }

  tar(tar: TarAtom): TaxBillBo {
    this.instance.tar = tar
    return this
  }


  build(): TaxBillVo {
    return this.instance
  }
  transform(): TaxBillTo {
    const to = new TaxBillTo()
    to.setTar(this.instance.tar)
    return to
  }
}

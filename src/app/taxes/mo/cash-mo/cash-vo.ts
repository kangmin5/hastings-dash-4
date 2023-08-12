import { CashAtom, CashBuilder, CashDto } from "app/taxes/atom/cash-atom";
import { TarAtom, TarBuilder, TarDto } from "app/taxes/atom/tar-atom";

export class CashVo{
  constructor(
    public tar?: TarAtom,

  ){}
}

export class CashTo{
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

export class CashBo{
  private readonly instance: CashVo

  constructor(){
    this.instance = {
      tar: new TarAtom()
    }
  }

  tar(tar: TarAtom): CashBo{
    this.instance.tar = tar
    return this
  }

  build(): CashVo{
    return this.instance
  }
  transform(): CashTo{
    const to = new CashTo()
    to.setTar(this.instance.tar)
    return to
  }

}

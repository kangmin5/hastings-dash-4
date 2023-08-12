import { TarAtom, TarBuilder, TarDto } from "app/taxes/atom/tar-atom";

export class RefundVo{
  constructor(
    public tar?: TarAtom,

  ){}
}

export class RefundTo{
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

export class RefundBo{
  private readonly instance: RefundVo

  constructor(){
    this.instance = {
      tar: new TarAtom()
    }
  }

  tar(tar: TarAtom): RefundBo{
    this.instance.tar = tar
    return this
  }

  build(): RefundVo{
    return this.instance
  }
  transform(): RefundTo{
    const to = new RefundTo()
    to.setTar(this.instance.tar)
    return to
  }

}

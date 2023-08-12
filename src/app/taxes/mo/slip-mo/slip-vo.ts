import { TarAtom, TarBuilder, TarDto } from "app/taxes/atom/tar-atom";

export class SlipVo{
  constructor(
    public tar?: TarAtom,

  ){}
}

export class SlipTo{
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

export class SlipBo{
  private readonly instance: SlipVo

  constructor(){
    this.instance = {
      tar: new TarAtom()
    }
  }

  tar(tar: TarAtom): SlipBo{
    this.instance.tar = tar
    return this
  }

  build(): SlipVo{
    return this.instance
  }
  transform(): SlipTo{
    const to = new SlipTo()
    to.setTar(this.instance.tar)
    return to
  }

}

import { TarAtom, TarBuilder, TarDto } from "app/taxes/atom/tar-atom"

export class CardVo{
  constructor(
    public tar?: TarAtom,

  ){}
}

export class CardTo{
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

export class CardBo{
  private readonly instance: CardVo

  constructor(){
    this.instance = {
      tar: new TarAtom()
    }
  }

  tar(tar: TarAtom): CardBo{
    this.instance.tar = tar
    return this
  }

  build(): CardVo{
    return this.instance
  }
  transform(): CardTo{
    const to = new CardTo()
    to.setTar(this.instance.tar)
    return to
  }

}




import { ApplyAtom, ApplyBuilder, ApplyDto } from 'app/taxes/atom/money-atom'
import { TarAtom, TarBuilder, TarDto } from 'app/taxes/atom/tar-atom'

export class ApplyVo {
  constructor(public tar?: TarAtom) {}
}

export class ApplyTo {
  protected tar?: TarDto

  setTar(a: TarAtom): void {
    this.tar = new TarBuilder().id(a.id).transform()
  }

  toJson() {
    return {
      tar: this.tar!.toJson()
    }
  }
}

export class ApplyBo {
  private readonly instance: ApplyVo

  constructor() {
    this.instance = {
      tar: new TarAtom()
    }
  }

  tar(tar: TarAtom): ApplyBo {
    this.instance.tar = tar
    return this
  }

  build(): ApplyVo {
    return this.instance
  }
  transform(): ApplyTo {
    const to = new ApplyTo()
    to.setTar(this.instance.tar)
    return to
  }
}

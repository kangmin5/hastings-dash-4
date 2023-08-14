import { DepositAtom, DepositBuilder, DepositDto } from 'app/taxes/atom/deposit-atom'
import { TarAtom, TarBuilder, TarDto } from 'app/taxes/atom/tar-atom'

export class BankVo {
  constructor(public tar?: TarAtom) {}
}

export class BankTo {
  protected tar?: TarDto

  setBank(tar: TarAtom): void {
    this.tar = new TarBuilder().id(tar.id).transform()
  }

  toJson() {
    return {
      tar: this.tar!.toJson()
    }
  }
}

export class BankBo {
  private readonly instance: BankVo

  constructor() {
    this.instance = {
      tar: new TarAtom()
    }
  }

  tar(tar: TarAtom): BankBo {
    this.instance.tar = tar
    return this
  }

  build(): BankVo {
    return this.instance
  }
  transform(): BankTo {
    const to = new BankTo()
    to.setBank(this.instance.tar)
    return to
  }
}

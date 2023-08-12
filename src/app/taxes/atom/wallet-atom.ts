export class WalletAtom {
  constructor(

    public deposit?: string,

    ) {}
}

export class WalletDto {
    deposit?: string

  constructor() {
    this.deposit = ''
  }


  setDeposit(deposit: string): void {
    this.deposit = deposit
  }

  toJson() {
    return {
      deposit: this.deposit
    }
  }
}

export class WalletBuilder {
  private readonly instance: WalletAtom
  constructor() {
    this.instance = {
      deposit: ''
    }
  }

  deposit(deposit: string): WalletBuilder {
    this.instance.deposit = deposit
    return this
  }

  transform(): WalletDto {
    const d = new WalletDto()
      d.setDeposit(this.instance.deposit)

    return d
  }
  build(): WalletAtom {
    return this.instance
  }
}

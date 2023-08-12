export class BankAtom {
  constructor(

    public bankId?: string,
    public deposit?: string,

    ) {}
}

export class BankDto {
   bankId?: string
    deposit?: string

  constructor() {
    this.bankId = '',
    this.deposit = ''
  }

  setBankId(bankId: string): void {
    this.bankId = bankId
  }
  setDeposit(deposit: string): void {
    this.deposit = deposit
  }

  toJson() {
    return {
      bankId: this.bankId,
      deposit: this.deposit
    }
  }
}

export class BankBuilder {
  private readonly instance: BankAtom
  constructor() {
    this.instance = {
      bankId: '',
      deposit: ''
    }
  }
  bankId(bankId: string): BankBuilder {
    this.instance.bankId = bankId
    return this
  }
  deposit(deposit: string): BankBuilder {
    this.instance.deposit = deposit
    return this
  }

  transform(): BankDto {
    const d = new BankDto()
      d.setBankId(this.instance.bankId)
      d.setDeposit(this.instance.deposit)

    return d
  }
  build(): BankAtom {
    return this.instance
  }
}

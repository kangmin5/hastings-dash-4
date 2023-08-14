export class DepositAtom {
  constructor(
    public accountNo?: string,
    public money?: string,
    public balance?: string,
    public bank?: string,
    public owner?: string,
    public depositor?: string,
    ) {}
}

export class DepositDto {
  accountNo?: string
  money?: string
  balance?: string
  bank?: string
  owner?: string
  depositor?: string

  constructor() {
    this.accountNo = ''
    this.money = ''
    this.balance = ''
    this.bank = ''
    this.owner = ''
    this.depositor = ''
  }

  setAccountNo(accountNo: string): void {
    this.accountNo = accountNo
  }

  setMoney(money: string): void {
    this.money = money
  }
  setBalance(balance: string): void {
    this.balance = balance
  }
  setBank(bank: string): void {
    this.bank = bank
  }
  setOwner(owner: string): void {
    this.owner = owner
  }
  setDepositor(depositor: string): void {
    this.depositor = depositor
  }

  toJson() {
    return {
      accountNo: this.accountNo,
      money: this.money,
      balance: this.balance,
      bank: this.bank,
      owner: this.owner,
      depositor: this.depositor
    }
  }
}

export class DepositBuilder {
  private readonly instance: DepositAtom
  constructor() {
    this.instance = {
      accountNo: '',
      money: '',
      balance: '',
      bank: '',
      owner: '',
      depositor: ''
    }
  }
  accountNo(accountNo: string): DepositBuilder {
    this.instance.accountNo = accountNo
    return this
  }

  money(money: string): DepositBuilder {
    this.instance.money = money
    return this
  }
  balance(balance: string): DepositBuilder {
    this.instance.balance = balance
    return this
  }
  bank(bank: string): DepositBuilder {
    this.instance.bank = bank
    return this
  }
  owner(owner: string): DepositBuilder {
    this.instance.owner = owner
    return this
  }
  depositor(depositor: string): DepositBuilder {
    this.instance.depositor = depositor
    return this
  }


  transform(): DepositDto {
    const d = new DepositDto()
    d.setAccountNo(this.instance.accountNo)
      d.setMoney(this.instance.money)
      d.setBalance(this.instance.balance)
      d.setBank(this.instance.bank)
      d.setOwner(this.instance.owner)
      d.setDepositor(this.instance.depositor)

    return d
  }
  build(): DepositAtom {
    return this.instance
  }
}

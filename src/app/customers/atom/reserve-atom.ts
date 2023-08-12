export class ReserveAtom {
  constructor(
    public kind?: string,
    public point?: string,
    public balance?: string) {}
}

export class ReserveDto {
   kind?: string;
   point?: string;
   balance?: string

  constructor() {
    this.balance = ''
    this.kind = "";
    this.point = "";
  }
  getBalance(): string {
    return this.balance!
  }
  setBalance(balance: string): void {
    this.balance = balance
  }
  setKind(kind: string): void {
    this.kind = kind;
}
setPoint(point: string): void {
  this.point = point;
}


  toJson() {
    return {
      balance: this.balance,
      kind: this.kind,
      point: this.point,
    }
  }
}

export class ReserveBuilder {
  private readonly instance: ReserveAtom
  constructor() {
    this.instance = {
      balance: '',
      kind: "",

      point: "",
      
    }
  }
  balance(balance: string): ReserveBuilder {
    this.instance.balance = balance
    return this
  }
  point(point: string): ReserveBuilder {
    this.instance.point = point;
    return this;
  }
  kind(kind: string): ReserveBuilder {
    this.instance.kind = kind;
    return this;
  }

  transform(): ReserveDto {
    const d = new ReserveDto()
    d.setBalance(this.instance.balance)
    d.setKind(this.instance.kind);
    d.setPoint(this.instance.point);
    return d
  }
  build(): ReserveAtom {
    return this.instance
  }
}

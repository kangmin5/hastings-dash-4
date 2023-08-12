export class DoorAtom {
  constructor(
    public id?: string, 
    public fee?: string,
    public status?: string,
    public kind?: string,
    ) {}
}

export class DoorDto {
  id?: string
  fee?: string
  status?: string
  kind?: string

  constructor() {
    this.id = ''
    this.fee = ''
    this.status = ''
    this.kind = ''
  }

  setId(id: string): void {
    this.id = id
  }

  setFee(fee: string): void {
    this.fee = fee
  }

  setStatus(status: string): void {
    this.status = status
  }
  setKind(kind: string): void {
    this.kind = kind
  }

  toJson() {
    return {
      id: this.id,
      fee: this.fee,
      status: this.status,
      kind: this.kind
    }
  }
}

export class DoorBuilder {
  private readonly instance: DoorAtom
  constructor() {
    this.instance = {
      id: '',
      fee: '',
      status: '',
      kind: ''
    }
  }
  id(id: string): DoorBuilder {
    this.instance.id = id
    return this
  }
  fee(fee: string): DoorBuilder {
    this.instance.fee = fee
    return this
  }
  status(status: string): DoorBuilder {
    this.instance.status = status
    return this
  }
  kind(kind: string): DoorBuilder {
    this.instance.kind = kind
    return this
  }

  transform(): DoorDto {
    const d = new DoorDto()
    d.setId(this.instance.id)
    d.setFee(this.instance.fee)
    d.setStatus(this.instance.status)
    d.setKind(this.instance.kind)

    return d
  }
  build(): DoorAtom {
    return this.instance
  }
}

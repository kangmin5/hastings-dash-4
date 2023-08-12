export class CarAtom {
  constructor(public hasBizId?: boolean, public id?: string,
    public bizId?: string, public status?: string,
public kind?: string,
    ) {}
}

export class CarDto {
   hasBizId?: boolean
   id?: string
   bizId?: string
   status?: string
   kind?: string

  constructor() {
    this.hasBizId = false
    this.id = ''
    this.bizId = ''
    this.status = ''
    this.kind = ''
  }
  getHasBizId(): boolean {
    return this.hasBizId!
  }
  setHasBizId(hasBizId: boolean): void {
    this.hasBizId = hasBizId
  }

  getId(): string {
    return this.id!
  }
  setId(id: string): void {
    this.id = id
  }
  getBizId(): string {
    return this.bizId!
  }
  setBizId(bizId: string): void {
    this.bizId = bizId
  }
  getStatus(): string {
    return this.status!
  }
  setStatus(status: string): void {
    this.status = status
  }
  getKind(): string {
    return this.kind!
  }
  setKind(kind: string): void {
    this.kind = kind
  }

  toJson() {
    return {
      hasBizId: this.hasBizId,
      id: this.id,
      bizId: this.bizId,
      status: this.status,
      kind: this.kind
    }
  }
}

export class CarBuilder {
  private readonly instance: CarAtom
  constructor() {
    this.instance = {
      hasBizId: false,
      id: '',
      bizId: '',
      status: '',
      kind: ''
    }
  }
  id(id: string): CarBuilder {
    this.instance.id = id
    return this
  }
  bizId(bizId: string): CarBuilder {
    this.instance.bizId = bizId
    return this
  }
  status(status: string): CarBuilder {
    this.instance.status = status
    return this
  }
  hasBizId(hasBizId: boolean): CarBuilder {
    this.instance.hasBizId = hasBizId
    return this
  }
  kind(kind: string): CarBuilder {
    this.instance.kind = kind
    return this
  }

  transform(): CarDto {
    const d = new CarDto()
    d.setId(this.instance.id)
    d.setBizId(this.instance.bizId)
    d.setStatus(this.instance.status)
    d.setHasBizId(this.instance.hasBizId)
d.setKind(this.instance.kind)

    return d
  }
  build(): CarAtom {
    return this.instance
  }
}

export class TimeAtom {
  constructor(public createdAt?: string,
    public updatedAt?: string,
    public askedAt?: string,
    public answeredAt?: string,
    public canceledAt?: string,
    public accessAt?: string,
    ) {}
}

export class TimeDto {
   createdAt?: string
   updatedAt?: string
   askedAt?: string
   answeredAt?: string
   canceledAt?: string
    accessAt?: string

  constructor() {
    this.createdAt = ''
    this.updatedAt = ''
    this.askedAt = ''
    this.answeredAt = ''
    this.canceledAt = ''
    this.accessAt = ''
  }

  getCreatedAt(): string {
    return this.createdAt!
  }
  setCreatedAt(createdAt: string): void {
    this.createdAt = createdAt
  }
  getUpdatedAt(): string {
    return this.updatedAt!
  }
  setUpdatedAt(updatedAt: string): void {
    this.updatedAt = updatedAt
  }
  getAskedAt(): string {
    return this.askedAt!
  }
  setAskedAt(askedAt: string): void {
    this.askedAt = askedAt
  }
  getAnsweredAt(): string {
    return this.answeredAt!
  }
  setAnsweredAt(answeredAt: string): void {
    this.answeredAt = answeredAt
  }
  getCanceledAt(): string {
    return this.canceledAt!
  }
  setCanceledAt(canceledAt: string): void {
    this.canceledAt = canceledAt
  }
  setAccessAt(accessAt: string): void {
    this.accessAt = accessAt
  }


  toJson() {
    return {
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      askedAt: this.askedAt,
      answeredAt: this.answeredAt,
      canceledAt: this.canceledAt,
      accessAt: this.accessAt,
    }
  }
}

export class TimeBuilder {
  private readonly instance: TimeAtom
  constructor() {
    this.instance = {
      createdAt: '',
      updatedAt: '',
      askedAt: '',
      answeredAt: '',
      canceledAt: '',
      accessAt: '',
    }
  }

  createdAt(createdAt: string): TimeBuilder {
    this.instance.createdAt = createdAt
    return this
  }
  updatedAt(updatedAt: string): TimeBuilder {
    this.instance.updatedAt = updatedAt
    return this
  }
  askedAt(askedAt: string): TimeBuilder {
    this.instance.askedAt = askedAt
    return this
  }
  answeredAt(answeredAt: string): TimeBuilder {
    this.instance.answeredAt = answeredAt
    return this
  }
  canceledAt(canceledAt: string): TimeBuilder {
    this.instance.canceledAt = canceledAt
    return this
  }
  accessAt(accessAt: string): TimeBuilder {
    this.instance.accessAt = accessAt
    return this
  }

  transform(): TimeDto {
    const d = new TimeDto()
    d.setCreatedAt(this.instance.createdAt)
    d.setUpdatedAt(this.instance.updatedAt)
    d.setAskedAt(this.instance.askedAt)
    d.setAnsweredAt(this.instance.answeredAt)
    d.setCanceledAt(this.instance.canceledAt)
    d.setAccessAt(this.instance.accessAt)
    return d
  }
  build(): TimeAtom {
    return this.instance
  }
}

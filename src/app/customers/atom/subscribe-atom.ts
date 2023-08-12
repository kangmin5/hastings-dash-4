export class SubscribeAtom {
  constructor(public subscribeId?: string) {}
}

export class SubscribeDto {
   subscribeId?: string

  constructor() {
    this.subscribeId = ''
  }
  getSubscribeId(): string {
    return this.subscribeId!
  }
  setSubscribeId(subscribeId: string): void {
    this.subscribeId = subscribeId
  }

  toJson() {
    return {
      subscribeId: this.subscribeId
    }
  }
}

export class SubscribeBuilder {
  private readonly instance: SubscribeAtom
  constructor() {
    this.instance = {
      subscribeId: ''
    }
  }
  subscribeId(subscribeId: string): SubscribeBuilder {
    this.instance.subscribeId = subscribeId
    return this
  }

  transform(): SubscribeDto {
    const dto = new SubscribeDto()
    dto.setSubscribeId(this.instance.subscribeId)

    return dto
  }
  build(): SubscribeAtom {
    return this.instance
  }
}

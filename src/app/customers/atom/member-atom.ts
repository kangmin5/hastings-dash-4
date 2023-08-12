export class MemberAtom {
  constructor(public memberId?: string) {}
}

export class MemberDto {
  protected memberId?: string

  constructor() {
    this.memberId = ''
  }
  getMemberId(): string {
    return this.memberId!
  }
  setMemberId(memberId: string): void {
    this.memberId = memberId
  }

  toJson() {
    return {
      memberId: this.memberId
    }
  }
}

export class MemberBuilder {
  private readonly instance: MemberAtom
  constructor() {
    this.instance = {
      memberId: ''
    }
  }
  memberId(memberId: string): MemberBuilder {
    this.instance.memberId = memberId
    return this
  }

  transform(): MemberDto {
    const dto = new MemberDto()
    dto.setMemberId(this.instance.memberId)

    return dto
  }
  build(): MemberAtom {
    return this.instance
  }
}

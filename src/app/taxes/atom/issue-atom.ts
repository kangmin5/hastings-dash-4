export class IssueAtom {
  constructor(public issueId?: string) {}
}

export class IssueDto {
   issueId?: string

  constructor() {
    this.issueId = ''
  }
  getIssueId(): string {
    return this.issueId!
  }
  setIssueId(issueId: string): void {
    this.issueId = issueId
  }

  toJson() {
    return {
      issueId: this.issueId
    }
  }
}

export class IssueBuilder {
  private readonly instance: IssueAtom
  constructor() {
    this.instance = {
      issueId: ''
    }
  }
  issueId(issueId: string): IssueBuilder {
    this.instance.issueId = issueId
    return this
  }

  transform(): IssueDto {
    const dto = new IssueDto()
    if (typeof this.instance.issueId === 'string') {
      dto.setIssueId(this.instance.issueId)
    }

    return dto
  }
  build(): IssueAtom {
    return this.instance
  }
}

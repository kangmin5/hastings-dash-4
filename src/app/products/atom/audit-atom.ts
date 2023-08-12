export class AuditAtom {
  constructor(public reviewId?: string) {}
}
export class AuditDto {
  reviewId?: string

  constructor() {
    this.reviewId = ''
  }
  getReviewId(): string {
    return this.reviewId!
  }
  setReviewId(reviewId: string): void {
    this.reviewId = reviewId
  }

  toJson() {
    return {
      reviewId: this.reviewId
    }
  }
}

export class AuditBuilder {
  private readonly instance: AuditAtom
  constructor() {
    this.instance = {
      reviewId: ''
    }
  }
  reviewId(reviewId: string): AuditBuilder {
    this.instance.reviewId = reviewId
    return this
  }

  transform(): AuditDto {
    const dto = new AuditDto()
    dto.setReviewId(this.instance.reviewId)

    return dto
  }
  build(): AuditAtom {
    return this.instance
  }
}

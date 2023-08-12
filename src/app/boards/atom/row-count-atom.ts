export class RowCountAtom {
  constructor(
    public counsel?: string,
    public faq?: string,
    public inquiry?: string,
    public notice?: string, // (전체 웹 모바일) 데이터 들어와야함
    public review?: string
  ) {}
}
export class RowCountDto {
  counsel?: string
  faq?: string
  inquiry?: string
  notice?: string
  review?: string

  constructor() {
    this.counsel = ''
    this.faq = ''
    this.inquiry = ''
    this.notice = ''
    this.review = ''
  }

  setCounsel(counsel: string): void {
    this.counsel = counsel
  }

  setFaq(faq: string): void {
    this.faq = faq
  }
  setInquiry(inquiry: string): void {
    this.inquiry = inquiry
  }

  setNotice(notice: string): void {
    this.notice = notice
  }
  setReview(review: string): void {
    this.review = review
  }

  toJson() {
    return {
      counsel: this.counsel,
      faq: this.faq,
      inquiry: this.inquiry,
      notice: this.notice,
      review: this.review
    }
  }
}

export class RowCountBuilder {
  private readonly instance: RowCountAtom
  constructor() {
    this.instance = {
      counsel: '',
      faq: '',
      inquiry: '',
      notice: '',
      review: ''
    }
  }
  counsel(counsel: string): RowCountBuilder {
    this.instance.counsel = counsel
    return this
  }

  faq(faq: string): RowCountBuilder {
    this.instance.faq = faq
    return this
  }
  inquiry(inquiry: string): RowCountBuilder {
    this.instance.inquiry = inquiry
    return this
  }
  notice(notice: string): RowCountBuilder {
    this.instance.notice = notice
    return this
  }
  review(review: string): RowCountBuilder {
    this.instance.review = review
    return this
  }

  build = (): RowCountAtom => this.instance
  transform = (): RowCountDto => {
    const { counsel, faq, notice, inquiry } = this.instance

    const d = new RowCountDto()
    d.setCounsel(counsel)
    d.setFaq(faq)
    d.setInquiry(inquiry)
    d.setNotice(notice)
    d.setReview(this.instance.review)
    return d
  }
}

export class ConsultAtom {
  constructor(
    public counselor?: string,
    public evaluation?: string,
    public status?: string,
    public count?: string,
    public consultIndex?: string, // 상담 인덱스
    public consult?: string // 상담 내용
  ) {}
}
export class ConsultDto {
  counselor?: string
  evaluation?: string
  status?: string
  count?: string
  consultIndex?: string
  consult?: string

  constructor() {
    this.counselor = ''
    this.evaluation = ''
    this.status = ''
    this.count = ''
    this.consultIndex = ''
    this.consult = ''
  }

  getCounselor(): string {
    return this.counselor!
  }
  setCounselor(counselor: string): void {
    this.counselor = counselor
  }
  getEvaluation(): string {
    return this.evaluation!
  }
  setEvaluation(evaluation: string): void {
    this.evaluation = evaluation
  }
  getStatus(): string {
    return this.status!
  }
  setStatus(status: string): void {
    this.status = status
  }
  setCount(count: string): void {
    this.count = count
  }
  getConsultIndex(): string {
    return this.consultIndex!
  }
  setConsultIndex(consultIndex: string): void {
    this.consultIndex = consultIndex
  }
  getConsult(): string {
    return this.consult!
  }
  setConsult(consult: string): void {
    this.consult = consult
  }

  toJson() {
    return {
      counselor: this.counselor,
      evaluation: this.evaluation,
      status: this.status,
      count: this.count,
      consultIndex: this.consultIndex,
      consult: this.consult
    }
  }
}

export class ConsultBuilder {
  private readonly instance: ConsultAtom

  constructor() {
    this.instance = {
      counselor: '',
      evaluation: '',
      status: '',
      count: '',
      consultIndex: '',
      consult: ''
    }
  }
  consultIndex(consultIndex: string): ConsultBuilder {
    this.instance.consultIndex = consultIndex
    return this
  }
  counselor(counselor: string): ConsultBuilder {
    this.instance.counselor = counselor
    return this
  }
  evaluation(evaluation: string): ConsultBuilder {
    this.instance.evaluation = evaluation
    return this
  }
  status(status: string): ConsultBuilder {
    this.instance.status = status
    return this
  }
  count(count: string): ConsultBuilder {
    this.instance.count = count
    return this
  }
  consult(consult: string): ConsultBuilder {
    this.instance.consult = consult
    return this
  }
  build(): ConsultAtom {
    return this.instance
  }
  transform(): ConsultDto {
    const d = new ConsultDto()
    d.setCounselor(this.instance.counselor)
    d.setEvaluation(this.instance.evaluation)
    d.setStatus(this.instance.status)
    d.setCount(this.instance.count)
    d.setConsultIndex(this.instance.consultIndex)
    d.setConsult(this.instance.consult)

    return d
  }
}

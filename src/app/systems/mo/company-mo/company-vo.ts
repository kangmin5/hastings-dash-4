import { uuidGen } from 'app/utils/atom/uuid-atom'
export class CompanyVo {
  constructor(public companyId?: string) {}
}
export class CompanyTo {
  protected companyId?: string

  constructor() {
    this.companyId = ''
  }
  getCompanyId(): string {
    return this.companyId!
  }
  setCompanyId(companyId: string): void {
    this.companyId = companyId
  }

  toJson() {
    return {
      companyId: this.companyId
    }
  }
}

export class CompanyBo {
  private readonly instance: CompanyVo
  constructor() {
    this.instance = {
      companyId: ''
    }
  }
  companyId(companyId: string): CompanyBo {
    this.instance.companyId = companyId ?? uuidGen()
    return this
  }

  transform(): CompanyTo {
    const dto = new CompanyTo()
    dto.setCompanyId(this.instance.companyId)

    return dto
  }
  build(): CompanyVo {
    return this.instance
  }
}

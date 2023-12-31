export class WorkAtom {
  constructor(
    public bizName?: string,
    public bizNo?: string,
    public bizKind?: string, // 업태
    public bizItem?: string, // 업종
    public corpNo?: string,
    public ceo?: string,
    public phone?: string,
    public fax?: string,
    public email?: string,
    public phone2?: string,
    public hasCompanyId?: boolean,
    public isValidBizNo?: boolean, // Only VO
    public isValidCorpNo?: boolean // Only VO
  ) {}
}
export class WorkDto {
  bizName?: string
  bizNo?: string
  bizKind?: string
  bizItem?: string
  corpNo?: string
  ceo?: string
  hasCompanyId?: boolean
  phone?: string
  fax?: string
  email?: string
  phone2?: string

  constructor() {
    this.bizName = ''
    this.bizNo = ''
    this.bizKind = ''
    this.bizItem = ''
    this.corpNo = ''
    this.ceo = ''
    this.hasCompanyId = false
    this.phone = ''
    this.fax = ''
    this.email = ''
    this.phone2 = ''

  }



  setBizName(bizName: string): void {
    this.bizName = bizName
  }

  setBizNo(bizNo: string): void {
    this.bizNo = bizNo
  }

  setBizKind(bizKind: string): void {
    this.bizKind = bizKind
  }

  setBizItem(bizItem: string): void {
    this.bizItem = bizItem
  }

  setCorpNo(corpNo: string): void {
    this.corpNo = corpNo
  }
  setCeo(ceo: string): void {
    this.ceo = ceo
  }
  setHasCompanyId(hasCompanyId: boolean): void {
    this.hasCompanyId = hasCompanyId
  }
  setPhone(phone: string): void {
    this.phone = phone
  }
  setFax(fax: string): void {
    this.fax = fax
  }
  setEmail(email: string): void {
    this.email = email
  }
  setPhone2(phone2: string): void {
    this.phone2 = phone2
  }


  toJson() {
    return {
      bizName: this.bizName,
      bizNo: this.bizNo,
      bizKind: this.bizKind,
      bizItem: this.bizItem,
      corpNo: this.corpNo,
      ceo: this.ceo,
      hasCompanyId: this.hasCompanyId,
      phone: this.phone,
      fax: this.fax,
      email: this.email,
      phone2: this.phone2,

    }
  }
}
export class WorkBuilder {
  private readonly instance: WorkAtom

  constructor() {
    this.instance = {
      bizName: '',
      bizNo: '',
      bizKind: '',
      bizItem: '',
      corpNo: '',
      ceo: '',
      hasCompanyId: false,
      phone: '',
      fax: '',
      email: '',
      phone2: '',

    }
  }

  bizName(bizName: string): WorkBuilder {
    this.instance.bizName = bizName
    return this
  }
  bizNo(bizNo: string): WorkBuilder {
    this.instance.bizNo = bizNo
    return this
  }
  bizKind(bizKind: string): WorkBuilder {
    this.instance.bizKind = bizKind
    return this
  }
  bizItem(bizItem: string): WorkBuilder {
    this.instance.bizItem = bizItem
    return this
  }
  corpNo(corpNo: string): WorkBuilder {
    this.instance.corpNo = corpNo
    return this
  }
  ceo(ceo: string): WorkBuilder {
    this.instance.ceo = ceo
    return this
  }
  hasCompanyId(hasCompanyId: boolean): WorkBuilder {
    this.instance.hasCompanyId = hasCompanyId
    return this
  }
  phone(phone: string): WorkBuilder {
    this.instance.phone = phone
    return this
  }
  fax(fax: string): WorkBuilder {
    this.instance.fax = fax
    return this
  }
  email(email: string): WorkBuilder {
    this.instance.email = email
    return this

  }
  phone2(phone2: string): WorkBuilder {
    this.instance.phone2 = phone2
    return this
  }


  build = (): WorkAtom => this.instance
  transform = (): WorkDto => {
    const {  bizName, bizNo, corpNo, bizItem, bizKind, ceo, hasCompanyId
     } = this.instance
    const d = new WorkDto()
    d.setBizName(bizName)
    d.setBizNo(bizNo)
    d.setCorpNo(corpNo)
    d.setBizItem(this.instance.bizItem)
    d.setBizKind(this.instance.bizKind)
    d.setCeo(this.instance.ceo)
    d.setHasCompanyId(this.instance.hasCompanyId)

    return d
  }
}

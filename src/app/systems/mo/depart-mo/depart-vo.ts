export class DepartVo {
  constructor(public departId?: string) {}
}

export class DepartTo {
  protected departId?: string

  constructor() {
    this.departId = ''
  }
  getDepartId(): string {
    return this.departId!
  }
  setDepartId(departId: string): void {
    this.departId = departId
  }

  toJson() {
    return {
      departId: this.departId
    }
  }
}

export class DepartBo {
  private readonly instance: DepartVo
  constructor() {
    this.instance = {
      departId: ''
    }
  }
  departId(departId: string): DepartBo {
    this.instance.departId = departId
    return this
  }

  transform(): DepartTo {
    const dto = new DepartTo()
    dto.setDepartId(this.instance.departId)

    return dto
  }
  build(): DepartVo {
    return this.instance
  }
}

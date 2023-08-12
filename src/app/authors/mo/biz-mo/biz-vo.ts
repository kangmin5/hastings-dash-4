import { AirAtom, AirBuilder, AirDto } from 'app/authors/atom/air-atom'
import { WorkAtom, WorkBuilder, WorkDto } from 'app/authors/atom/work-atom'

export class BizVo {
  constructor(
    public air?: AirAtom,
    public work?: WorkAtom
    ) {}
}

export class BizTo {
  protected work?: WorkDto
  protected air?: AirDto

  setAir(a: AirAtom): void {
    this.air = new AirBuilder().id(a.id).transform()
  }

  setBiz(w: WorkAtom): void {
    this.work = new WorkBuilder().bizName(w.bizName).bizNo(w.bizNo).transform()
  }
  toJson() {
    return {
      air: this.air.toJson(),
      work: this.work.toJson()
    }
  }
}
export class BizBo {
  private readonly instance: BizVo

  constructor() {
    this.instance = {
      air: new AirAtom()
    }
  }

  build(): BizVo {
    return this.instance
  }
  transform(): BizTo {
    const to = new BizTo()
    to.setAir(this.instance.air)
    return to
  }
}

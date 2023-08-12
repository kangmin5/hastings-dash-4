import { SoarAtom } from "app/systems/atom/soar-atom"
import { StaffAtom } from "app/systems/atom/staff-atom"

export class EmployVo {
  constructor(
    public soar?: SoarAtom,
    public staff?: StaffAtom
    
  ) {}
}

export class EmployTo {
   protected soar?: SoarAtom
    protected staff?: StaffAtom

  constructor() {
    this.soar = new SoarAtom()
    this.staff = new StaffAtom()

  }
  setSoar(soar: SoarAtom): void {
    this.soar = soar
  }
  setStaff(staff: StaffAtom): void {
    this.staff = staff
  }



  toJson() {
    return {
      soar: this.soar,
      staff: this.staff
    }
  }
}

export class EmployBo {
  private readonly instance: EmployVo
  constructor() {
    this.instance = {
      soar: new SoarAtom(),
      staff: new StaffAtom(),


    }
  }
  soar(soar: SoarAtom): EmployBo {
    this.instance.soar = soar
    return this
  }
  staff(staff: StaffAtom): EmployBo {
    this.instance.staff = staff
    return this
  }

  transform(): EmployTo {
    const d = new EmployTo()
    d.setSoar(this.instance.soar)
    d.setStaff(this.instance.staff)
    

    return d
  }
  build(): EmployVo {
    return this.instance
  }
}

import { CalcAtom, CalcBuilder, CalcDto } from 'app/orders/atom/calc-atom'
import { OarAtom, OarBuilder, OarDto } from 'app/orders/atom/oar-atom'
import { FeeAtom, FeeBuilder, FeeDto } from 'app/orders/atom/fee-atom'
import { TimeAtom, TimeBuilder, TimeDto } from 'app/utils/atom/time-atom'
import { UserAtom, UserBuilder, UserDto } from 'app/authors/atom/user-atom'
import { FunnelAtom, FunnelBuilder, FunnelDto } from 'app/customers/atom/funnel-atom'
import { ParAtom, ParBuilder, ParDto } from 'app/products/atom/par-atom'

export class OrderVo {
  constructor(
    public oar?: OarAtom,
    public calc?: CalcAtom,
    public fee?: FeeAtom,
    public time?: TimeAtom,
    public user?: UserAtom,
    public funnel?: FunnelAtom,
    public par?: ParAtom
  ) {}
}
export class OrderTo {
  oar?: OarDto
  calc?: CalcDto
  fee?: FeeDto
  time?: TimeDto
  user?: UserDto
  funnel?: FunnelDto
  par?: ParDto

  constructor() {
    this.oar = new OarDto()
    this.calc = new CalcDto()
    this.fee = new FeeDto()
    this.time = new TimeDto()
    this.user = new UserDto()
    this.funnel = new FunnelDto()
    this.par = new ParDto()
  }

  setOar(oar: OarAtom): void {
    this.oar = new OarBuilder()
      .id(oar.id)
      .status(oar.status)
      .qty(oar.qty)

      .transform()
  }
  setCalc(calc: CalcAtom): void {
    this.calc = new CalcBuilder().orderAmount(calc.orderAmount).orderCountPerUser(calc.orderCountPerUser).transform()
  }
  setFee(fee: FeeAtom): void {
    this.fee = new FeeBuilder()
      .payMethod(fee.payMethod)

      .transform()
  }
  setTime(time: TimeAtom): void {
    this.time = new TimeBuilder()
      .createdAt(time.createdAt)
      .updatedAt(time.updatedAt)

      .transform()
  }
  setUser(user: UserAtom): void {
    this.user = new UserBuilder().userId(user.userId).username(user.username).transform()
  }
  setFunnel(funnel: FunnelAtom): void {
    this.funnel = new FunnelBuilder().transform()
  }
  setPar(par: ParAtom): void {
    this.par = new ParBuilder().name(par.name).transform()
  }

  toJson() {
    return {
      oar: this.oar.toJson(),
      calc: this.calc.toJson(),
      fee: this.fee.toJson(),
      time: this.time.toJson(),
      user: this.user.toJson(),
      funnel: this.funnel.toJson(),
      par: this.par.toJson()
    }
  }
}

export class OrderBo {
  private readonly instance: OrderVo
  constructor() {
    this.instance = {
      oar: new OarAtom(),
      calc: new CalcAtom(),
      fee: new FeeAtom(),
      time: new TimeAtom(),
      user: new UserAtom(),
      funnel: new FunnelAtom(),
      par: new ParAtom()
    }
  }
  oar(oar: OarAtom): OrderBo {
    this.instance.oar = oar
    return this
  }
  calc(calc: CalcAtom): OrderBo {
    this.instance.calc = calc
    return this
  }
  fee(fee: FeeAtom): OrderBo {
    this.instance.fee = fee
    return this
  }
  time(time: TimeAtom): OrderBo {
    this.instance.time = time
    return this
  }
  user(user: UserAtom): OrderBo {
    this.instance.user = user
    return this
  }
  funnel(funnel: FunnelAtom): OrderBo {
    this.instance.funnel = funnel
    return this
  }
  par(par: ParAtom): OrderBo {
    this.instance.par = par
    return this
  }

  transform(): OrderTo {
    const d = new OrderTo()
    d.setOar(this.instance.oar)
    d.setCalc(this.instance.calc)
    d.setFee(this.instance.fee)
    d.setTime(this.instance.time)
    d.setUser(this.instance.user)
    d.setFunnel(this.instance.funnel)
    d.setPar(this.instance.par)

    return d
  }
  build(): OrderVo {
    return this.instance
  }
}

import { CalcAtom, CalcBuilder, CalcDto } from 'app/orders/atom/calc-atom'
import { OarAtom, OarBuilder, OarDto } from 'app/orders/atom/oar-atom'
import { FeeAtom, FeeBuilder, FeeDto } from 'app/orders/atom/fee-atom'
import { TimeAtom, TimeBuilder, TimeDto } from 'app/utils/atom/time-atom'
import { UserAtom, UserBuilder, UserDto } from 'app/authors/atom/user-atom'
import { FunnelAtom, FunnelBuilder, FunnelDto } from 'app/customers/atom/funnel-atom'
import { DepositAtom, DepositBuilder, DepositDto } from 'app/taxes/atom/deposit-atom'
import { ParAtom, ParBuilder, ParDto } from 'app/products/atom/par-atom'
import { AdobeAtom, AdobeBuilder, AdobeDto } from 'app/deliveries/atom/adobe-atom'
import { InvoiceAtom, InvoiceBuilder, InvoiceDto } from 'app/orders/atom/invoice-atom'
import { WorkAtom, WorkBuilder, WorkDto } from 'app/authors/atom/work-atom'
import { PersonAtom, PersonBuilder, PersonDto } from 'app/authors/atom/person-atom'
import { ReceiptAtom, ReceiptBuilder, ReceiptDto } from 'app/taxes/atom/receipt-atom'
import { DoorAtom, DoorBuilder, DoorDto } from 'app/deliveries/atom/door-atom'

export class OrderVo {
  constructor(
    public oar?: OarAtom,
    public calc?: CalcAtom,
    public fee?: FeeAtom,
    public time?: TimeAtom,
    public user?: UserAtom,
    public work?: WorkAtom,
    public funnel?: FunnelAtom,
    public par?: ParAtom,
    public adobe?: AdobeAtom,
    public deposit?: DepositAtom,
    public invoice?: InvoiceAtom,
    public receiver?: PersonAtom,
    public receipt?: ReceiptAtom,
    public door?: DoorAtom

  ) {}
}
export class OrderTo {
  oar?: OarDto
  calc?: CalcDto
  fee?: FeeDto
  time?: TimeDto
  user?: UserDto
  work?: WorkDto
  funnel?: FunnelDto
  par?: ParDto
  adobe?: AdobeDto
  deposit?: DepositDto
  invoice?: InvoiceDto
  receiver?: PersonDto
  receipt?: ReceiptDto
  door?: DoorDto


  constructor() {
    this.oar = new OarDto()
    this.calc = new CalcDto()
    this.fee = new FeeDto()
    this.time = new TimeDto()
    this.user = new UserDto()
    this.work = new WorkDto()
    this.funnel = new FunnelDto()
    this.par = new ParDto()
    this.adobe = new AdobeDto()
    this.deposit = new DepositDto()
    this.invoice = new InvoiceDto()
    this.receiver = new PersonDto()
    this.receipt = new ReceiptDto()
    this.door = new DoorDto()

  }

  setOar(oar: OarAtom): void {
    this.oar = new OarBuilder()
      .id(oar.id)
      .orderNo(oar.orderNo)
      .status(oar.status)
      .orderLog(oar.orderLog)
      .qty(oar.qty)

      .transform()
  }
  setCalc(calc: CalcAtom): void {
    this.calc = new CalcBuilder().orderAmount(calc.orderAmount).orderCountPerUser(calc.orderCountPerUser).transform()
  }
  setFee(fee: FeeAtom): void {
    this.fee = new FeeBuilder()
      .payMethod(fee.payMethod)
      .payStatus(fee.payStatus)
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

  setWork(work: WorkAtom): void {
    this.work = new WorkBuilder()
    .bizName(work.bizName)
    .transform()
  }

  setFunnel(funnel: FunnelAtom): void {
    this.funnel = new FunnelBuilder().transform()
  }
  setPar(par: ParAtom): void {
    this.par = new ParBuilder().name(par.name)


    .transform()
  }
  setAdobe(adobe: AdobeAtom): void {
    this.adobe = new AdobeBuilder()

    .zip(adobe.zip)
    .addr(adobe.addr)
    .extraAddr(adobe.extraAddr)
    .transform()
  }
  setDeposit(deposit: DepositAtom): void {
    this.deposit = new DepositBuilder()
    .accountNo(deposit.accountNo)
    .bank(deposit.bank)
    .owner(deposit.owner)
    .depositor(deposit.depositor)
    .transform()
  }
  setInvoice(invoice: InvoiceAtom): void {
    this.invoice = new InvoiceBuilder()
    .invoiceKind(invoice.invoiceKind)
    .invoiceNo(invoice.invoiceNo)
    .transform()
  }
  setReceiver(receiver: PersonAtom): void {
    this.receiver = new PersonBuilder()
    .phone(receiver.phone)
    .homePhone(receiver.homePhone)
    .email(receiver.email)
    .name(receiver.name)
    .transform()
  }
  setReceipt(receipt: ReceiptAtom): void {
    this.receipt = new ReceiptBuilder()
    .cashReceipt (receipt.cashReceipt)
    .transform()
  }
  setDoor(door: DoorAtom): void {
    this.door = new DoorBuilder()
    .status(door.status)
    .message(door.message)
    .transform()
  }



  toJson() {
    return {
      oar: this.oar.toJson(),
      calc: this.calc.toJson(),
      fee: this.fee.toJson(),
      time: this.time.toJson(),
      user: this.user.toJson(),
      work: this.work.toJson(),
      funnel: this.funnel.toJson(),
      par: this.par.toJson(),
      adobe: this.adobe.toJson(),
      deposit: this.deposit.toJson(),
      invoice: this.invoice.toJson(),
      receiver: this.receiver.toJson(),
      receipt: this.receipt.toJson(),
      door: this.door.toJson()
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
      work: new WorkAtom(),
      funnel: new FunnelAtom(),
      par: new ParAtom(),
      adobe: new AdobeAtom(),
      door: new DoorAtom(),
      receipt: new ReceiptAtom(),
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

  work(work: WorkAtom): OrderBo {
    this.instance.work = work
    return this
  }
  deposit(deposit: DepositAtom): OrderBo {
    this.instance.deposit = deposit
    return this
  }

  invoice(invoice: InvoiceAtom): OrderBo {
    this.instance.invoice = invoice
    return this
  }

  receiver(receiver: PersonAtom): OrderBo {
    this.instance.receiver = receiver
    return this
  }
  door(door: DoorAtom): OrderBo {
    this.instance.door = door
    return this
  }
  adobe(adobe: AdobeAtom): OrderBo {
    this.instance.adobe = adobe
    return this
  }
  receipt(receipt: ReceiptAtom): OrderBo {
    this.instance.receipt = receipt
    return this
  }

  transform(): OrderTo {
    const {oar, calc, fee, time, user, funnel, par, deposit,
      invoice, work , receiver, door, adobe, receipt} = this.instance
    const d = new OrderTo()
    if(oar!==undefined) d.setOar(oar)
    if(calc!==undefined) d.setCalc(calc)
    if(fee!==undefined) d.setFee(fee)
    if(time!==undefined) d.setTime(time)
    if(user!==undefined) d.setUser(user)
    if(work!==undefined) d.setWork(work)
    if(oar!==undefined) d.setFunnel(funnel)
    if(par!==undefined) d.setPar(par)
    if(deposit!==undefined) d.setDeposit(deposit)
    if(invoice!==undefined) d.setInvoice(invoice)
    if(receiver!==undefined) d.setReceiver(receiver)
    if(door!==undefined) d.setDoor(door)
    if(adobe!==undefined) d.setAdobe(adobe)
    if(receipt!==undefined) d.setReceipt(receipt)

    return d
  }
  build(): OrderVo {
    return this.instance
  }
}

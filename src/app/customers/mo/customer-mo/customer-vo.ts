import { PersonAtom, PersonBuilder, PersonDto } from 'app/authors/atom/person-atom'
import { UserAtom, UserBuilder, UserDto } from 'app/authors/atom/user-atom'
import { WorkAtom, WorkBuilder, WorkDto } from 'app/authors/atom/work-atom'
import { ConsultAtom, ConsultBuilder, ConsultDto } from 'app/boards/atom/consult-atom'
import { RowCountAtom, RowCountBuilder, RowCountDto } from 'app/boards/atom/row-count-atom'
import { CounselVo } from 'app/boards/mo/counsel-mo/counsel-vo'
import { CarAtom, CarBuilder, CarDto } from 'app/customers/atom/car-atom'
import { FunnelAtom, FunnelBuilder, FunnelDto } from 'app/customers/atom/funnel-atom'
import { ReserveAtom, ReserveBuilder, ReserveDto } from 'app/customers/atom/reserve-atom'
import { AdobeAtom, AdobeBuilder, AdobeDto } from 'app/deliveries/atom/adobe-atom'
import { CalcAtom, CalcBuilder, CalcDto } from 'app/orders/atom/calc-atom'
import { OarAtom, OarBuilder } from 'app/orders/atom/oar-atom'
import { TodayAtom, TodayBuilder, TodayDto } from 'app/orders/atom/today-atom'
import { TotalAtom, TotalBuilder, TotalDto } from 'app/orders/atom/total-atom'
import { OrderVo } from 'app/orders/mo/order-mo/order-vo'
import { BankAtom, BankBuilder, BankDto } from 'app/taxes/atom/deposit-atom'
import { WalletAtom, WalletBuilder, WalletDto } from 'app/taxes/atom/wallet-atom'
import { MobileAtom, MobileBuilder, MobileDto } from 'app/utils/atom/mobile-atom'
import { TimeAtom, TimeBuilder, TimeDto } from 'app/utils/atom/time-atom'
import { InquiryVo } from 'app/boards/mo/inquiry-mo/inquiry-vo'
import { MemoAtom, MemoBuilder, MemoDto } from 'app/customers/atom/memo-atom'
import { DozeAtom, DozeBuilder, DozeDto } from 'app/customers/atom/doze-atom'

export class CustomerVo {
  car?: CarAtom
  person?: PersonAtom
  time?: TimeAtom
  calc?: CalcAtom
  user?: UserAtom
  consult?: ConsultAtom
  funnel?: FunnelAtom
  rowCount?: RowCountAtom
  today?: TodayAtom
  total?: TotalAtom
  adobe?: AdobeAtom
  work?: WorkAtom
  mobile?: MobileAtom
  bank?: BankAtom
  reserve?: ReserveAtom
  wallet?: WalletAtom
  memo?: MemoAtom
  doze?: DozeAtom
  inquiryKind?: []
  ordersNotEnd?: []
}

export class CustomerTo {
  protected car?: CarDto
  protected person?: PersonDto
  protected time?: TimeDto
  protected calc?: CalcDto
  protected user?: UserDto
  protected consult?: ConsultDto
  protected funnel?: FunnelDto
  protected rowCount?: RowCountDto
  protected today?: TodayDto
  protected total?: TotalDto
  protected adobe?: AdobeDto
  protected mobile?: MobileDto
  protected work?: WorkDto
  protected bank?: BankDto
  protected reserve?: ReserveDto
  protected wallet?: WalletDto
  protected memo?: MemoDto
  protected doze?: DozeDto
  protected inquiryKind?: []
  protected ordersNotEnd?: []

  setCar(car: CarAtom): void {
    this.car = new CarBuilder()
      .id(car.id)
      .hasBizId(car.hasBizId)
      .status(car.status)
      .kind(car.kind)

      .transform()
  }
  setPerson(person: PersonAtom): void {
    this.person = new PersonBuilder()
      .name(person.name)
      .phone(person.phone)
      .email(person.email)
      .homePhone(person.homePhone)

      .transform()
  }
  setTime(time: TimeAtom): void {
    this.time = new TimeBuilder()
      .createdAt(time.createdAt)
      .updatedAt(time.updatedAt)

      .transform()
  }
  setCalc(calc: CalcAtom): void {
    this.calc = new CalcBuilder()
      .lastOrderAmount(calc.lastOrderAmount)
      .orderAmount(calc.orderAmount)
      .orderCountPerUser(calc.orderCountPerUser)
      .transform()
  }
  setUser(user: UserAtom): void {
    this.user = new UserBuilder()
      .userId(user.userId)
      .username(user.username)
      .password(user.password)
      .token(user.token)
      .transform()
  }
  setConsult(consult: ConsultAtom): void {
    this.consult = new ConsultBuilder().transform()
  }

  setFunnel(funnel: FunnelAtom): void {
    this.funnel = new FunnelBuilder().keyword(funnel.keyword).searchEngine(funnel.searchEngine).transform()
  }
  setRowCount(rowCount: RowCountAtom): void {
    this.rowCount = new RowCountBuilder()
      .inquiry(rowCount.inquiry)

      .transform()
  }

  setToday(today: TodayAtom): void {
    this.today = new TodayBuilder()
      .orderAmount(today.orderAmount)
      .orderCount(today.orderCount)
      .payAmount(today.payAmount)
      .transform()
  }

  setTotal(total: TotalAtom): void {
    this.total = new TotalBuilder()
      .cancelCount(total.cancelCount)
      .orderAmount(total.orderAmount)
      .orderCount(total.orderCount)
      .payAmount(total.payAmount)
      .rewardPoint(total.rewardPoint)
      .transform()
  }
  setAdobe(adobe: AdobeAtom): void {
    this.adobe = new AdobeBuilder()
      .zip(adobe.zip)
      .addr(adobe.addr)
      .extraAddr(adobe.extraAddr)
      .shipAddr(adobe.shipAddr)
      .shipExtraAddr(adobe.shipExtraAddr)
      .shipZip(adobe.shipZip)
      .transform()
  }
  setMobile(mobile: MobileAtom): void {
    this.mobile = new MobileBuilder().appInstall(mobile.appInstall).appPush(mobile.appPush).transform()
  }
  setWork(work: WorkAtom): void {
    this.work = new WorkBuilder()
      .bizName(work.bizName)
      .bizNo(work.bizNo)
      .bizKind(work.bizKind)
      .bizItem(work.bizItem)
      .corpNo(work.corpNo)
      .ceo(work.ceo)
      .hasCompanyId(work.hasCompanyId)
      .transform()
  }

  setBank(bank: BankAtom): void {
    this.bank = new BankBuilder().bankId(bank.bankId).deposit(bank.deposit).transform()
  }

  setReserve(reserve: ReserveAtom): void {
    this.reserve = new ReserveBuilder().balance(reserve.balance).transform()
  }

  setWallet(wallet: WalletAtom): void {
    this.wallet = new WalletBuilder().deposit(wallet.deposit).transform()
  }

  setMemo(memo: MemoAtom): void {
    this.memo = new MemoBuilder()
      .title(memo.title)
      .content(memo.content)
      .writtenAt(memo.writtenAt)
      .reWrittenAt(memo.reWrittenAt)

      .transform()
  }

  setDoze(doze: DozeAtom): void {
    this.doze = new DozeBuilder().voice(doze.voice).transform()
  }

  setInquiryKind(inquiryKind: []): void {
    this.inquiryKind = inquiryKind
  }

  setOrdersNotEnd(ordersNotEnd: []): void {
    this.ordersNotEnd = ordersNotEnd
  }

  toJson() {
    return {
      car: this.car?.toJson(),
      person: this.person?.toJson(),
      time: this.time?.toJson(),
      calc: this.calc?.toJson(),
      user: this.user?.toJson(),
      funnel: this.funnel?.toJson(),
      rowCount: this.rowCount?.toJson(),
      today: this.today?.toJson(),
      total: this.total?.toJson(),
      adobe: this.adobe?.toJson(),
      mobile: this.mobile?.toJson(),
      work: this.work?.toJson(),
      bank: this.bank?.toJson(),
      reserve: this.reserve?.toJson(),
      wallet: this.wallet?.toJson(),
      memo: this.memo?.toJson(),
      doze: this.doze?.toJson(),
      inquiryKind: this.inquiryKind,
      ordersNotEnd: this.ordersNotEnd
    }
  }
}
export class CustomerBo {
  private readonly instance: CustomerVo

  constructor() {
    this.instance = {
      car: new CarAtom(),
      person: new PersonAtom(),
      time: new TimeAtom(),
      calc: new CalcAtom(),
      user: new UserAtom(),
      consult: new ConsultAtom(),
      funnel: new FunnelAtom(),
      rowCount: new RowCountAtom(),
      today: new TodayAtom(),
      total: new TotalAtom(),
      adobe: new AdobeAtom(),
      work: new WorkAtom(),
      mobile: new MobileAtom(),
      bank: new BankAtom(),
      reserve: new ReserveAtom(),
      wallet: new WalletAtom(),
      memo: new MemoAtom(),
      doze: new DozeAtom(),
      inquiryKind: [],
      ordersNotEnd: []
    }
  }

  car(car: CarAtom): CustomerBo {
    this.instance.car = car
    return this
  }
  person(person: PersonAtom): CustomerBo {
    this.instance.person = person
    return this
  }

  time(time: TimeAtom): CustomerBo {
    this.instance.time = time
    return this
  }
  calc(calc: CalcAtom): CustomerBo {
    this.instance.calc = calc
    return this
  }
  user(user: UserAtom): CustomerBo {
    this.instance.user = user
    return this
  }
  consult(consult: ConsultAtom): CustomerBo {
    this.instance.consult = consult
    return this
  }

  funnel(funnel: FunnelAtom): CustomerBo {
    this.instance.funnel = funnel
    return this
  }

  rowCount(rowCount: RowCountAtom): CustomerBo {
    this.instance.rowCount = rowCount
    return this
  }

  today(today: TodayAtom): CustomerBo {
    this.instance.today = today
    return this
  }
  total(total: TotalAtom): CustomerBo {
    this.instance.total = total
    return this
  }
  adobe(adobe: AdobeAtom): CustomerBo {
    this.instance.adobe = adobe
    return this
  }
  work(work: WorkAtom): CustomerBo {
    this.instance.work = work
    return this
  }
  mobile(mobile: MobileAtom): CustomerBo {
    this.instance.mobile = mobile
    return this
  }
  bank(bank: BankAtom): CustomerBo {
    this.instance.bank = bank
    return this
  }
  wallet(wallet: WalletAtom): CustomerBo {
    this.instance.wallet = wallet
    return this
  }
  reserve(reserve: ReserveAtom): CustomerBo {
    this.instance.reserve = reserve
    return this
  }
  memo(memo: MemoAtom): CustomerBo {
    this.instance.memo = memo
    return this
  }
  doze(doze: DozeAtom): CustomerBo {
    this.instance.doze = doze
    return this
  }
  inquiryKind(inquiryKind: []): CustomerBo {
    this.instance.inquiryKind = inquiryKind
    return this
  }
  ordersNotEnd(ordersNotEnd: []): CustomerBo {
    this.instance.ordersNotEnd = ordersNotEnd
    return this
  }

  build(): CustomerVo {
    return this.instance
  }
  transform(): CustomerTo {
    const to = new CustomerTo()
    to.setCar(this.instance.car)
    to.setPerson(this.instance.person)
    to.setTime(this.instance.time)
    to.setCalc(this.instance.calc)
    to.setUser(this.instance.user)
    to.setFunnel(this.instance.funnel)
    to.setConsult(this.instance.consult)
    to.setRowCount(this.instance.rowCount)
    to.setToday(this.instance.today)
    to.setTotal(this.instance.total)
    to.setAdobe(this.instance.adobe)
    to.setWork(this.instance.work)
    to.setMobile(this.instance.mobile)
    to.setWallet(this.instance.wallet)
    to.setReserve(this.instance.reserve)
    to.setUser(this.instance.user)
    to.setMemo(this.instance.memo)
    to.setDoze(this.instance.doze)
    to.setInquiryKind(this.instance.inquiryKind)
    to.setOrdersNotEnd(this.instance.ordersNotEnd)

    return to
  }
}

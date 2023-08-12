import { StrategyType } from 'app/utils/atom/strategy-atom'
import { PersonBuilder } from 'app/authors/atom/person-atom'
import { AdobeBuilder } from 'app/deliveries/atom/adobe-atom'
import { TimeBuilder } from 'app/utils/atom/time-atom'
import { OarBuilder } from 'app/orders/atom/oar-atom'
import { CalcBuilder } from 'app/orders/atom/calc-atom'
import { CustomerBo, CustomerTo, CustomerVo } from 'app/customers/mo/customer-mo/customer-vo'
import { CarBuilder } from 'app/customers/atom/car-atom'
import { UserBuilder } from 'app/authors/atom/user-atom'
import { FunnelBuilder } from 'app/customers/atom/funnel-atom'
import { ConsultBuilder } from 'app/boards/atom/consult-atom'
import { BarBuilder } from 'app/boards/atom/bar-atom'
import { TodayBuilder } from 'app/orders/atom/today-atom'
import { TotalBuilder } from 'app/orders/atom/total-atom'
import { RowCountBuilder } from 'app/boards/atom/row-count-atom'
import { WorkBuilder } from 'app/authors/atom/work-atom'
import { MobileAtom, MobileBuilder } from 'app/utils/atom/mobile-atom'
import { WalletBuilder } from 'app/taxes/atom/wallet-atom'
import { ReserveBuilder } from 'app/customers/atom/reserve-atom'
import { MemoBuilder } from 'app/customers/atom/memo-atom'

export class CustomerDesign implements StrategyType<CustomerVo[]> {
  handle(args?: any): CustomerVo[] {
    const items: CustomerVo[] = []
    const arg = args

    const len = 1
    let i = 0
    // console.log(' &&&&&&&&&&& 관리자-회원-상세 : 디자인 &&&&&&&&&&& ')
    // console.log(' arg 는 서버의 객체구조 ')
    const x1 = arg.addrAtom.address
    const x2 = arg.addrAtom?.addressDetail
    const x3 = arg.addrAtom?.postalCode
    const x4 = arg.countAtom?.articleCount
    const x5 = arg.atAtom.createdAt
    const x6 = arg.basicAddrAtom.address
    const x7 = arg.basicAddrAtom.addressDetail
    const x8 = arg.basicAddrAtom.postalCode
    const x9 = arg.bizAtom.hasCompanyId
    const x10 = arg.clientAtom.fiveCustomerTypes
    const x11 = arg.clientAtom.threeStatus
    const x12 = arg.countAtom.counselCount
    const x17 = arg.funnelAtom.fourFunnelTypes
    const x18 = arg.funnelAtom.searchEngine
    const x19 = arg.funnelAtom.searchKeyword
    const x20 = arg.funnelAtom.threeFunnels
    const x21 = arg.idAtom.id
    const x22 = arg.countAtom.inquiryCount
    const x23 = arg.mobileAtom.mobileAppInstall
    const x24 = arg.mobileAtom.mobileAppPush
    const x25 = arg.personAtom.cellPhone
    const x26 = arg.personAtom.name
    const x27 = arg.personAtom.phone 
    const x28 = arg.pointAtom.accumulatedPoint
    const x29 = arg.pointAtom.pointBalance
    const x30 = arg.todayAtom.orderAmount
    const x31 = arg.todayAtom.orderCount
    const x32 = arg.todayAtom.payAmount
    const x33 = arg.totalAtom.cancelCount
    const x34 = arg.totalAtom.orderAmount
    const x35 = arg.totalAtom.orderCount
    const x36 = arg.totalAtom.payAmount
    const x37 = arg.userAtom.dateOfLastAccess
    const x38 = arg.userAtom.email
    const x39 = arg.walletAtom.deposit
    const x40 = arg.userAtom.userId 
    const x41 = arg.clientAtom.memo
    const x42 = arg.bizAddrAtom.address
    const x43 = arg.bizAddrAtom.addressDetail
    const x44 = arg.bizAddrAtom.postalCode
    const x45 = arg.bizAtom.businessItem
    const x46 = arg.bizAtom.businessNumber
    const x47 = arg.bizAtom.businessType
    const x48 = arg.bizAtom.ceo
    const x49 = arg.bizAtom.cooperateNumber
    const x50 = arg.bizAtom.hasCompanyId
    const x51 = arg.bizAtom.name
    const x52 = arg.consentAtom.infoCollectUse
    const x53 = arg.consentAtom.infoConsignment
    const x54 = arg.consentAtom.receiveAdApp
    const x55 = arg.consentAtom.receiveInfoApp
    const x56 = arg.consentAtom.receiveInfoEmail
    const x57 = arg.consentAtom.receiveInfoSms
    const x58 = arg.consentAtom.termsOfService
    const ar1 = arg.inquiryTypeArray
    const ar2 = arg.orderArray


    const a = new AdobeBuilder().addr(x1).extraAddr(x2).zip(x3)
    .shipAddr(x6).shipExtraAddr(x7).shipZip(x8)
    .bizAddr(x42).bizExtraAddr(x43).bizZip(x44)
    .build()
    const c2 = new CarBuilder().id(x21).kind(x10).status(x11).build() 

    const f = new FunnelBuilder().keyword(x19).kind(x20).funnel(x17).searchEngine(x18).build()
    const r = new RowCountBuilder().inquiry(x22).counsel(x12).build()

    const t2 = new TodayBuilder().orderAmount(x30).orderCount(x31).payAmount(x32).build()
    const t3 = new TotalBuilder()
      .cancelCount(x33)
      .orderAmount(x34)
      .orderCount(x35)
      .payAmount(x36)
      .articleCount(x4)
      .build()
    const p = new PersonBuilder().phone(x25).name(x26).email(x38).homePhone(x27).build()
    const t = new TimeBuilder().createdAt(x5).accessAt(x37).build()
    const w = new WorkBuilder().hasCompanyId(x9).build()
    const m = new MobileBuilder().appInstall(x23).appPush(x24).build()
    const w2 = new WalletBuilder().deposit(x39).build()
    const r2 = new ReserveBuilder().balance('0').build()
    const u = new UserBuilder().userId(x40).build()
    const m2 = new MemoBuilder().content(x41).build()


    const to = new CustomerBo()
      .car(c2)
      .funnel(f)
      .rowCount(r)
      .today(t2)
      .total(t3)
      .adobe(a)
      .person(p)
      .time(t)
      .mobile(m)
      .work(w)
      .reserve(r2)
      .wallet(w2)
      .user(u)
      .memo(m2)
      .transform()
    

    const jo = to.toJson()

  //  console.log('const jo = to.toJson ::::: ', JSON.stringify(jo))

    items.push(jo)
    return items
  }
}

import { StrategyType } from 'app/utils/atom/strategy-atom'
import { PersonBuilder } from 'app/authors/atom/person-atom'
import { AdobeBuilder } from 'app/deliveries/atom/adobe-atom'
import { TimeBuilder } from 'app/utils/atom/time-atom'
import { OarBuilder } from 'app/orders/atom/oar-atom'
import { CalcBuilder } from 'app/orders/atom/calc-atom'
import { CustomerTo, CustomerVo } from 'app/customers/mo/customer-mo/customer-vo'
import { CarBuilder } from 'app/customers/atom/car-atom'
import { UserBuilder } from 'app/authors/atom/user-atom'
import { TotalBuilder } from 'app/orders/atom/total-atom'

export class CustomerDraft implements StrategyType<CustomerVo[]> {
  handle(args?: any): CustomerVo[] {
    const items: CustomerVo[] = []
    const array = args
    // console.log("&&&&&&&&&&& 데이터 : ",JSON.stringify(array))
    /**
        0		{15}
        id	:	5455r2pwtc
        createdAt	:	2023-07-17 09:24:08
        hasCompanyId	:	N
        userId	:	test002
        name	:	강민
        cellPhone	:	010-0000-0000
        email	:	test001@test.com
        memo	:
        postalCode	:
        address	:	부산 해운대구 APEC로 17 (우동, 센텀리더스마크)
        addressDetail	:
        lastOrderAmount	:	0원
        totalOrderAmount	:	0원
        totalOrderCount	:	0건
        totalRewardPoint	:	0원
    */
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].id
      const x2 = array[i].hasCompanyId
      const x4 = array[i].memo
      const a1 = new CarBuilder().id(x1).hasBizId(x2).status(x4).build()

      const x3 = array[i].userId
      const a6 = new UserBuilder().userId(x3).build()

      const x5 = array[i].name
      const x6 = array[i].cellPhone
      const x7 = array[i].email
      const a2 = new PersonBuilder().name(x5).phone(x6).email(x7).build()

      const x8 = array[i].postalCode
      const x9 = array[i].address
      const x10 = array[i].addressDetail
      const a3 = new AdobeBuilder().zip(x8).addr(x9).extraAddr(x10).build()

      const x11 = array[i].createdAt
      const x12 = array[i].updatedAt /**TODO */
      const a4 = new TimeBuilder().createdAt(x11).updatedAt(x12).build()

      const x13 = array[i].lastOrderAmount
      const x14 = array[i].totalOrderAmount
      const x15 = array[i].totalOrderCount
      const x16 = array[i].totalRewardPoint
      const a5 = new CalcBuilder()
        .lastOrderAmount(x13)
        .orderAmount(x14)
        .orderCountPerUser(x15)
        .build()

        const a7 = new TotalBuilder()
        .rewardPoint(x16)
        .build()

      const to = new CustomerTo()
      to.setCar(a1)
      to.setUser(a6)
      to.setPerson(a2)
      to.setAdobe(a3)
      to.setTime(a4)
      to.setCalc(a5)
      to.setTotal(a7)
      const jo = to.toJson()
      items.push(jo)
    }
    return items
  }
}

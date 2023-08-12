import { StrategyType } from 'app/utils/atom/strategy-atom'
import { PersonBuilder } from 'app/authors/atom/person-atom'
import { AdobeBuilder } from 'app/deliveries/atom/adobe-atom'
import { TimeBuilder } from 'app/utils/atom/time-atom'
import { OarBuilder } from 'app/orders/atom/oar-atom'
import { CalcBuilder } from 'app/orders/atom/calc-atom'
import { DormantTo, DormantVo } from 'app/customers/mo/dormant-mo/dormant-vo'
import { CarBuilder } from 'app/customers/atom/car-atom'
import { UserBuilder } from 'app/authors/atom/user-atom'

export class DormantDraft implements StrategyType<DormantVo[]> {
  handle(args?: any): DormantVo[] {
    const arr: DormantVo[] = []
     
    console.log("휴먼고객 드래프트 : ",JSON.stringify(args))
    /**
  
        {
  "id": "23dq3m",
  "createdAt": "2023-06-13 18:55:38",
  "hasCompanyId": "N",
  "userId": "ro",
  "name": "호날두",
  "cellPhone": "010-9898-7676",
  "email": "ronaldo@gmail.com",
  "memo": "",
  "postalCode": "78788",
  "address": "포국시 레알구 23",
  "addressDetail": "맨유아파트 1동 23호",
  "lastOrderAmount": "0",
  "totalOrderAmount": "0",
  "totalOrderCount": "0",
  "totalRewardPoint": "0"
}
    */
    const len = args.length
    let i = 0
    for (; i < len; i++) {
      const x1 = args[i].id
      const x2 = args[i].hasCompanyId
      const x4 = args[i].memo
      const a1 = new CarBuilder().id(x1).hasBizId(x2).status(x4).build()

      const x3 = args[i].userId
      const a6 = new UserBuilder().userId(x3).build()

      const x5 = args[i].name
      const x6 = args[i].cellPhone
      const x7 = args[i].email
      const a2 = new PersonBuilder().name(x5).phone(x6).email(x7).build()

      const x8 = args[i].postalCode
      const x9 = args[i].address
      const x10 = args[i].addressDetail
      const a3 = new AdobeBuilder().zip(x8).addr(x9).extraAddr(x10).build()

      const x11 = args[i].createdAt
      const x12 = args[i].updatedAt /**TODO */
      const a4 = new TimeBuilder().createdAt(x11).updatedAt(x12).build()

      const x13 = args[i].lastOrderAmount
      const x14 = args[i].totalOrderAmount
      const x15 = args[i].totalOrderCount
      const x16 = args[i].totalRewardPoint
      const a5 = new CalcBuilder()
        .lastOrderAmount(x13)
        .orderAmount(x14)
        .orderCountPerUser(x15)
        .build()

      const to = new DormantTo()
      to.setCar(a1)
      to.setUser(a6)
      to.setPerson(a2)
      to.setAdobe(a3)
      to.setTime(a4)
      to.setCalc(a5)
      const jo = to.toJson()
      arr.push(jo)
    }
    return arr
  }
}

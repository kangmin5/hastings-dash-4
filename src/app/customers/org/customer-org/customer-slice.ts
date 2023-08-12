import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { CustomerAxios as axios } from './customer-axios'
import { CustomerVo } from 'app/customers/mo/customer-mo/customer-vo'
import { CustomerFactory as factory } from './customer-factory'

import { CustomerDao as dao } from './customer-dao'
import {
  addCustomer,
  getAllCustomers,
  getCustomersBy,
  getCustomerById,
  alterCustomerById,
  delCustomerById
} from './customer-thunk'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleDao as TD } from 'app/systems/org/trouble-org/trouble-dao'
import { TroubleAspect as TA } from 'app/systems/org/trouble-org/trouble-aspect'
import { DateMap } from 'app/utils/atom/date-atom'
import { CarBuilder } from 'app/customers/atom/car-atom'

interface CustomerState {
  items: CustomerVo[]
  hasItem: boolean
  len: number

  itemsBy: CustomerVo[]

  item: CustomerVo
  able: boolean

  hasMessage: string
}

const initialState: CustomerState = {
  items: [],
  len: 0,
  itemsBy: [],
  item: new CustomerVo(),
  able: false,
  hasItem: false,
  hasMessage: ''
}

const CustomerSlice = createSlice({
  name: `customers`,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addCustomer.fulfilled, (state, { payload }) => {
        console.log('&&&&& 회원-등록-서버 : 기능없음 &&&&&')
      })
      .addCase(getAllCustomers.fulfilled, (state, { payload }) => {
    //    console.log('&&&&& 회원-목록-서버 : 다음 &&&&&')
        const queryIsGood = TA.check().isGoodQuery(payload)
        const authorHasToken = TA.check().hasToken(payload)
        if (queryIsGood && authorHasToken) {
          const arr = payload.data.array

   //     console.log('서버-회원-목록 : ', JSON.stringify(arr))

          /**
  {
  "id": "5455r2pwtc",
  "createdAt": "2023-07-17 09:24:08",
  "hasCompanyId": "N",
  "userId": "test002",
  "name": "강민",
  "cellPhone": "010-0000-0000",
  "email": "test001@test.com",
  "memo": "",
  "postalCode": "12345",
  "address": "부산 해운대구 APEC로 17 (우동, 센텀리더스마크)",
  "addressDetail": "",
  "lastOrderAmount": "0원",
  "totalOrderAmount": "0원",
  "totalOrderCount": "0건",
  "totalRewardPoint": "0원"
}
 */
          state.items = dao.getAllSuccess(arr)
          if (state.items.length > 0) {
            state.hasItem = true
            state.len = state.items.length
          } else {
            state.hasMessage = '회원-목록-서버 : 정보없음'
            console.log('회원-목록-서버 : 정보없음')
          }
        } else {
          console.log(' 회원-목록-서버 : 도달할 수 없는 에러발생')
        }
      })

      .addCase(getCustomersBy.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
          state.itemsBy = dao.addOneSuccess(payload)
        } else {
          console.log(`[ ${DateMap().get()} ] 회원-수정-서버 : 쿼리 에러 `)
        }
        // state.itemsToAdd =
        //   payload.data.code === "200" ? dao.addOneSuccess(payload) : undefined; //**TODO
      })

      .addCase(getCustomerById.fulfilled, (state, { payload }) => {
        console.log('[',DateMap().get(),'] [addCase] 회원-상세  ')
        const queryIsGood = TA.check().isGoodQuery(payload)
        const authorHasToken = TA.check().hasToken(payload)
        if (queryIsGood && authorHasToken) {
          const jo = payload.data.json
     //      console.log('서버-회원-상세 : ', JSON.stringify(jo))
          /**
 {
  "addrAtom": {
    "address": "부산 해운대구 A로 17 (우동, 센텀리더스마크)",
    "addressDetail": "부산빌라 102호",
    "postalCode": "12345"
  },
  "atAtom": {
    "createdAt": "2023-07-17 09:24:08"
  },
  "basicAddrAtom": {
    "address": "인천광역시 동구 98길",
    "addressDetail": "동구아파트 100동 1100호",
    "postalCode": "98987"
  },
  "bizAddrAtom": {
    "address": "서울시 상성구",
    "addressDetail": "14번지 2호",
    "postalCode": "92853"
  },
  "bizAtom": {
    "businessItem": "전자상거래",
    "businessNumber": "043-98-43783",
    "businessType": "도소매업",
    "ceo": "김풀잎",
    "cooperateNumber": "123456-1234567",
    "hasCompanyId": "Y",
    "name": "보성녹차"
  },
  "clientAtom": {
    "fiveCustomerTypes": "일반회원",
    "memo": "더미 메모 입니다",
    "threeStatus": "정상"
  },
  "consentAtom": {
    "infoCollectUse": "Y",
    "infoConsignment": "Y",
    "receiveAdApp": "N",
    "receiveInfoApp": "N",
    "receiveInfoEmail": "Y",
    "receiveInfoSms": "Y",
    "termsOfService": "Y"
  },
  "countAtom": {
    "articleCount": "7", // 영수증신청, 상담, 문의 총합
    "counselCount": "1",
    "inquiryCount": "3" 
  },
  "funnelAtom": {
    "fourFunnelTypes": "일반",
    "searchEngine": "네이버",
    "searchKeyword": "봉투",
    "threeFunnels": "웹"
  },
  "idAtom": {
    "id": "5455r2p"
  },
  "inquiryTypeArray": [
    {
      "idAtom": {
        "id": 1
      },
      "qTypeAtom": {
        "inUse": "Y",
        "name": "사이트 이용",
        "orderPosition": 1
      }
    },
    {
      "idAtom": {
        "id": 2
      },
      "qTypeAtom": {
        "inUse": "Y",
        "name": "시스템 오류",
        "orderPosition": 2
      }
    },
    {
      "idAtom": {
        "id": 3
      },
      "qTypeAtom": {
        "inUse": "Y",
        "name": "회원",
        "orderPosition": 3
      }
    },
    {
      "idAtom": {
        "id": 4
      },
      "qTypeAtom": {
        "inUse": "Y",
        "name": "상품문의",
        "orderPosition": 4
      }
    },
    {
      "idAtom": {
        "id": 5
      },
      "qTypeAtom": {
        "inUse": "Y",
        "name": "배송문의",
        "orderPosition": 5
      }
    },
    {
      "idAtom": {
        "id": 6
      },
      "qTypeAtom": {
        "inUse": "Y",
        "name": "취소/교환/환불",
        "orderPosition": 6
      }
    },
    {
      "idAtom": {
        "id": 7
      },
      "qTypeAtom": {
        "inUse": "Y",
        "name": "대량구매",
        "orderPosition": 7
      }
    },
    {
      "idAtom": {
        "id": 8
      },
      "qTypeAtom": {
        "inUse": "Y",
        "name": "이벤트/쿠폰/적립금",
        "orderPosition": 8
      }
    },
    {
      "idAtom": {
        "id": 9
      },
      "qTypeAtom": {
        "inUse": "Y",
        "name": "기타",
        "orderPosition": 9
      }
    }
  ],
  "mobileAtom": {
    "mobileAppInstall": "미인증",
    "mobileAppPush": "OFF"
  },
  "orderArray": [
    {
      "idAtom": {
        "id": 7
      },
      "txAtom": {
        "status": "미처리",
        "txNo": "2306270001"
      }
    }
  ],
  "personAtom": {
    "cellPhone": "010-0000-0000",
    "name": "강민",
    "phone": "없음"
  },
  "pointAtom": {
    "accumulatedPoint": "3456",
    "pointBalance": "1234"
  },
  "todayAtom": {
    "orderAmount": "0",
    "orderCount": "0",
    "payAmount": "0"
  },
  "totalAtom": {
    "cancelCount": "0",
    "orderAmount": "14000",
    "orderCount": "3",
    "payAmount": "14000"
  },
  "userAtom": {
    "dateOfLastAccess": "2023-07-17 15:12:00",
    "email": "test002@test.com",
    "userId": "test002"
  },
  "walletAtom": {
    "deposit": "100000"
  }
}
          */

          if (jo.idAtom.id !== '') {
            state.item = dao.getByIdSuccess(jo)[0]
          console.log(' 회원-상세-서버 : 정보있음 \n ')
            // state.item = item 페이지 이동시 새로고침때문에 필요없음
          //  window.localStorage.setItem('customer', JSON.stringify(item))
          //  console.log(' 세션값저장2  \n ', window.localStorage.getItem('customer'))
          
          } else {
            state.able = false
            state.hasMessage = '회원-상세-서버 : 정보없음'
            console.log('회원-상세-서버 : 정보없음')
          }
        } else {
          console.log(' 회원-상세-서버 : 도달할 수 없는 에러발생')
        }
      })
      .addCase(alterCustomerById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[${DateMap().get()}] 관리자-회원-수정 : 쿼리에러 `)
        }
      })

      .addCase(delCustomerById.fulfilled, (state, { payload }) => {
        if (TA.check().isGoodQuery(payload)) {
        } else {
          console.log(`[Error Issue] ${DateMap().get()} [회원정보] 삭제작업 : 쿼리 체크 Error `)
        }
      })
      .addCase(getAllCustomers.rejected, (state, { payload }) => {
        TD.rejectedTrouble(`[Reject Issue] ${DateMap().get()} [회원정보] 전체목록 : 서버연결 실패 `)
      })
  }
})

export const {} = CustomerSlice.actions
export default CustomerSlice.reducer

import { VerticalNavItemsType } from '@core/layouts/types'

export default function navigation(): VerticalNavItemsType {
  return [
    {
      sectionTitle: '회원관리'
    },
    {
      id: '1',
      title: '회원 관리',
      children: [
        {
          title: '회원 관리',
          path: '/customers/customer'
        },
        {
          title: '휴면고객 관리',
          path: '/customers/dormant'
        },
        {
          title: '사업자번호 조회',
          path: '/customers/biz'
        },
        {
          title: '메모 관리',
          path: '/customers/note'
        },
        {
          title: '쇼핑카트 조회',
          path: '/customers/cart'
        },
        {
          title: '찜한상품 조회',
          path: '/customers/wish'
        },
        {
          title: '구독 관리',
          path: '/customers/subscribe'
        }
      ]
    },
    {
      id: '2',
      title: '프로모션 회원관리',
      children: [
        {
          title: '상품후기 관리',
          path: '/products/review'
        },
        {
          title: '적립금 지급 내역',
          path: '/customers/reserve'
        },
        {
          title: `유입경로 관리`,
          path: '/customers/funnel'
        },
        {
          title: '쿠폰 관리',
          path: '/customers/coupon'
        }
      ]
    },
    {
      id: '2',
      title: '결제 계좌 관리',
      children: [
        {
          title: '은행계좌 관리',
          path: '/taxes/bank'
        }
      ]
    }
  ]
}

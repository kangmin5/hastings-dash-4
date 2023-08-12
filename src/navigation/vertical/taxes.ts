import { VerticalNavItemsType } from '@core/layouts/types'

export default function navigation(): VerticalNavItemsType {
  return [
    {
      sectionTitle: '회계'
    },
    {
      id: '1',
      title: '회계',
      children: [
        {
          title: '통장 관리',
          path: '/accounts/bank'
        },
        {
          title: '세금계산서/현금영수증 신청관리',
          path: '/accounts/receipt'
        }
      ]
    },

    {
      id: '2',
      title: '경리',
      children: [
        {
          title: '카드영수증 발급/조회',
          path: '/accounts/card'
        },
        {
          title: '현금영수증 발급/조회',
          path: '/accounts/cash'
        },
        {
          title: '간이영수증 발급/조회',
          path: '/accounts/slip'
        },
        {
          title: '미발급 영수증 관리',
          path: '/accounts/unissued'
        },
        {
          title: '발행 설정 관리',
          path: '/accounts/issue'
        }
      ]
    },
    {
      id: '3',
      title: '세금계산서',
      children: [
        {
          title: '세금계산서 신청관리',
          path: '/accounts/tax'
        },
        {
          title: '세금계산서 조회/발급',
          path: '/accounts/tax'
        }
      ]
    },
    {
      id: '4',
      title: '세금계산서 관리',
      children: [
        {
          title: '세금계산서 발행신청 관리',
          path: '/accounts/tax'
        },
        {
          title: '세금계산서 발행',
          path: '/accounts/tax'
        },
        {
          title: '세금계산서 엑셀 업로드',
          path: '/accounts/tax'
        }
      ]
    }
  ]
}

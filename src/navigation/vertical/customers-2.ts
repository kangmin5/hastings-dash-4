import { VerticalNavItemsType } from '@core/layouts/types'

export default function navigation(): VerticalNavItemsType {
  const clerk = '/marketing/clerk'
  const marketer = '/marketing/marketer'

  return [
    {
      sectionTitle: '회원관리'
    },
    {
      id: '1',
      title: '회원관리',
      children: [
        {
          title: '회원/CRM 관리하기',
          path: `${clerk}/gather-customers`
        },
        {
          title: '휴면고객 관리',
          path: `${clerk}/gather-dormant-customers`
        },
        {
          title: '회원 엑셀파일 관리',
          path: `${clerk}/gather-dormant-customers`
        }
      ]
    },
    {
      id: '2',
      title: '회원관리 프로모션',
      children: [
        {
          title: '적립금 내역 조회',
          path: ``
        },
        {
          title: '쇼핑몰 회원탈퇴 관리',
          path: ''
        },
        {
          title: '회원형태일괄수정',
          path: 'user_type_modify'
        },
        {
          title: '쿠폰 관리',
          path: `${marketer}/gather-coupons`
        }
      ]
    }

    // {
    //   sectionTitle: '접속통계'
    // },
    // {
    //   id: '2',
    //   title: '통계',
    //   children: [
    //     {
    //       title: '추후 협의 예정',
    //       path: 'stats'
    //     }
    //   ]
    // }
  ]
}

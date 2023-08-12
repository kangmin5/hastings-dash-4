import { VerticalNavItemsType } from '@core/layouts/types'

export default function navigation(): VerticalNavItemsType {
  return [
    {
      sectionTitle: '대시보드'
    },
    {
      id: '1',
      title: '쇼핑몰 관리',
      children: [
        {
          title: '홈페이지 메인',
          path: '/systems/home'
        },
        {
          title: '쇼핑몰 메인 관리',
          path: '/systems/shop'
        }
      ]
    }
  ]
}

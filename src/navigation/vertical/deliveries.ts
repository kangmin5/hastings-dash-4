import { VerticalNavItemsType } from '@core/layouts/types'

export default function navigation(): VerticalNavItemsType {
  return [
    {
      sectionTitle: '배송관리'
    },

    {
      id: '1',
      title: '택배 연동',
      children: [
        {
          title: '배송 관리',
          path: '/deliveries/delivery'
        },
        {
          title: '일괄배송 관리',
          path: '/deliveries/batch'
        },
        {
          title: '배송지 조회',
          path: '/deliveries/address'
        },
        {
          title: '로젠택배 가이드',
          path: '/deliveries/courier'
        }
      ]
    }
  ]
}

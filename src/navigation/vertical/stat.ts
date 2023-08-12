import { VerticalNavItemsType } from '@core/layouts/types'

export default function navigation(): VerticalNavItemsType {
  return [
    {
      sectionTitle: '접속통계'
    },

    {
      id: '1',
      title: '기획',
      children: [
        {
          id: '1',
          title: '매출분석',
          path: '/systems/revenue'
        },
        {
          id: '2',
          title: '드래프트',
          path: '/systems/draft'
        },
        {
          id: '1',
          title: '토스트',
          path: '/systems/toast'
        }
      ]
    }
  ]
}

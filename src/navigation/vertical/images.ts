import { VerticalNavItemsType } from '@core/layouts/types'

export default function navigation(): VerticalNavItemsType {
  return [
    {
      sectionTitle: '메일/팝업'
    },
    {
      id: '1',
      title: '고객 연락처',
      children: [
        {
          title: '메일 발송',
          path: '/deliveries/mail'
        }
      ]
    }
  ]
}

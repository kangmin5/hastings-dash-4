import { VerticalNavItemsType } from '@core/layouts/types'

export default function navigation(): VerticalNavItemsType {
  return [
    {
      sectionTitle: '쇼핑몰 구축'
    },

    {
      id: '1',
      title: '쇼핑몰 기본관리',
      children: [
        {
          title: '이미지 미리보기',
          path: '/systems/preview'
        }
      ]
    }
  ]
}

import { VerticalNavItemsType } from '@core/layouts/types'

export default function navigation(): VerticalNavItemsType {
  return [
    {
      sectionTitle: '인사관리'
    },
    {
      id: '1',
      title: '사원 관리',
      children: [
        {
          title: '사원 관리',
          path: '/systems/employ'
        }
      ]
    },

    {
      id: '1',
      title: '채용 관리',
      children: [
        {
          title: '이력서 관리',
          path: '/systems/resume'
        }
      ]
    }
  ]
}

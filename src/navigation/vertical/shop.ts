import { VerticalNavItemsType } from '@core/layouts/types'

export default function navigation(): VerticalNavItemsType {
  return [
    {
      sectionTitle: '시스템 관리'
    },
    {
      id: '1',
      title: '사원 관리',
      children: [
        {
          title: '사원 관리',
          path: '/systems/staff'
        },
        {
          title: '사원 등록',
          path: '/systems/staff-add'
        }
      ]
    },

    // {
    //   id: '1',
    //   title: '채용 관리',
    //   children: [
    //     {
    //       title: '이력서 관리',
    //       path: '/systems/resume'
    //     }
    //   ]
    // }
  ]
}

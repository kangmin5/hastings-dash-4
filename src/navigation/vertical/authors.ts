import { VerticalNavItemsType } from '@core/layouts/types'

export default function navigation(): VerticalNavItemsType {

  return [
    {
      sectionTitle: '보안'
    },

    {
      id: '1',
      title: '로그인',
      children: [
        {
          id: '1',
          title: '관리자 로그인',
          children: [
            {
              title: 'Login',
              path: 'login'
            }
          ]
        }
      ]
    }
  ]
}

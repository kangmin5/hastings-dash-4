import { VerticalNavItemsType } from '@core/layouts/types'

export default function navigation(): VerticalNavItemsType {
  return [
    {
      sectionTitle: '주문관리'
    },
    {
      id: '1',
      title: '전체 주문 관리',
      children: [
        {
          id: '1',
          title: '전체주문 목록',
          path: `/orders/order`
        },
        {
          id: '2',
          title: '입금주문 관리',
          path: `/orders/paid`
        },
        {
          id: '3',
          title: '미입금주문 관리',
          path: `/orders/unpaid`
        },
        {
          id: '4',
          title: '미확정 입금주문 관리',
          path: `/orders/confirm`
        },
        {
          id: '5',
          title: '입금주문 등록',
          path: `/orders/order-add`
        }
      ]
    },
    {
      id: '2',
      title: '엑셀 관리',
      children: [
        {
          id: '1',
          title: '주문서 엑셀파일',
          path: '/orders/order-excel'
        }
      ]
    },
    {
      id: '3',
      title: '주문제작 견적 ',
      children: [

        {
          id: '1',
          title: '주문제작 견적서 목록',
          path: '/quotes/quick'
        },

        {
          id: '2',
          title: '주문제작 견적서 항목관리',
          path: '/quotes/quick-item'
        }
      ]
    },
    {
      id: '3',
      title: '간편견적 관리',
      children: [
        {
          id: '1',
          title: '간편 견적서 목록',
          path: '/quotes/simple'
        },

      ]
    },

  ]
}

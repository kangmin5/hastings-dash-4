import { VerticalNavItemsType } from '@core/layouts/types'

export default function navigation(): VerticalNavItemsType {
  return [
    {
      sectionTitle: '상품관리'
    },

    {
      id: '1',
      title: '상품분류',
      children: [
        {
          id: '1',
          title: '상품 분류 관리',
          path: '/products/category'
        }
      ]
    },
    {
      id: '2',
      title: '상품 관리',
      children: [
        {
          id: '1',
          title: '전체 상품 관리',
          path: '/products/product'
        },
        // {
        //   id: '2',
        //   title: '상품상세 관리',
        //   path:   `/products/product/:id`
        // },
        {
          id: '3',
          title: '메인 상품 관리',
          path: '/products/main-product'
        }
      ]
    },
    {
      id: '3',
      title: '상품 등록',
      children: [
        {
          id: '1',
          title: '공통정보 등록',
          path: '/products/attribute-add'
        },
        {
          id: '2',
          title: '상품 등록',
          path: '/products/product-add'
        },
        {
          id: '3',
          title: '엑셀 업로드 상품 등록',
          path: '/products/product-excel'
        }
      ]
    }
  ]
}

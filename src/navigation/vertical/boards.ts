import { VerticalNavItemsType } from '@core/layouts/types'

//export default function navigation(): VerticalNavItemsType {
  export default function navigation(): any {
  return [
    {
      sectionTitle: '게시판'
    },

    {
      id: '1',
      title: '센터',
      children: [
        {
          id: `1`,
          title: '게시판 홈',
          path: '/boards/board'

        }
      ]
    },

    {
      id: '2',
      title: '공지사항 관리',
      children: [
        {
          id: `1`,
          title: '공지사항 목록',
          path: `/boards/notice`
        },
        {
          id: `2`,
          title: '공지사항 등록',
          path: `/boards/notice-add`
        }
      ]
    },
    {
      id: `3`,
      title: '자주 묻는 질문 관리',
      children: [
        {
          id: `1`,
          title: '자주 묻는 질문 목록',
          path: `/boards/faq`
        },
        {
          id: `2`,
          title: '자주 묻는 질문 등록',
          path: `/boards/faq-add`
        }
      ]
    },
    {
      id: '4',
      title: '1:1 질문',
      path: '/boards/inquiry',

      children: [
        {
          id: `1`,
          title: '1:1 답변 목록',
          path: `/boards/inquiry`
        },
        {
          id: `2`,
          title: '1:1 질문 답변',
          path: `/boards/inquiry-answer`
        },
        {
          id: `3`,
          title: '1:1 질문 타입',
          path: `/boards/inquiry-kind`
        }
      ]
    },
    {
      id: '5',
      title: '상담',
      children: [
        {
          id: `1`,
          title: '상담 목록',
          path: '/boards/counsel'
        }
      ]
    }

    // {
    //   id: '4',
    //   title: 'FAQ 관리',
    //   children: [
    //     {
    //       id: `1`,
    //       title: 'FAQ 목록',
    //       path: `${Actors.faq_operator}/faqs`
    //     },
    //     {
    //       id: `2`,
    //       title: 'FAQ 상세',
    //       path: `${Actors.faq_operator}/the-faq`
    //     },
    //     {
    //       id: `3`,
    //       title: 'FAQ 등록',
    //       path: `${Actors.faq_operator}/add`
    //     }
    //   ]
    // }
  ]
}

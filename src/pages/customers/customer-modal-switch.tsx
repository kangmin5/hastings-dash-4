import * as React from 'react'
import { useAppDispatch, useAppSelector } from 'custom-hooks'
import { RootState } from 'store'
import { CustomerModal } from "pages/customers/customer-modal-2"
import { CustomerVo } from "app/customers/mo/customer-mo/customer-vo"


export function useCustomerSwitch() {

  const [content, setContent] = React.useState(<></>)
  const [modalOpen, setModalOpen] = React.useState(false)
  const [modalWidth, setModalWidth] = React.useState('')
  const [title, setTitle] = React.useState('')

  function openModal(data: string, client: CustomerVo) {
    alert(` 2 openCustomerModal data is ${data} `)
    switch (data) {
      case 'registeredInformation':
        setContent(
          <>
            <CustomerModal viewName='회원가입정보' />
          </>
        )
        setModalWidth('lg')
        setModalOpen(true)

        break

      case 'customerDetailInformation':
        setContent(
          <>
            <CustomerModal viewName='회원상세정보' />
          </>
        )
        setModalWidth('lg')
        setModalOpen(true)
        break
      case 'writeMemo':

        // setContent(<RegisterMemo />)
        setModalWidth('md')
        setTitle('메모 작성')
        setModalOpen(true)
        break
    }

    return ({ content, modalOpen, modalWidth, title })



  }

  function closeModal() {
    setModalOpen(false)
  }

  return {
    openModal, closeModal
  }
}

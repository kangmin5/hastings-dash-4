
// ** React Imports
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'custom-hooks'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Table,
  TableBody,
  Typography,
  Card
} from '@mui/material'
import Client from 'app/systems/prototype/clients'
import { CustomerTabHeaderFirst as TabFirst, CustomerTabHeaderSecond as TabSecond } from 'app/systems'

// import { CommonModal } from 'app/technical-support/factory/modals'

// import { SendTempPassword } from 'views/security'

type tabType = 'near' | 'new'

export default function CustomerDetail() {
  const client: Client = useAppSelector(state => state.customer.theClient)

  // ** State
  const [modalOpen, setModalOpen] = useState(false)
  const [title, setTitle] = useState('')

  function openModal() {
    setModalOpen(true)
  }

  function closeModal() {
    setModalOpen(false)
  }

  // function onDataReceived(data: any) {
  //   setTitle(data)
  // }

  // ** Function to handle Tab change

  useEffect(() => {
    const homeTab = localStorage.getItem('homeTab') as tabType | null
    setCurrentTab(homeTab ?? 'near')
  }, [])

  const [currentTab, setCurrentTab] = useState<tabType>('near')
  const clickTab = (tab: tabType) => {
    setCurrentTab(tab)
    localStorage.setItem('homeTab', tab)
  }

  return (
    <>
      <Typography variant='h4'>회원 상세 정보</Typography>
      <div className='tbl-view has-accordion'>
        <Card>
          <Table>
            <caption>회원 상제 정보 테이블</caption>
            <colgroup>
              <col width='20%' />
              <col width='30%' />
              <col width='20%' />
              <col width='30%' />
            </colgroup>
            <TableBody>
              <tr>
                <th scope='row'>이름</th>
                <td>{ client.name }</td>
                <th scope='row'>아이디</th>
                <td>{ client.userId }</td>
              </tr>
              <tr>
                <th scope='row'>비밀번호</th>
                <td>
                  <Button onClick={ openModal } size='small' variant='outlined' className='default'>
                    임시 비밀번호 발송
                  </Button>
                </td>
                <th scope='row'>전화</th>
                <td>{ client.phone || '-' }</td>
              </tr>
              <tr>
                <th scope='row' className='vt'>
                  휴대폰
                </th>
                <td>
                  { client.cellPhone }
                  <p className='txt1 gray1'>수신동의 : N, 2023/03/31 (10:55)</p>
                </td>
                <th scope='row' className='vt'>
                  이메일
                </th>
                <td>
                  <div className=''>
                    { client.email }
                    <p className='txt1 gray1'>수신동의 : Y, 2023/03/31 (10:55)</p>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>주소</th>
                <td colSpan={ 3 }>{ client.address }</td>
              </tr>
            </TableBody>
          </Table>
        </Card>
      </div>
      <Accordion className='accordion'>
        <AccordionSummary id='panel-header-2' aria-controls='panel-content-2'>
          {/* [Dev] 펼쳐졌을 경우 텍스트가 접기로 수정되어야 함 */ }
          <span>더보기</span>
        </AccordionSummary>
        <AccordionDetails>
          <div className='tbl-view'>
            <Table>
              <caption>회원 상세정보 더보기 </caption>
              <colgroup>
                <col width='20%' />
                <col width='30%' />
                <col width='20%' />
                <col width='30%' />
              </colgroup>
              <TableBody>
                <tr>
                  <th scope='row'>
                    { ' ' }
                    <Typography variant='body2'>d</Typography>
                  </th>
                  <td colSpan={ 3 }>
                    <div className='btn-group'>
                      <span>{ client.address }</span>
                      <Button size='small' variant='outlined' className='default ml16'>
                        배송지 목록
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>유입경로</th>
                  <td colSpan={ 3 }>
                    <span>검색엔진 : { client.searchEngine }</span>
                    <span className='ml16'>검색어 : { client.searchKeyword }</span>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>앱 설치여부</th>
                  <td>{ client.isInstalledApp }</td>
                  <th scope='row'>Push 수신여부</th>
                  <td>{ client.isMobileAppPush }</td>
                </tr>
              </TableBody>
            </Table>
          </div>
        </AccordionDetails>
      </Accordion>

      <div className='tbl-view'>
        <form onSubmit={ e => e.preventDefault() }>
          <Table>
            <caption>회사 정보 테이블</caption>
            <colgroup>
              <col width='20%' />
              <col width='30%' />
              <col width='20%' />
              <col width='30%' />
            </colgroup>
            <TableBody>
              <tr>
                <th scope='row'>회사명</th>
                <td>{ client.companyName }</td>
                <th scope='row'>대표자명</th>
                <td>{ client.ceo }</td>
              </tr>
              <tr>
                <th scope='row'>사업자번호</th>
                <td>{ client.businessNumber }</td>
                <th scope='row'>법인번호</th>
                <td>{ client.cooperateNumber }</td>
              </tr>
              <tr>
                <th scope='row'>업태</th>
                <td>{ client.businessType }</td>
                <th scope='row'>업종</th>
                <td>{ client.businessItem }</td>
              </tr>
              <tr>
                <th scope='row'>회사주소</th>
                <td colSpan={ 3 }>
                  [{ client.companyAddress }] { client.companyAddress }
                </td>
              </tr>
            </TableBody>
          </Table>
        </form>
      </div>

      <TabFirst />
      <TabSecond />

      {/* <CommonModal width='sm' title={'임시 비밀번호 발송'} open={modalOpen} close={closeModal} /> */ }
    </>
  )
}

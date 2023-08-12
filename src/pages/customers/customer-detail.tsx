// ** React Imports
import React from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'custom-hooks'
//** DialogMark */
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import { Icon } from '@iconify/react'

import { getCustomerById } from 'app/customers/org/customer-org/customer-thunk'
// ** MUI Imports
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Grid,
  Table,
  TableBody,
  Typography
} from '@mui/material'
import { Modal } from './modal'
import { CustomerVo } from 'app/customers/mo/customer-mo/customer-vo'
import { GetStaticProps } from 'next'
import { PersonAtom } from 'app/authors/atom/person-atom'
import { UserAtom } from 'app/authors/atom/user-atom'
import { AdobeAtom } from 'app/deliveries/atom/adobe-atom'
import { FunnelAtom } from 'app/customers/atom/funnel-atom'
import { MobileAtom, MobileBuilder, MobileDto } from 'app/utils/atom/mobile-atom'
import { WorkAtom } from 'app/authors/atom/work-atom'
import { DateMap } from 'app/utils/atom/date-atom'
import { CarAtom } from 'app/customers/atom/car-atom'
import {selectCustomerById} from 'app/customers/org/customer-org/customer-selector'
//import SendTempPassword from '../register/SendTempPassword'
import { CustomerAxios as axios } from 'app/customers/org/customer-org/customer-axios'
export function CustomerDetail({
  person, user, adobe, funnel, work, mobile}) {

  // ** State
  const [modalOpen, setModalOpen] = React.useState(false)
  const [pearShow, setPearShow] = React.useState<boolean>(false) /** 배송지 */

  const [title, setTitle] = React.useState('')

  const dispatch = useAppDispatch()
  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const onDataReceived = data => {
    setTitle(data)
  }

  const concatAddress = React.useCallback((a: string, b: string, c: string) => {
    return '[' + a + '] ' + b + ' ' + c
  }, [])
  const [car,setCar] = React.useState(new CarAtom())
  
 // const [person, setPerson] = React.useState(new PersonAtom())


  // React.useEffect(() => {
  //   console.log('[', DateMap().get(), '][useEffect] 자식 : ')
  //   // const c = window.localStorage.getItem('customer')
  //   const resp = axios.then().getById(box)

    
  //   console.log('[useEffect] 응답값 : ', JSON.stringify(resp))
  //   const cup = cook
  //   console.log('&&&&&&&&&&&& cup ', JSON.stringify(cook))
  //   const {
  //     car,
  //     person,
  //     time,
  //     calc,
  //     user,
  //     funnel,
  //     rowCount,
  //     reserve,
  //     today,
  //     total,
  //     adobe,
  //     mobile,
  //     work
  //   }: any = cup
  //   setCar(car)
  //   setPerson(person)
  //   setUser(user)
  //   setAdobe(adobe)
  //   setMobile(mobile)
  //   setWork(work)

  //   console.log(' 회원-상세-페이지 : ', JSON.stringify(user))
  //   console.log(' 1- 사람 : ', JSON.stringify(person))
  //   console.log(' 2- 사용자 : ', JSON.stringify(user))
  //   // const name = customer.person.c

  // }, [])

  return (
    <>
      <Grid container direction='column' justifyContent='flex-start' alignItems='center'>
        <Box sx={{ width: '100%' }}>
          <Typography>회원 상세 정보</Typography>
          <Card>

            <div className='search-box'>
              <Table>
                <caption>회원 상제 정보 테이블</caption>
                <colgroup>
                  <col width='25%' />
                  <col width='25%' />
                  <col width='25%' />
                  <col width='25%' />
                </colgroup>
                <TableBody>
                  <tr>
                    <th scope='row'>
                      <Typography variant='body1'>이름</Typography>
                    </th>
                    <td>
                      <Typography variant='body1'>{person?.name}</Typography>
                    </td>
                    <th scope='row'>
                      {' '}
                      <Typography variant='body1'>아이디</Typography>
                    </th>
                    <td>
                      <Typography variant='body1'>{user.userId}</Typography>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>
                      <Typography variant='body1'>비밀번호</Typography>
                    </th>
                    <td>
                      <Button onClick={openModal} variant='outlined' color='primary'>
                        임시 비밀번호 발송
                      </Button>
                    </td>
                    <th scope='row'>
                      <Typography variant='body1'>휴대폰</Typography>
                    </th>
                    <td>
                      <Typography variant='body1'>{person.phone}</Typography>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>
                      <Typography variant='body1'>전화</Typography>
                    </th>
                    <td>
                      <Typography variant='body1'>{person.homePhone}</Typography>
                    </td>
                    <th scope='row'>
                      <Typography variant='body1'>이메일</Typography>
                    </th>
                    <td>
                      <Typography variant='body1'>{person.email}</Typography>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={1} scope='row'>
                      <Typography variant='body1'>주소</Typography>
                    </th>
                    <td colSpan={3}>
                      <Typography variant='body1'>
                        {(adobe.zip === '') ?

                          '등록된 주소가 없습니다'
                          :
                          concatAddress(adobe.zip, adobe.addr, adobe.extraAddr)}
                      </Typography>
                    </td>
                  </tr>
                </TableBody>
              </Table>
            </div>

          </Card>
          <Accordion>
            <AccordionSummary
              sx={{ justifyContent: 'center !important', display: 'flex' }}
              id='panel-header-2'
              aria-controls='panel-content-2'
              expandIcon={<Icon icon='mdi:chevron-down' />}
            >
              <Typography>더보기</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Table>
                <caption>회원 상세정보 더보기 </caption>
                <colgroup>
                  <col width='25%' />
                  <col width='25%' />
                  <col width='25%' />
                  <col width='25%' />
                </colgroup>
                <TableBody>
                  <tr>
                    <th colSpan={1} scope='row'>
                      <Typography variant='body1'>주소</Typography>
                    </th>
                    <td colSpan={3}>
                      <Typography variant='body1'>{ }</Typography>
                      <Button variant='outlined' color='primary' size='small' onClick={() => setPearShow(true)}>
                        배송지 목록
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={1} scope='row'>
                      <Typography variant='body1'>유입경로</Typography>
                    </th>
                    <td colSpan={3}>
                      <Typography variant='body1'>검색엔진 : {funnel.searchEngine}</Typography>
                      <Typography variant='body1'>검색어 : {funnel.keyword}</Typography>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>
                      <Typography variant='body1'>앱 설치여부</Typography>
                    </th>
                    <td>
                      <Typography variant='body1'>{mobile.appInstall}</Typography>
                    </td>
                    <th scope='row'>
                      <Typography variant='body1'>Push 수신여부</Typography>
                    </th>
                    <td>
                      <Typography variant='body1'>{mobile.appPush}</Typography>
                    </td>
                  </tr>
                </TableBody>
              </Table>
            </AccordionDetails>
          </Accordion>


          {(work.bizName === '') ?

            <>


            </> :

            <>
              <Card>

                <table>
                  <caption>회사 정보 테이블</caption>
                  <colgroup>
                    <col width='25%' />
                    <col width='25%' />
                    <col width='25%' />
                    <col width='25%' />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope='row'>
                        <Typography variant='body1'>회사명</Typography>
                      </th>
                      <td>
                        <Typography variant='body1'>{work.bizName}</Typography>
                      </td>
                      <th scope='row'>
                        <Typography variant='body1'>대표자명</Typography>
                      </th>
                      <td>
                        <Typography variant='body1'>{work.ceo}</Typography>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>
                        <Typography variant='body1'>사업자번호</Typography>
                      </th>
                      <td>
                        <Typography variant='body1'>{work.bizNo}</Typography>
                      </td>
                      <th scope='row'>
                        <Typography variant='body1'>법인번호</Typography>
                      </th>
                      <td>
                        <Typography variant='body1'>{work.corpNo}</Typography>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>
                        <Typography variant='body1'>업태</Typography>
                      </th>
                      <td>
                        <Typography variant='body1'>{work.bizItem}</Typography>
                      </td>
                      <th scope='row'>
                        <Typography variant='body1'>업종</Typography>
                      </th>
                      <td><Typography variant='body1'>{work.bizKind}</Typography></td>
                    </tr>
                    <tr>
                      <th colSpan={1} scope='row'>
                        <Typography variant='body1'>회사주소</Typography>
                      </th>
                      <td colSpan={3}>
                        <Typography variant='body1'>{adobe.bizAddr}</Typography>
                      </td>
                    </tr>
                  </tbody>
                </table>

              </Card>
            </>}



          {/* <CustomerDetailTable crate={c}  /> */}
        </Box>
      </Grid>
      <Modal
        content={<SendTempPassword onDataReceived={onDataReceived} />}
        width='sm'
        title={'임시 비밀번호 발송'}
        open={modalOpen}
        close={closeModal}
      />
      <Dialog
        fullWidth
        open={pearShow}
        maxWidth='md'
        scroll='body'
        onClose={() => setPearShow(false)}
        //  TransitionComponent={Transition}
        onBackdropClick={() => setPearShow(false)}
      >
        <DialogContent
          sx={{
            position: 'relative',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            py: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <IconButton
            size='small'
            onClick={() => setPearShow(false)}
            sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
          >
            <Icon icon='mdi:close' />
          </IconButton>

          <Box sx={{ mb: 4, textAlign: 'top' }}>
            <Typography variant='h5' sx={{ mb: 3 }}>
              배송지 목록
            </Typography>

          </Box>




        </DialogContent>

      </Dialog>
    </>
  )
}


export function SendTempPassword(props: any) {
  const { onDataReceived } = props

  return (<> 모달 테스트 </>)
}

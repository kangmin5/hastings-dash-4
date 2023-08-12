import * as React from 'react'
import type { GetStaticProps, NextPage } from "next"
import { useAppDispatch} from 'custom-hooks'
import { RootState } from 'store'
import { DataGrid, GridRowId, GridColDef  } from '@mui/x-data-grid'
import { CustomerVo } from 'app/customers/mo/customer-mo/customer-vo'
import Link from 'next/link'
import DatePickerWrapper from '@core/styles/libs/react-datepicker'
import { styled } from '@mui/material/styles'
import { Modal } from './modal'
import { saveCustomer } from 'app/customers/org/customer-org/customer-reducer'
//import { useCustomerSwitch, useMemoSwitch } from 'app/technical-support/strategy/switches'
import CustomChip from '@core/components/mui/chip'

import JoinCompanies from 'pages/authors/join-as-biz'
import { JoinKindRadio } from './join-kind-radio'

import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  MenuItem,
  TableBody,
  TextField,
  Typography,
  Tooltip,
  IconButton,
  Table,
  Select
} from '@mui/material'
import { CustomerColumn } from 'app/customers/temp/customer-temp/customer-column'
import { CustomerSearch } from 'app/customers/temp/customer-temp/customer-search'
import { ModalPage } from './customer-modal'
import { useRouter } from 'next/router'
import { WriteMemo } from './write-memo'
import { selectItemCount, selectAllCustomers } from 'app/customers/org/customer-org/customer-selector'
import { getAllCustomers } from 'app/customers/org/customer-org/customer-thunk'
import { useSelector } from 'react-redux'
import {  getCustomerById } from 'app/customers/org/customer-org/customer-thunk'

interface Parameters {
  post: string;
}
interface CellType {
  row: CustomerVo
}

const LinkStyled = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main
}))


const CustomerPage: NextPage = ({ post }: Parameters) => {
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState(<></>)
  const [modalWidth, setModalWidth] = React.useState('')

  // ** State

  const [pageSize, setPageSize] = React.useState(10)
  const [modalOpen, setModalOpen] = React.useState(false)
  const [readOnly_1, setReadOnly_1] = React.useState(true)
  const [readOnly_2, setReadOnly_2] = React.useState(true)



  const router = useRouter()
  const dispatch = useAppDispatch()
  const AllCustomers = useSelector(selectAllCustomers)
  const count = useSelector(selectItemCount)
  const [selectedRows, setSelectedRows] = React.useState<GridRowId[]>([])

  const TitleRef = React.useRef()

  const [isThisReadOnly, setIsThisReadOnly] = React.useState(true)
  const [isThatReadOnly, setIsThatReadOnly] = React.useState(true)
  // const [selectedRows, setSelectedRows] = React.useState<GridRowId[]>([]) 중복으로 주석
  const onRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value == 'authenticated') {
      setIsThisReadOnly(false)
    } else {
      setIsThisReadOnly(true)
    }

    if (event.target.value == 'push') {
      setIsThatReadOnly(false)
    } else {
      setIsThatReadOnly(true)
    }
  }
  const onResetClick = () => {
    const form = formRef.current as HTMLFormElement | undefined
    form!.reset()
  }


  // ** modal
  const openModal = (data: string, c: CustomerVo) => {

    switch (data) {
      case '회원등록':
        setContent(
          <>
            <ModalPage sendPage='회원등록' />
          </>
        )
        setModalWidth('lg')
        setModalOpen(true)

        break

      case '회원상세':
        setContent(
          <>
            <ModalPage sendPage='회원상세' box={c} />
          </>
        )
        setModalWidth('xl')
        setModalOpen(true)
        break
      case '메모작성':
        setContent(<WriteMemo />)
        setModalWidth('md')
        setModalOpen(true)
        //   setContent(<AddMemo />)
        // setModalWidth('md')
        // setTitle('메모작성')
        // setIsOpenModal(true)
        break
      case '회원수기등록':
        setContent(
          <>
            <ModalPage viewName='회원수기등록' />
          </>
        )
        setModalWidth('lg')
        setModalOpen(true)

        // setContent(<JoinCompanies />)
        // setModalWidth('lg')
        // setTitle('회원수기 등록')
        // setIsOpenModal(true)
        break
      case '회원유형관리':
        setContent(
          <>
            <ModalPage viewName='회원유형관리' />
          </>
        )
        setModalWidth('lg')
        setModalOpen(true)

        setContent(<JoinKindRadio />)
        // setModalWidth('lg')
        // setTitle('회원유형 등록')
        // setIsOpenModal(true)
        break
    }
  }

  const closeModal = () => {
  //  window.localStorage.removeItem('customer')
  //  console.log( window.localStorage.getItem('customer')== null? '세션 [회원정보] 삭제':'세션 [회원정보] 삭제 실패 !! ')
 
    setModalOpen(false)
  }

  

  const handleRadioChange = event => {
    if (event.target.value == 'authenticated') {
      setReadOnly_1(false)
    } else {
      setReadOnly_1(true)
    }

    if (event.target.value == 'push') {
      setReadOnly_2(false)
    } else {
      setReadOnly_2(true)
    }
  }

  const onSubmit = e => {
    e.preventDefault()
    const TitleData = e.target

    const req_data = {
      is_dormancy: TitleData.is_dormancy.value,
      is_firm: TitleData.is_firm.value,
      is_best: TitleData.is_best.value,
      funnel: TitleData.funnel.value,
      funnel_type: TitleData.funnel_type.value,
      is_mobile: TitleData.is_mobile.value,
      search_condition: TitleData.search_condition.value,
      search_keyword: TitleData.search_keyword.value
    }

    // dispatch(fetchDataFromServer(req_data))
  }

  const handleReset = () => {
    const Title = TitleRef.current
    // Title.reset()
  }




  const CustomerColumn = (): GridColDef[] => {
    return [
      {
        flex: 0.1,
        minWidth: 120,
        sortable: false,
        //  hide: true,
        field: 'id',
        headerName: 'No.',

        renderCell(params: CellType) {
          const { row } = params
          const id = row.car.id
          return <Typography>{id}</Typography>
        }
      },
      {
        flex: 0.3,
        field: 'createdAt',
        minWidth: 140,
        sortable: true,
        headerName: '등록일',
        renderCell({ row }: CellType) {
          const createdAt = row.time.createdAt
          return <Typography>{createdAt}</Typography>
        }
      },
      {
        flex: 0.1,
        minWidth: 120,
        sortable: false,
        field: 'userId',
        headerName: '아이디',

        renderCell(params: CellType) {
          const { row } = params
          const userId = row.user.userId
          return <Typography>{userId}</Typography>
        }
      },
      {
        flex: 0.2,
        field: 'name',
        sortable: true,
        minWidth: 90,
        headerName: '이름',

        renderCell(params: CellType) {
          const { row } = params
          const name = row.person.name
          let c = {}
          for (let i = 0; i < count; i++) {
            if (AllCustomers[i].person.name == name) {
              c = AllCustomers[i]
            }
          }
          return (
            <LinkStyled
              onClick={(e) => {
                e.preventDefault()

                // let c = new CustomerVo()
                // for (const i of []) {  //**TODO */
                //   if (i.name == name) {
                //     alert(' 이름 : '+i.name)
                //     c = i
                //   }
                // }
              //   const a = window.localStorage.getItem('customer')
              //   console.log('세션값저장1 : ', a)
              //   dispatch(getCustomerById(c))
              //   const b = window.localStorage.getItem('customer')
              //   console.log('세션값저장3 : ',b)
              //   const a_ = JSON.parse(a)
              //   const b_ = JSON.parse(b)

              //  if(a_.person.name !== b_.person.name){
              //   openModal('회원상세', c)
              //  }else{
              //   alert(' 실패 !!')
              //  }
              
              
              openModal('회원상세', c)
               
  
  

                // const c2 = window.localStorage.getItem('customer')

                // if( c2 != null ){
                //   const c3 = JSON.parse(c2)
                //   openModal('회원상세', c3)
                //  }else{
                //   alert('세션 [회원정보] 저장 실패 !!')
                //  }

               
      
               
              }}
              href=''
            >
              {row.person.name}
            </LinkStyled>
          )
        }
      },
      {
        flex: 0.1,
        minWidth: 150,
        field: 'cellPhone',
        sortable: false,
        headerName: '연락처',

        renderCell(params: CellType) {
          const { row } = params
          const phone = row.person.phone

          return phone === null ? (
            <Typography>{row.person.phone}</Typography>
          ) : (
            <>
              <Typography className='cellphone'>{phone}</Typography>
              <Tooltip title={phone} arrow>
                <IconButton size='small' className='ico-plus' />
              </Tooltip>
            </>
          )
        }
      },
      {
        flex: 0.05,
        minWidth: 50,
        field: 'email',
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        headerName: '메일',
        renderCell(params: CellType) {
          const { row } = params
          const email = row.person.email

          return (
            <>
              <Tooltip title={email} arrow>
                <IconButton size='small' className='ico-mail' />
              </Tooltip>
            </>
          )
        }
      },
      // {
      //   flex: 0.05,
      //   minWidth: 50,
      //   field: 'memo',
      //   sortable: false,
      //   align: 'center',
      //   headerAlign: 'center',
      //   headerName: '메모',
      //   renderCell(params: CellType) {
      //     const { row } = params
      //     const memo = row.memo.content


      //     return (
      //       <>
      //         <Tooltip title={memo} arrow>
      //           <IconButton onClick={() => openModal('메모작성', null)} size='small' className='ico-memo' />
      //         </Tooltip>
      //       </>
      //     )
      //   }
      // },
      // {
      //   flex: 0.05,
      //   minWidth: 50,
      //   field: 'address',
      //   sortable: false,
      //   align: 'center',
      //   headerAlign: 'center',
      //   headerName: '주소',
      //   renderCell(params: CellType) {
      //     const { row } = params
      //     const addr = row.adobe.addr
      //     return addr !== '' ? (
      //       <>
      //         <Tooltip title={addr} arrow>
      //           <IconButton size='small' className='ico-address' />
      //         </Tooltip>
      //       </>
      //     ) : null
      //   }
      // },
      {
        flex: 0.05,
        minWidth: 50,
        field: 'sms',
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        headerName: 'SMS',
        renderCell(params: CellType) {
          const { row } = params

          return (
            <>
              {/* <Typography>SMS 없음</Typography> */}
              <IconButton size='small' className='ico-sms' />
            </>
          )
        }
      },
      {
        flex: 0.08,
        minWidth: 80,
        field: 'lastOrderAmount',
        sortable: false,
        align: 'right',
        headerAlign: 'right',
        headerName: '최근구매금액',
        renderCell: (params: CellType) => {
          const { row } = params
          const lastOrderAmount: string = '1000--'
          return lastOrderAmount !== '0' ? (
            <Typography>{lastOrderAmount}</Typography>
          ) : (
            <Typography variant='body1' sx={{ color: 'text.primary' }}>
              -
            </Typography>
          )
        }
      },
      {
        flex: 0.08,
        minWidth: 80,
        field: 'totalOrderAmount',
        sortable: true,
        align: 'right',
        headerAlign: 'right',
        headerName: '총구매금액',
        renderCell: (params: CellType) => {
          const { row } = params
          const totalOrderAmount: string = '1000'

          return totalOrderAmount !== '0' ? (
            <Typography className='has-sort'>{totalOrderAmount}</Typography>
          ) : (
            <Typography variant='body1' sx={{ color: 'text.primary' }} className='has-sort'>
              -
            </Typography>
          )
        }
      },
      {
        flex: 0.05,
        minWidth: 80,
        field: 'totalOrderCount',
        sortable: false,
        align: 'right',
        headerAlign: 'right',
        headerName: '총 구매건수',
        renderCell: (params: CellType) => {
          const { row } = params
          const totalOrderCount: string = '1000'

          return totalOrderCount !== '0' ? (
            <Typography>{totalOrderCount}</Typography>
          ) : (
            <Typography variant='body1' sx={{ color: 'text.primary' }}>
              -
            </Typography>
          )
        }
      },
      {
        flex: 0.08,
        minWidth: 80,
        field: 'totalRewardPoint',
        sortable: false,
        align: 'right',
        headerAlign: 'right',
        headerName: '적립금',
        renderCell: (params: CellType) => {
          const { row } = params
          const totalRewardPoint: string = '10000'

          return totalRewardPoint !== undefined ? (
            <Typography>{totalRewardPoint}</Typography>
          ) : (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
              -
            </Typography>
          )
        }
      },
      {
        flex: 0.1,
        minWidth: 70,
        field: 'counsel',
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        headerName: '상담',
        renderCell: (params: CellType) => {
          const { row } = params
          const id = row.car.id

          return id !== null ? (
            <LinkStyled onClick={() => alert('Temporary Value')} href='/' className='btn-type'>
              상담
            </LinkStyled>
          ) : (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
              -
            </Typography>
          )
        }
      },
      {
        flex: 0.1,
        minWidth: 60,
        field: 'trafficSrc',
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        headerName: '유입',
        renderCell: (params: CellType) => {
          const { row } = params
          const id = row.car.id

          return id !== '' ? (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
              아이콘
            </Typography>
          ) : (
            <CustomChip size='small' skin='light' color='success' label='Paid' />
          )
        }
      }
    ]
  }


  React.useEffect(() => {

    dispatch(getAllCustomers(undefined))
  }, [dispatch, router.query])

  
  return (
    <>
      <DatePickerWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <Typography className='Title-styled'>회원관리</Typography>
              <form>
              <div className='search-box'>
                <Table>
                  <caption>회원 검색 테이블</caption>
                  <colgroup>
                    <col width='15%' />
                    <col width='35%' />
                    <col width='15%' />
                    <col width='35%' />
                  </colgroup>
                  <TableBody>
                    <tr>
                      <th scope='row'>회원상태</th>
                      <td>
                        <RadioGroup row aria-label='position' name='is_dormancy' defaultValue='0'>
                          <FormControlLabel value='0' label='정상회원' labelPlacement='end' control={<Radio />} />
                          <FormControlLabel value='1' control={<Radio />} label='휴먼회원' />
                        </RadioGroup>
                      </td>
                      <th scope='row'>회원구분</th>
                      <td>
                        <RadioGroup row aria-label='position' name='is_firm' defaultValue='2'>
                          <FormControlLabel value='2' label='전체' labelPlacement='end' control={<Radio />} />
                          <FormControlLabel value='0' control={<Radio />} label='개인회원' />
                          <FormControlLabel value='1' control={<Radio />} label='기업회원' />
                        </RadioGroup>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>가입경로</th>
                      <td>
                        <RadioGroup row aria-label='position' name='funnel' defaultValue='all'>
                          <FormControlLabel value='all' label='전체' labelPlacement='end' control={<Radio />} />
                          <FormControlLabel value='web' control={<Radio />} label='웹' />
                          <FormControlLabel value='mobileWeb' control={<Radio />} label='모바일웹' />
                          <FormControlLabel value='mobileApp' control={<Radio />} label='모바일앱' />
                        </RadioGroup>
                      </td>
                      <th scope='row'>가입형태</th>
                      <td>
                        <FormControl className='w100'>
                          <Select name='funnel_type' defaultValue='all'>
                            <MenuItem value='all'>선택</MenuItem>
                            <MenuItem value='general'>일반</MenuItem>
                            <MenuItem value='simple'>간편</MenuItem>
                            <MenuItem value='sns_simple'>SNS간편</MenuItem>
                            <MenuItem value='direct_rm'>다이렉트RM</MenuItem>
                          </Select>
                        </FormControl>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>가입일</th>
                      <td colSpan={3}>
                        <div className='date-picker-wrap'>
                          <span className='dash'>~</span>

                          <div className='btn-group'>
                            <Button size='small' variant='outlined'>
                              당일
                            </Button>
                            <Button size='small' variant='outlined'>
                              어제
                            </Button>
                            <Button size='small' variant='outlined'>
                              3일
                            </Button>
                            <Button size='small' variant='outlined'>
                              일주일
                            </Button>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>주문일</th>
                      <td colSpan={3}>
                        <div className='date-picker-wrap'>
                          <span className='dash'>~</span>

                          <div className='btn-group'>
                            <Button size='small' variant='outlined'>
                              당일
                            </Button>
                            <Button size='small' variant='outlined'>
                              어제
                            </Button>
                            <Button size='small' variant='outlined'>
                              3일
                            </Button>
                            <Button size='small' variant='outlined'>
                              일주일
                            </Button>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>휴면예정 회원</th>
                      <td colSpan={3}>
                        <div className='date-picker-wrap'>
                          <span className='dash'>~</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>모바일앱 관련회원</th>
                      <td colSpan={3}>
                        <RadioGroup
                          row
                          aria-label='position'
                          name='is_mobile'
                          defaultValue='all'
                          onChange={onRadioChange}
                        >
                          <FormControlLabel value='all' label='전체' labelPlacement='end' control={<Radio />} />
                          <FormControlLabel value='mobile' control={<Radio />} label='모바일앱 회원(설치+삭제)' />
                          <div className='form-group'>
                            <FormControlLabel value='authenticated' control={<Radio />} label='인증회원' />
                            <Select defaultValue='authenticated_all' inputProps={{ disabled: Boolean(isThisReadOnly) }}>
                              <MenuItem value='authenticated_all'>전체</MenuItem>
                              <MenuItem value='authenticated_on'>인증</MenuItem>
                              <MenuItem value='authenticated_off'>풀림</MenuItem>
                            </Select>
                            {/* <FormControlLabel value='push' control={<Radio />} label='PUSH알림' /> */}
                            <FormControl className='inline-type'>
                              <span className='label'> PUSH알림</span>
                              <Select defaultValue='push_all' inputProps={{ disabled: Boolean(isThatReadOnly) }}>
                                <MenuItem value='push_all'>전체</MenuItem>
                                <MenuItem value='push_on'>알림ON</MenuItem>
                                <MenuItem value='push_off'>알림OFF</MenuItem>
                              </Select>
                            </FormControl>
                          </div>
                          <FormControlLabel value='deleted' control={<Radio />} label='삭제회원' />
                        </RadioGroup>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>회원유형</th>
                      <td colSpan={3}>
                        <RadioGroup row aria-label='position' name='is_best' defaultValue='all'>
                          <FormControlLabel value='all' label='전체' labelPlacement='end' control={<Radio />} />
                          <FormControlLabel value='vip' control={<Radio />} label='최우수고객' />
                          <FormControlLabel value='excellent' control={<Radio />} label='우수고객' />
                          <FormControlLabel value='regular' control={<Radio />} label='일반고객' />
                          <FormControlLabel value='valued' control={<Radio />} label='주의고객' />
                          <FormControlLabel value='complaint' control={<Radio />} label='항의고객' />
                        </RadioGroup>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>검색조건</th>
                      <td colSpan={3}>
                        <div className='form-group'>
                          <Select name='search_condition' defaultValue='all'>
                            <MenuItem value='all'>전체</MenuItem>
                            <MenuItem value='user_id'>아이디</MenuItem>
                            <MenuItem value='name'>이름</MenuItem>
                            <MenuItem value='email'>이메일</MenuItem>
                            <MenuItem value='contact'>연락처</MenuItem>
                            <MenuItem value='phone'>핸드폰번호</MenuItem>
                            <MenuItem value='birth'>생년월일</MenuItem>
                          </Select>
                          <TextField name='search_keyword' size='small' sx={{ ml: 2 }} className='w100' />
                        </div>
                      </td>
                    </tr>
                  </TableBody>
                </Table>
              </div>
              <div className='btn-align'>
              <Button
                type='reset'
                size='small'
                variant='outlined'
                sx={{ ml: 2, minWidth: '5rem' }}
                onClick={onResetClick}
              >
                초기화
              </Button>

              <Button
                type='submit'
                form='searchCustomer'
                size='small'
                color='primary'
                variant='contained'
                sx={{ ml: 2, minWidth: '5rem' }}
              >
                검색
              </Button>
            </div>
            </form>
              <Typography variant='h4' sx={{ fontWeight: 500 }} className='h4-line-type'>
                회원목록
              </Typography>
              <div className='data-function'>
                <span className='total'>총 {count}명</span>
                <span className='btn-group'>
                  <Button type='button' onClick={() => openModal('회원수기등록', null)} size='small' variant='outlined'>
                    회원수기 등록
                  </Button>
                  <Button type='button' onClick={() => openModal('회원유형관리', null)} size='small' variant='outlined'>
                    회원유형 등록
                  </Button>
                  <Button type='button' size='small' variant='outlined'>
                    엑셀 다운로드
                  </Button>
                </span>
              </div>
              <div className='data-chk-box'>
                <span className='total'>1개 선택</span>
                <span className='btn-group'>
                  <Button type='button' size='small' variant='outlined'>
                    삭제
                  </Button>
                </span>
              </div>

              <DataGrid
                rowHeight={40}
                headerHeight={40}
                disableColumnMenu
                autoHeight
                pagination
                rows={AllCustomers}
                getRowId={row => row.car.id}
                columns={CustomerColumn()}
                checkboxSelection
                disableSelectionOnClick
                pageSize={Number(pageSize)}
                rowsPerPageOptions={[10, 25, 50]}
                onSelectionModelChange={rows => setSelectedRows(rows)}
                onPageSizeChange={newPageSize => setPageSize(newPageSize)}
                localeText={{
                  noRowsLabel: '조회 결과가 없습니다.',
                }}
              />

            </Card>
          </Grid>
        </Grid>
      </DatePickerWrapper>
      <Modal content={content} width={modalWidth} title={title} open={modalOpen} close={closeModal} />
    </>
  )
}
export default CustomerPage;


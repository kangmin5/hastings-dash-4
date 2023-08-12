import * as React from 'react'
import { useAppDispatch, useAppSelector } from 'custom-hooks'
import { RootState } from 'store'
import DormantCustomers, { DormantCustomer } from 'app/marketing/clerk/dormant-customers'
import { allDormantCustomers } from 'app/marketing/clerk/dormant-customers/repository'
import Labels from 'app/general-affairs/stylist/labels'
import { DataGrid, GridRowId } from '@mui/x-data-grid'
import Link from 'next/link'
import { PrototypeModal } from 'app/technical-support/factory/modals'
import Client from 'app/technical-support/prototype/clients'
import { styled } from '@mui/material/styles'
import { GridColDef } from '@mui/x-data-grid'
import TheDormantCustomer from '../../app/customers/templates/cart-template/customer-table'
import AddMemo from '../../app/customers/templates/memo-template/memo-search'

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

export default function AllDormantCustomers({ data }: { data: DormantCustomer[] }) {
  const [pageSize, setPageSize] = React.useState(10)
  const [isOpenModal, setIsOpenModal] = React.useState(false)
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState(<></>)
  const [modalWidth, setModalWidth] = React.useState('')
  const [isThisReadOnly, setIsThisReadOnly] = React.useState(true)
  const [isThatReadOnly, setIsThatReadOnly] = React.useState(true)
  const [selectedRows, setSelectedRows] = React.useState<GridRowId[]>([])
  const [tuples, setTuples] = React.useState<Client[]>([])
  const formRef = React.useRef<HTMLFormElement>(null)
  const dispatch = useAppDispatch()
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const cryptos = 0
  }
  const client = useAppSelector((state: RootState) => state.customer)
  const customer = useAppSelector((state: RootState) => state.customer)

  React.useEffect(() => {
    DormantCustomers.new()
      .type()
      .all()
      .then(function (res: any) {
        setTuples(res.data.array)
      })

    dispatch(allDormantCustomers())
  }, [dispatch])

  function openModal(data: string) {
    switch (data) {
      case '회원가입정보':
        setContent(
          <>
            <TheDormantCustomer viewName='회원가입정보' />
          </>
        )
        setModalWidth('lg')
        setIsOpenModal(true)

        break

      case '회원상세정보':
        setContent(
          <>
            <TheDormantCustomer viewName='회원상세정보' />
          </>
        )
        setModalWidth('lg')
        setIsOpenModal(true)
        break
      case '메모작성':
        setContent(<AddMemo />)
        setModalWidth('md')
        setTitle('메모작성')
        setIsOpenModal(true)
        break
    }
  }

  function closeModal() {
    setIsOpenModal(false)
  }

  interface CellType {
    row: Client
  }
  const LinkStyled = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.main
  }))
  const customerGridColumns: GridColDef[] = [
    {
      flex: 0.1,
      minWidth: 120,
      sortable: false,
      field: 'userId',
      headerName: '아이디',

      renderCell(params: CellType) {
        const { row } = params

        return <Typography>{row.userId}</Typography>
      }
    },
    {
      flex: 0.1,
      field: 'createdAt',
      minWidth: 100,
      sortable: false,
      headerName: '회원 탈퇴일',
      renderCell({ row }: CellType) {
        return <Typography>{row.createdAt}</Typography>
      }
    },
    {
      flex: 0.1,
      minWidth: 150,
      field: 'cellPhone',
      sortable: false,
      headerName: '탈퇴사유',

      renderCell(params: CellType) {
        const { row } = params

        return row.cellPhone === null ? (
          <Typography>{row.cellPhone}</Typography>
        ) : (
          <>
            <Typography className='cellphone'>{row.cellPhone}</Typography>
            <Tooltip title={row.cellPhone} arrow>
              <IconButton size='small' className='ico-plus' />
            </Tooltip>
          </>
        )
      }
    }
  ]

  // ** const handleRadioChange = (event: SelectReact.ChangeEvent) => {
  // ** Make a backup just in case on Saturday April 29. 10hour.

  function onRadioChange(event: React.ChangeEvent<HTMLInputElement>) {
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

  return (
    <>
      {/* <DatePickerWrapper> */}
      <h2 className='h2'>회원탈퇴관리</h2>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <form
              ref={formRef}
              id='operator-find-customers-form'
              onReset={e => (e.target as HTMLFormElement).reset()}
              onSubmit={e => {
                onSubmit(e)
              }}
            >
              <div className='search-box'>
                <Table>
                  <caption>탈퇴 회원 테이블</caption>
                  <colgroup>
                    <col width='15%' />
                    <col width='35%' />
                    <col width='15%' />
                    <col width='35%' />
                  </colgroup>
                  <TableBody>
                    <tr>
                      <th scope='row'>기간검색</th>
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
                      <th scope='row'>아이디</th>
                      <td colSpan={3}>
                        <div className='form-group'>
                          <TextField name='search_keyword' size='small' className='w100' />
                        </div>
                      </td>
                    </tr>
                  </TableBody>
                </Table>
              </div>
            </form>
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
            <div className='dataGrid-wrap'>
              <Typography variant='h4' sx={{ fontWeight: 500 }} className='h4-line-type'>
                탈퇴 회원 목록
              </Typography>
              <div className='data-function'>
                <span className='total'>총 {customer.count}명</span>
                <span className='btn-group'>
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
                rows={tuples || []}
                getRowId={row => row.userId}
                columns={customerGridColumns || []}
                checkboxSelection
                disableSelectionOnClick
                pageSize={Number(pageSize)}
                rowsPerPageOptions={[10, 25, 50]}
                onSelectionModelChange={rows => setSelectedRows(rows)}
                onPageSizeChange={newPageSize => setPageSize(newPageSize)}
                localeText={{
                  noRowsLabel: '조회된 데이터가 없습니다'
                }}
              />
            </div>
          </Card>
        </Grid>
      </Grid>
      {/* </DatePickerWrapper> */}
      <PrototypeModal content={content} width={modalWidth} title={title} open={isOpenModal} close={closeModal} />
    </>
  )
}

import * as React from 'react'
import type { GetStaticProps, NextPage } from "next"
import { useAppDispatch} from 'custom-hooks'
import { DataGrid, GridRowId, GridColDef } from '@mui/x-data-grid'
import { CustomerSearch } from 'app/customers/temp/customer-temp/customer-search'
import { ModalPage } from './customer-modal'
import { useRouter } from 'next/router'
import { selectAllNotes, selectItemCount } from 'app/customers/org/note-org/note-selector'
import { getAllCustomers } from 'app/customers/org/customer-org/customer-thunk'
import { useSelector } from 'react-redux'
import {  getCustomerById } from 'app/customers/org/customer-org/customer-thunk'

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
  Typography, Table
} from '@mui/material'
import { NoteVo } from 'app/customers/mo/note-mo/note-vo'

interface Parameters {
  post: string;
}


const NotePage: NextPage = ({post}: Parameters) => {
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState(<></>)
  const [modalWidth, setModalWidth] = React.useState('')

  const [razor, setRazor] = React.useState('id')

  function handleRadioChange(event: React.ChangeEvent<HTMLInputElement>) {
    setRazor(event.target.value)
  }

  // ** State

  const [pageSize, setPageSize] = React.useState(10)
  const [modalOpen, setModalOpen] = React.useState(false)
  const [readOnly_1, setReadOnly_1] = React.useState(true)
  const [readOnly_2, setReadOnly_2] = React.useState(true)



  const router = useRouter()
  const dispatch = useAppDispatch()
  const AllNotes = useSelector(selectAllNotes)
  const count = useSelector(selectItemCount)
  const [selectedRows, setSelectedRows] = React.useState<GridRowId[]>([])

  const TitleRef = React.useRef()

  React.useEffect(() => {

    dispatch(getAllCustomers(undefined))
  }, [dispatch, router.query])

  interface CellType {
    row: NoteVo
  }
  const NoteColumn = (): GridColDef[] => {
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
     
    ]
  }

  return (
    <>
      <h3>메모 관리</h3>

      <form onSubmit={e => e.preventDefault()}>
        <div className='search-box'>
          <Table>
            <caption>메모 조회</caption>
            <colgroup>
              <col width='15%' />
              <col width='35%' />
              <col width='15%' />
              <col width='35%' />
            </colgroup>
            <TableBody>
              <tr>
                <th colSpan={1} scope='row'>
                  <Typography variant='body2'>제목</Typography>
                </th>
                <td colSpan={3}>
                  <RadioGroup value={razor} onChange={handleRadioChange}>
                    <FormControlLabel value='id' control={<Radio />} label='아이디' />
                    <FormControlLabel value='orderer' control={<Radio />} label='주문자' />
                    <FormControlLabel value='orderNo' control={<Radio />} label='주문번호' />
                    <FormControlLabel value='receiver' control={<Radio />} label='수령인' />
                    <FormControlLabel value='payer' control={<Radio />} label='입금자' />
                    <FormControlLabel value='phone' control={<Radio />} label='전화번호' />
                    <FormControlLabel value='note' control={<Radio />} label='메모' />
                    <FormControlLabel value='barcode' control={<Radio />} label='바코드' />
                    <FormControlLabel value='transactionNo' control={<Radio />} label='거래번호' />
                    <FormControlLabel value='email' control={<Radio />} label='이메일 주소' />
                  </RadioGroup>
                </td>
              </tr>
              <tr>
                {' '}
                <td>
                  <select name='order'>
                    <option value='all'>전체주문</option>
                    <optgroup label='처리기준'>
                      <option value='date'>날짜별</option>
                      <option value='status'>상태별</option>
                    </optgroup>
                    <optgroup label='공급자 선택'>
                      <option value='supplier1'>공급자1</option>
                      <option value='supplier2'>공급자2</option>
                    </optgroup>
                    <optgroup label='연계주문'>
                      <option value='related'>연계주문</option>
                      <option value='unrelated'>비연계주문</option>
                    </optgroup>
                    <optgroup label='회원여부'>
                      <option value='member'>회원주문</option>
                      <option value='nonmember'>비회원주문</option>
                    </optgroup>
                    <optgroup label='검색기간'>
                      <option value='day'>1일</option>
                      <option value='week'>1주일</option>
                      <option value='month'>1개월</option>
                      <option value='year'>1년</option>
                    </optgroup>
                    <optgroup label='결제방법'>
                      <option value='credit_card'>신용카드</option>
                      <option value='bank_transfer'>계좌이체</option>
                      <option value='mobile_payment'>휴대폰결제</option>
                    </optgroup>
                    <optgroup label='결제상태'>
                      <option value='paid'>결제완료</option>
                      <option value='unpaid'>미결제</option>
                      <option value='cancelled'>주문취소</option>
                    </optgroup>
                    <optgroup label='처리단계'>
                      <option value='processing'>처리중</option>
                      <option value='ready'>출고대기</option>
                      <option value='delivered'>배송완료</option>
                    </optgroup>
                    <optgroup label='결제금액'>
                      <option value='under_10000'>1만원 미만</option>
                      <option value='10000_to_50000'>1만원 이상 5만원 미만</option>
                      <option value='over_50000'>5만원 이상</option>
                    </optgroup>
                    <option value='additional_payment'>추가결제</option>
                    <option value='address_search'>주소검색</option>
                    <option value='inflow_route'>유입경로</option>
                  </select>
                </td>
              </tr>
            </TableBody>
          </Table>
        </div>
      </form>
      <Typography variant='body2' sx={{ fontWeight: 100 }} className='h3-line-type'>
        메모 목록
      </Typography>
      <Box>
        <span>총 {count} 개</span>
      </Box>
      <DataGrid
        autoHeight
        pagination
        rows={AllNotes}
        getRowId={row => row.car.id}
        columns={NoteColumn()}
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
    </>
  )
}
export default NotePage;

export const getStaticProps: GetStaticProps = async (context) => {


  return {
    props: {
      post: "메모 관리",
    },
  };
};

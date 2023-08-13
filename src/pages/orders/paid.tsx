import * as React from 'react'
import Link from 'next/link'
import type { GetStaticProps, NextPage } from "next"
import { useAppDispatch } from 'custom-hooks'
import Card from '@mui/material/Card'
import Tooltip from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import { DataGrid, GridColDef, GridRowId } from '@mui/x-data-grid'
import Select from '@mui/material/Select'
import { Table, TableBody } from '@mui/material'
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const LinkStyled = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main
}))

interface Parameters {
  post: string;
}
import { useRouter } from 'next/router'
import { selectItemCount, selectAllOrders } from 'app/orders/org/order-org/order-selector'
import { getAllOrders } from 'app/orders/org/order-org/order-thunk'
import { useSelector } from 'react-redux'
import { OrderVo } from 'app/orders/mo/order-mo/order-vo'
const PaidPage: NextPage = ({ post }: Parameters) => {
  const [pageSize, setPageSize] = React.useState(10)
  const [selectedValue, setSelectedValue] = React.useState<string>('')
  const router = useRouter()
  const dispatch = useAppDispatch()
  const AllOrders = useSelector(selectAllOrders)
  const count = useSelector(selectItemCount)
  const [selectedRows, setSelectedRows] = React.useState<GridRowId[]>([])
  interface CellType {
    row: OrderVo
  }
  const PaidColumn = (): GridColDef[] => (
    [
      {
        flex: 0.05,
        field: 'id',
        minWidth: 80,
        headerName: 'No',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.oar.id}</Typography>
        }
      },
      {
        flex: 0.05,
        field: 'orderer',
        minWidth: 80,
        headerName: '주문>수령자',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.user.username}</Typography>
        }
      },
      {
        flex: 0.05,
        field: 'userId',
        minWidth: 80,
        headerName: 'ID/주문번호',
        renderCell({ row }: CellType) {
          return (<Typography variant='body2'>
            <Link href={'/orders/order/'+row.oar.id}>
            {row.oar.id}</Link>
            </Typography>)
        }
      },
      {
        flex: 0.05,
        field: 'orderCount',
        minWidth: 80,
        headerName: '주문횟수',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.calc.orderCountPerUser}</Typography>
        }
      },
      {
        flex: 0.05,
        field: 'productName',
        minWidth: 80,
        headerName: '상품명',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.par.name}</Typography>
        }
      },
      {
        flex: 0.05,
        field: 'status',
        minWidth: 80,
        headerName: '처리상태',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.oar.status}</Typography>
        }
      },
      {
        flex: 0.05,
        field: 'payMethod',
        minWidth: 80,
        headerName: '결제방법',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.fee.payMethod}</Typography>
        }
      },
      {
        flex: 0.05,
        field: 'quantity',
        minWidth: 80,
        headerName: '수량',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.oar.qty}</Typography>
        }
      }, {
        flex: 0.05,
        field: 'totalPurchaseAmount',
        minWidth: 80,
        headerName: '금액',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.calc.orderAmount}</Typography>
        }
      }
    ]
  )

  const RadioChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
  },[])


  React.useEffect(() => {
    dispatch(getAllOrders(undefined))
  }, [dispatch, router.query])

  return (
    <>
     <h2 className='h2'>주문 조회</h2>

<form onSubmit={e => e.preventDefault()}>
  <div className='search-box'>
    <Table>
      <caption>주문 조회 검색</caption>
      <colgroup>
        <col width='15%' />
        <col width='35%' />
        <col width='15%' />
        <col width='35%' />
      </colgroup>
      <TableBody>
        <tr>
          <th scope='row'>회원여부</th>
          <td>
            <RadioGroup row value={selectedValue} onChange={RadioChange}>
              <FormControlLabel value='all' control={<Radio />} label='전체' />
              <FormControlLabel value='member' control={<Radio />} label='회원' />
              <FormControlLabel value='free' control={<Radio />} label='비회원' />
            </RadioGroup>
          </td>
          <th scope='row'>유입경로</th>
          <td>
            <div className='form-wrap'>
              <RadioGroup row value={selectedValue} onChange={RadioChange}>
                <FormControlLabel value='all' control={<Radio />} label='전체' />
                <FormControlLabel value='' control={<Radio />} label='웹' />
                <FormControlLabel value='' control={<Radio />} label='모바일' />
              </RadioGroup>
              <span className='label'>(</span>
              <FormControlLabel value='fixed' label='모바일앱' labelPlacement='end' control={<Checkbox />} />
              <FormControlLabel value='fixed' label='모바일웹' labelPlacement='end' control={<Checkbox />} />
              <span className='label'>)</span>
            </div>
          </td>
        </tr>
        <tr>
          <th scope='row'>결제방법</th>
          <td>
            <FormControl className='w100'>
              <Select name='funnel_type' defaultValue='all'>
                <MenuItem value='all'>전체</MenuItem>
              </Select>
            </FormControl>
          </td>
          <th scope='row'>결제상태</th>
          <td>
            <div className='form-wrap'>
              <RadioGroup row value={selectedValue} onChange={RadioChange}>
                <FormControlLabel value='all' control={<Radio />} label='전체' />
                <FormControlLabel value='' control={<Radio />} label='결제완료' />
                <FormControlLabel value='' control={<Radio />} label='미입금' />
                <FormControlLabel value='' control={<Radio />} label='카드취소' />
                <FormControlLabel value='' control={<Radio />} label='카드부분취소' />
              </RadioGroup>
            </div>
          </td>
        </tr>
        <tr>
          <th scope='row'>처리단계</th>
          <td>
            <FormControl className='w100'>
              <Select name='funnel_type' defaultValue='all'>
                <MenuItem value='all'>전체</MenuItem>
              </Select>
            </FormControl>
          </td>
          <th scope='row'>추가결제</th>
          <td>
            <div className='form-wrap'>
              <RadioGroup row value={selectedValue} onChange={RadioChange}>
                <FormControlLabel value='all' control={<Radio />} label='전체' />
                <FormControlLabel value='' control={<Radio />} label='적립금 사용' />
                <FormControlLabel value='' control={<Radio />} label='포인트 사용' />
              </RadioGroup>
            </div>
          </td>
        </tr>
        <tr>
          <th scope='row'>검색기간</th>
          <td colSpan={3}>
            <div className='date-picker-wrap'>
              {/*
                  <DatePicker
                    selected={date}
                    id='basic-input'
                    popperPlacement={popperPlacement}
                    onChange={date => setDate(date)}
                    customInput={<CustomInput />}
                    sx={{ mr: '0.5' }}
                  />
                  <span className='dash'>~</span>
                  <DatePicker
                    selected={date}
                    id='basic-input'
                    popperPlacement={popperPlacement}
                    onChange={date => setDate(date)}
                    customInput={<CustomInput />}
                  />*/}
              <div className='btn-group'>
                <Button size='small' type='submit' variant='outlined'>
                  당일
                </Button>
                <Button size='small' type='submit' variant='outlined'>
                  어제
                </Button>
                <Button size='small' type='submit' variant='outlined'>
                  3일
                </Button>
                <Button size='small' type='submit' variant='outlined'>
                  일주일
                </Button>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <th scope='row'>검색조건</th>
          <td>
            <FormControl className='w100'>
              <Select name='funnel_type' defaultValue='all'>
                <MenuItem value='all'>전체</MenuItem>
              </Select>
            </FormControl>
          </td>
        </tr>
        {/* <tr>
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
        </tr> */}
      </TableBody>
    </Table>
  </div>
</form>

      <h2 className='h2'>입금 주문 목록</h2>
      {/* <DatePickerWrapper> */}
      <Card>

        <h4 className='h4-line-type'>주문 목록</h4>
        <span>{selectedRows.length}</span>
        <DataGrid
          rowHeight={40}
          headerHeight={40}
          disableColumnMenu
          autoHeight
          pagination
          rows={AllOrders}
          getRowId={row => row.oar.id}
          columns={PaidColumn()}
          checkboxSelection
          disableSelectionOnClick
          pageSize={Number(pageSize)}
          rowsPerPageOptions={[10, 25, 50]}
          localeText={{
            noRowsLabel: '주문 내역이 없습니다.'
          }}
        />
      </Card>

 </> )
}
export default PaidPage;


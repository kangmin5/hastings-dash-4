import * as React from 'react'
import type { GetStaticProps, NextPage } from "next"
import { useAppDispatch, useAppSelector } from 'custom-hooks'
import { RootState } from 'store'
import { GridColDef } from '@mui/x-data-grid'
import { DataGrid, GridRowId } from '@mui/x-data-grid'
import Link from 'next/link'
import {
  selectItemCount, selectAllQuicks,

} from 'app/quotes/org/quick-org/quick-selector'
import { getAllQuicks } from 'app/quotes/org/quick-org/quick-thunk'
import { useSelector } from 'react-redux'
import {
  Button,
  Card,
  FormControl,
  FormControlLabel,
  Select,
  Radio,
  RadioGroup,
  MenuItem,
  TextField,
  Typography
} from '@mui/material'
import { QuickVo } from 'app/quotes/mo/quick-mo/quick-vo'

interface Parameters {
  post: string;
}

const QuickPage: NextPage = ({ post }: Parameters) => {
  const [selectedValue, setSelectedValue] = React.useState<string>('id')
  const [pageSize, setPageSize] = React.useState<number>(10)
  const [selectedRows, setSelectedRows] = React.useState<GridRowId[]>([])
  function handleRadioChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedValue(event.target.value)
  }
  const dispatch = useAppDispatch()
  const AllQuicks = useSelector(selectAllQuicks)
  const count = useSelector(selectItemCount)

  const counsel = useAppSelector((state: RootState) => state.counsel)

  React.useEffect(() => {

    dispatch(getAllQuicks(undefined))
  }, [dispatch])

  interface CellType {
    row: QuickVo
  }

  const QuickColumn = (): GridColDef[] => [
      {
        flex: 0.1,
        field: 'id',
        minWidth: 80,
        sortable: false,
        headerName: 'No',
        renderCell: ({ row }: CellType) => <Typography variant='body2'></Typography>
      },
      {
        flex: 0.1,
        minWidth: 400,
        field: 'title',
        sortable: false,
        headerName: '제목',
        renderCell: ({ row }: CellType) => <Typography variant='body2'></Typography>
      },
      {
        flex: 0.05,
        minWidth: 150,
        field: 'customerName',
        headerName: '작성자',
        sortable: false,
        renderCell({ row }: CellType) {
          return <Typography variant='body2'></Typography>
        }
      },
      {
        flex: 0.05,
        minWidth: 150,
        field: 'createdAt',
        headerName: '작성일',
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'></Typography>
        }
      },
      {
        flex: 0.05,
        minWidth: 80,
        field: 'isReceivedReply',
        headerName: '답변수신여부',
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'></Typography>
        }
      },
      {
        flex: 0.05,
        minWidth: 150,
        field: 'phone',
        headerName: '전화번호',
        sortable: false,
        renderCell({ row }: CellType) {
          return <Typography variant='body2'></Typography>
        }
      },

      {
        flex: 0.05,
        minWidth: 150,
        field: '',
        headerName: '답변자',
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'></Typography>
        }
      },
      {
        flex: 0.05,
        minWidth: 80,
        field: 'isAnswered',
        headerName: '답변여부',
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'></Typography>
        }
      }
    ]

  return (
    <>
      <Typography variant='h2'>간편 견적 문의 관리</Typography>
      <Card>
        <form onSubmit={e => e.preventDefault()}>
          <div className='search-box'>
            <table>
              <caption>간편 견적 문의 조회</caption>
              <colgroup>
                <col width='15%' />
                <col width='35%' />
                <col width='15%' />
                <col width='35%' />
              </colgroup>
              {/* <tbody>
                <tr>
                  <th scope='row'>제목</th>
                  <td colSpan={3}>
                    <RadioGroup value={selectedValue} onChange={handleRadioChange}>
                      <FormControlLabel value='id' control={<Radio />} label='아이디' />
                      <FormControlLabel value='orderer' control={<Radio />} label='주문자' />
                      <FormControlLabel value='orderNo' control={<Radio />} label='주문번호' />
                      <FormControlLabel value='receiver' control={<Radio />} label='수령인' />
                      <FormControlLabel value='payer' control={<Radio />} label='입금자' />
                      <FormControlLabel value='phone' control={<Radio />} label='전화번호' />
                      <FormControlLabel value='memo' control={<Radio />} label='메모' />
                      <FormControlLabel value='barcode' control={<Radio />} label='바코드' />
                      <FormControlLabel value='transactionNo' control={<Radio />} label='거래번호' />
                      <FormControlLabel value='email' control={<Radio />} label='이메일 주소' />
                    </RadioGroup>
                  </td>
                </tr>
                <tr>
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
              </tbody> */}
              <tbody>
                <tr>
                  <th scope='row'>작성자</th>
                  <td>
                    <TextField fullWidth />
                  </td>
                  <th scope='row'>연락처</th>
                  <td>
                    <TextField fullWidth />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>작성일</th>
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
                  <th scope='row'>답변자</th>
                  <td>
                    <TextField fullWidth />
                  </td>
                  <th scope='row'>답변여부</th>
                  <td>
                    <RadioGroup row aria-label='position' name='horizontal' defaultValue='start'>
                      <FormControlLabel value='all' label='전체' labelPlacement='end' control={<Radio />} />
                      <FormControlLabel value='' control={<Radio />} label='답변대기' />
                      <FormControlLabel value='' control={<Radio />} label='답변완료' />
                    </RadioGroup>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='btn-align'>
            <Button type='reset' size='small' variant='outlined'>
              초기화
            </Button>
            <Button type='submit' size='small' color='primary' variant='contained'>
              검색
            </Button>
          </div>
        </form>
        <div className='dataGrid-wrap'>
          <Typography variant='h4' className='h4-line-type'>
            간편 견적 목록
          </Typography>
          <div className='data-function'>
            <span className='total'>총 10개</span>
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
              <Button type='button' size='small' variant='outlined'>
                스팸등록
              </Button>
              <Button type='button' size='small' variant='outlined'>
                스팸등록 해제
              </Button>
            </span>
          </div>
          <DataGrid
            rowHeight={40}
            headerHeight={40}
            disableColumnMenu
            autoHeight
            pagination
            rows={AllQuicks}
            getRowId={row => row.quad.id}
            columns={QuickColumn()}
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
    </>
  )
}
export default QuickPage;


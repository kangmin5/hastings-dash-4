
import * as React from 'react'
import type { GetStaticProps, NextPage } from "next"
import { useAppDispatch, useAppSelector } from 'custom-hooks'
import { RootState } from 'store'
import { DataGrid, GridRowId } from '@mui/x-data-grid'

import { GridColDef } from '@mui/x-data-grid'
import Link from 'next/link'
import { CounselVo } from 'app/boards/mo/counsel-mo/counsel-vo'

interface CellType {
  row: CounselVo
}
import { useRouter } from 'next/router'
import { selectItemCount, selectAllCounsels } from 'app/boards/org/counsel-org/counsel-selector'
import { getAllCounsels } from 'app/boards/org/counsel-org/counsel-thunk'
import { useSelector } from 'react-redux'
import {
  Button,
  Card,
  FormControlLabel,
  Radio,
  RadioGroup,
  TableBody,
  TextField,
  Typography,
  Table,
  FormControl,
  Select,
  MenuItem
} from '@mui/material'
// ** 026. 고객 상담 관리
interface Parameters {
  post: string;
}

const CounselPage: NextPage = ({ post }: Parameters) => {
  const [pageSize, setPageSize] = React.useState(10)
  const router = useRouter()
  const dispatch = useAppDispatch()
  const AllCounsels = useSelector(selectAllCounsels)
  const count = useSelector(selectItemCount)
  const [selectedRows, setSelectedRows] = React.useState<GridRowId[]>([])


  function CounselColumn(): GridColDef[] {
    return [
      {
        flex: 0.05,
        minWidth: 80,
        field: 'id',
        headerName: 'No',
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.bar.id}</Typography>
        }
      },
      {
        flex: 0.1,
        minWidth: 140,
        field: 'kind',
        headerName: '게시판 유형',
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        renderCell({ row }: CellType) {
          return (

            <Typography variant='body2'>
                {row.article.kind}
            </Typography>
          )
        }
      },
      {
        flex: 0.1,
        minWidth: 200,
        field: 'content',
        headerName: '문의내용',
        sortable: false,
        renderCell({ row }: CellType) {
          return (
            <Typography variant='body2'>
              <Link href={'/boards/counsel/' + row.bar.id}>
                {row.article.content}
              </Link>
            </Typography>)
        }
      },
      {
        flex: 0.1,
        minWidth: 140,
        field: 'username',
        headerName: '회원명',
        sortable: false,
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.user.username}</Typography>
        }
      },
      {
        flex: 0.1,
        minWidth: 140,
        field: 'userId',
        headerName: '회원아이디',
        sortable: false,
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.user.userId}</Typography>
        }
      },
      {
        flex: 0.1,
        minWidth: 90,
        field: 'counselor',
        headerName: '상담자',
        sortable: false,
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.consult.counselor}</Typography>
        }
      },
      {
        flex: 0.1,
        minWidth: 90,
        field: 'createAt',
        headerName: '문의일',
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.time.createdAt}</Typography>
        }
      },
      {
        flex: 0.1,
        minWidth: 90,
        field: 'status',
        headerName: '상담상태',
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.consult.status}</Typography>
        }
      },
      {
        flex: 0.1,
        minWidth: 90,
        field: 'evaluation',
        headerName: '상담지수',
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.consult.evaluation}</Typography>
        }
      }

      // {
      //   flex: 0.1,
      //   minWidth: 90,
      //   field: 'threeStatus',
      //   headerName: '처리여부',
      //   sortable: false,
      //   align: 'center',
      //   headerAlign: 'center',
      //   renderCell({ row }: CellType) {
      //     return <Typography variant='body2'>{row.threeStatus}</Typography>
      //   }
      // }
    ]
  }


  React.useEffect(() => {
    dispatch(getAllCounsels(undefined))
  }, [dispatch, router.query])


  return (
    <>
      <Typography variant='h2'>고객 상담내역 관리</Typography>
      <Card>
        <form onSubmit={e => e.preventDefault()}>
          <div className='search-box'>
            <table>
              <caption>고객 상담내역 조회</caption>
              <colgroup>
                <col width='15%' />
                <col width='35%' />
                <col width='15%' />
                <col width='35%' />
              </colgroup>
              {/* <tbody>
                <tr>
                  <th scope='row'>
                    <Typography variant='body2'>제목</Typography>
                  </th>
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
                  <th scope='row'>게시판 유형</th>
                  <td>
                    <FormControl className='w100'>
                      <Select name='funnel_type' defaultValue='all'>
                        <MenuItem value='all'>전체</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                  <th>상담지수</th>
                  <td>
                    <RadioGroup row defaultValue='all'>
                      <FormControlLabel value='all' label='전체' labelPlacement='end' control={<Radio />} />
                      <FormControlLabel value='' control={<Radio />} label='우수' />
                      <FormControlLabel value='' control={<Radio />} label='일반' />
                      <FormControlLabel value='' control={<Radio />} label='주의' />
                      <FormControlLabel value='' control={<Radio />} label='항의' />
                    </RadioGroup>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>회원 아이디/회원명</th>
                  <td>
                    <TextField fullWidth />
                  </td>
                  <th scope='row'>상담자</th>
                  <td>
                    <FormControl className='w100'>
                      <Select name='funnel_type' defaultValue='all'>
                        <MenuItem value='all'>전체</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>문의일</th>
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
                  <th scope='row'>답변일</th>
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
                  <th scope='row'>문의내용</th>
                  <td colSpan={3}>
                    <TextField fullWidth />
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
            고객 상담내역 목록
          </Typography>
          <div className='data-function'>
            <span className='total'>총 {count}개</span>
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
            rows={AllCounsels}
            getRowId={row => row.bar.id}
            columns={CounselColumn()}
            checkboxSelection
            disableSelectionOnClick
            pageSize={Number(pageSize)}
            rowsPerPageOptions={[10, 25, 50]}
            onSelectionModelChange={rows => setSelectedRows(rows)}
            onPageSizeChange={newPageSize => setPageSize(newPageSize)}
            localeText={{
              noRowsLabel: '조회 결과가 없습니다.'
            }}
          />
        </div>
      </Card>
    </>
  )
}
export default CounselPage;


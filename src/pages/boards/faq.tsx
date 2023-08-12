
import * as React from 'react'
import type { GetStaticProps, NextPage } from "next"

import { DataGrid, GridRowId } from '@mui/x-data-grid'
import { useRouter } from 'next/router'
import { selectItemCount, selectAllFaqs } from 'app/boards/org/faq-org/faq-selector'
import { getAllFaqs } from 'app/boards/org/faq-org/faq-thunk'
import { useAppDispatch } from 'custom-hooks'
import { useSelector } from 'react-redux'
import { GridColDef } from '@mui/x-data-grid'
import { FaqVo } from 'app/boards/mo/faq-mo/faq-vo'
import {
  Button,
  Card,
  FormControlLabel,
  Radio,
  RadioGroup,
  TableBody,
  TextField,
  Typography,
  Table
} from '@mui/material'
import Link from 'next/link'

// ** 019. 자주묻는 질문 관리
interface Parameters {
  post: string;
}
interface CellType {
  row: FaqVo
}
const FaqPage: NextPage = ({ post }: Parameters) => {

  const router = useRouter()
  const dispatch = useAppDispatch()
  const AllFaqs = useSelector(selectAllFaqs)
  const count = useSelector(selectItemCount)
  const [selectedRows, setSelectedRows] = React.useState<GridRowId[]>([])
  const [pageSize, setPageSize] = React.useState(10)

  const FaqColumn = (): GridColDef[] =>  [
      {
        flex: 0.05,
        minWidth: 100,
        field: 'faqId',
        headerName: '번호',
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.bar.id}</Typography>
        }
      },
      {
        flex: 0.25,
        minWidth: 450,
        field: 'question',
        headerName: '제목',
        sortable: false,
        renderCell({ row }: CellType) {
          return (
              <Typography variant='body2'>

              <Link href={'/boards/faq/'+row.bar.id}>
              {row.article.title}</Link>

                </Typography>
          )
        }
      },
      {
        flex: 0.2,
        minWidth: 150,
        field: 'nineTypes',
        headerName: '문의유형',
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        renderCell({ row }: CellType) {
          // return <Typography variant='body2'>{row.writer}</Typography>
          return <Typography variant='body2'>{row.article.kind}</Typography>
        }
      },
      {
        flex: 0.1,
        minWidth: 180,
        field: 'writer',
        headerName: '등록자',
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.person.name}</Typography>
        }
      },
      {
        flex: 0.2,
        minWidth: 140,
        field: 'rewrittenAt',
        headerName: '최종수정일',
        sortable: false,
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.time.updatedAt}</Typography>
        }
      },
      {
        flex: 0.15,
        minWidth: 120,
        field: 'viewCount',
        headerName: '조회수',
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.article.viewCount}</Typography>
        }
      },
      {
        flex: 0.15,
        minWidth: 112,
        field: 'isPosted',
        headerName: '게시여부',
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        renderCell({ row }: CellType) {
          // return <CustomSwitch />
          return <Typography variant='body2'>{row.article.isPosted}</Typography>
        }
      }
    ]



  React.useEffect(() => {
    dispatch(getAllFaqs(undefined))
  }, [dispatch, router.query])

  return (
    <>
      {/* <DatePickerWrapper> */}
      <Typography variant='h2'>{post}</Typography>
      <Card>
      <form onSubmit={e => e.preventDefault()}>
          <div className='search-box'>
            <table>
              <caption>자주 묻는 질문 검색</caption>
              <colgroup>
                <col width='15%' />
                <col width='35%' />
                <col width='15%' />
                <col width='35%' />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>제목</th>
                  <td colSpan={3}>
                    <TextField sx={{ width: '90%' }} />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>게시여부</th>
                  <td>
                    <RadioGroup row aria-label='position' name='horizontal' defaultValue='start'>
                      <FormControlLabel value='all' label='전체' labelPlacement='end' control={<Radio />} />
                      <FormControlLabel value='posting' control={<Radio />} label='게시' />
                      <FormControlLabel value='unpublished' control={<Radio />} label='미게시' />
                    </RadioGroup>
                  </td>
                  <th scope='row'>노출여부</th>
                  <td>
                    <RadioGroup row aria-label='position' name='horizontal' defaultValue='start'>
                      <FormControlLabel value='all' label='전체' labelPlacement='end' control={<Radio />} />
                      <FormControlLabel value='web' control={<Radio />} label='웹' />
                      <FormControlLabel value='mobile' control={<Radio />} label='모바일' />
                    </RadioGroup>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>최종수정일</th>
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
            자주 묻는 질문 목록
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
            columns={FaqColumn()}
            rows={AllFaqs}
            getRowId={row => row.bar.id}
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
        </div>
      </Card>
      <div className='btn-align'>
        <Link href='/boards/faq-add'>
        <Button variant='contained' size='medium' >
          등록
        </Button>
        </Link>
      </div>
    </>
  )
}
export default FaqPage;


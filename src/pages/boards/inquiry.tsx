
import * as React from 'react'
import type { GetStaticProps, NextPage } from "next"
import { useAppDispatch, useAppSelector } from 'custom-hooks'
import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  Select,
  RadioGroup,
  MenuItem,
  TableBody,
  TextField,
  Typography
} from '@mui/material'
import { useRouter } from 'next/router'
import { selectItemCount, selectAllInquiries } from 'app/boards/org/inquiry-org/inquiry-selector'
import { getAllInquiries } from 'app/boards/org/inquiry-org/inquiry-thunk'
import { useSelector } from 'react-redux'
import { DataGrid, GridRowId } from '@mui/x-data-grid'


import { GridColDef } from '@mui/x-data-grid'
import { InquiryVo } from 'app/boards/mo/inquiry-mo/inquiry-vo'
import Link from "next/link"

interface CellType {
  row: InquiryVo
}

/**
  object		{10}
id	:	8
inquiryType	:	배송문의
title	:	더미 일대일 문의 제목
hasImageAttachment	:	N
hasfileAttachment	:	N
writer	:	강백호
createdAt	:	2023-07-19 14:12:20
isReceivedReply	:	N
cellPhone	:	010-0000-0000
isAnswered	:	N

*/

interface Parameters {
  post: string;
}
// ** 024. 1:1 문의 관리
const InquiryPage: NextPage = ({ post }: Parameters) => {
  const [pageSize, setPageSize] = React.useState(10)
  const router = useRouter()
  const dispatch = useAppDispatch()
  const AllInquiries = useSelector(selectAllInquiries)
  const count = useSelector(selectItemCount)
  const [selectedRows, setSelectedRows] = React.useState<GridRowId[]>([])

  const InquiryColumn = (): GridColDef[] => [
      {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'id',
        headerName: 'No.',
        renderCell: function ({ row }: { row: any }) {
          return <Typography variant='body2'>{row.bar.id}</Typography>
        }
      },
      {
        flex: 0.07,
        minWidth: 100,
        sortable: false,
        field: 'kind',
        headerName: '질문 분류',
        renderCell: function ({ row }: { row: any }) {
          return (
            <Typography variant='body2'>
              {row.article.kind}
            </Typography>
          )
        }
      },
      {
        flex: 0.4,
        minWidth: 150,
        sortable: false,
        field: 'title',
        headerName: '제 목',
        renderCell: function ({ row }: { row: any }) {
          return <Typography variant='body2'>{row.article.title}</Typography>
        }
      }
      ,
      {
        flex: 0.15,
        minWidth: 150,
        sortable: false,
        field: 'name',
        headerName: '질문자',
        renderCell: function ({ row }: { row: any }) {
          return <Typography variant='body2'>{row.person.name}</Typography>
        }
      }
      ,
      {
        flex: 0.1,
        field: 'hasAnswer',
        sortable: false,
        minWidth: 150,
        headerName: '답변 여부',
        renderCell: function ({ row }: { row: any }) {
          return <Typography variant='body2'>{row.reply.hasAnswer}</Typography>
        }
      }
      ,
      {
        flex: 0.1,
        field: 'hasFile',
        sortable: false,
        minWidth: 150,
        headerName: '파일 여부',
        renderCell: function ({ row }: { row: any }) {
          return <Typography variant='body2'>{row.attach.hasFile}</Typography>
        }
      }
      ,
      {
        flex: 0.1,
        field: 'hasImage',
        sortable: false,
        minWidth: 150,
        headerName: '이미지',
        renderCell: function ({ row }: { row: any }) {
          return <Typography variant='body2'>{row.attach.hasImage}</Typography>
        }
      },
      {
        flex: 0.1,
        field: 'createdAt',
        minWidth: 150,
        sortable: false,
        headerName: 'Q&A 일시',
        renderCell: function ({ row }: { row: any }) {
          return <Typography variant='body2'>{row.time.createdAt}</Typography>
        }
      },
    ]

  React.useEffect(() => {
    dispatch(getAllInquiries(undefined))
  }, [dispatch, router.query])
  return (
    <>
      <Typography variant='h2'>{post}</Typography>
      <Card>
        <form onSubmit={e => e.preventDefault()}>
          <div className='search-box'>
            <table>
              <caption>1:1 문의 관리 검색</caption>
              <colgroup>
                <col width='15%' />
                <col width='35%' />
                <col width='15%' />
                <col width='35%' />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>문의 유형</th>
                  <td>
                    <FormControl className='w100'>
                      <Select name='funnel_type' defaultValue='all'>
                        <MenuItem value='all'>전체</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                  <th scope='row'>게시여부</th>
                  <td>
                    <RadioGroup row aria-label='position' name='horizontal' defaultValue='start'>
                      <FormControlLabel value='all' label='전체' labelPlacement='end' control={<Radio />} />
                      <FormControlLabel value='posting' control={<Radio />} label='답변대기' />
                      <FormControlLabel value='unpublished' control={<Radio />} label='답변완료' />
                    </RadioGroup>
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
                  <th scope='row'>작성자</th>
                  <td>
                    <TextField className='w100' />
                  </td>
                  <th scope='row'>연락처</th>
                  <td>
                    <TextField className='w100' />
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
            1:1 문의 목록
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
              <Button type='button' size='small' variant='outlined'>
                스팸등록
              </Button>
              <Button type='button' size='small' variant='outlined'>
                스팸해제
              </Button>
            </span>
          </div>
          <DataGrid
            rowHeight={40}
            headerHeight={40}
            disableColumnMenu
            autoHeight
            pagination
            rows={AllInquiries}
            getRowId={row => row.bar.id}
            columns={InquiryColumn()}
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
    </>
  )
}
export default InquiryPage;


import * as React from 'react'
import type { GetStaticProps, NextPage } from "next"
import { useAppDispatch } from 'custom-hooks'
import { DataGrid, GridRowId } from '@mui/x-data-grid'
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
import { selectItemCount, selectAllNotices } from 'app/boards/org/notice-org/notice-selector'
import { getAllNotices } from 'app/boards/org/notice-org/notice-thunk'
import { useSelector } from 'react-redux'
import { GridColDef } from '@mui/x-data-grid'
import { NoticeVo } from 'app/boards/mo/notice-mo/notice-vo'
import Link from 'next/link'

// ** 015. 공지사항 관리
interface Parameters {
  post: string;
}
interface CellType {
  row: NoticeVo
}

const NoticePage: NextPage = ({ post }: Parameters) => {
  const [pageSize, setPageSize] = React.useState(10)
  const router = useRouter()
  const dispatch = useAppDispatch()
  const AllNotices = useSelector(selectAllNotices)
  const count = useSelector(selectItemCount)
  const [selectedRows, setSelectedRows] = React.useState<GridRowId[]>([])

  const NoticeColumn = (): GridColDef[] => [
      {
        flex: 0.1,
        field: 'articleId',
        minWidth: 60,
        headerName: '번호',
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        renderCell: ({ row }: { row: NoticeVo }) => <Typography variant='body2'>{row.bar.id}</Typography>
      },
      {
        flex: 0.2,
        minWidth: 60,
        field: 'isPinned',
        headerName: '고정여부',
        sortable: false,
        renderCell: ({ row }: { row: NoticeVo }) => (
          <Link href=''>
            <Typography variant='body2'>{(row.article.isPinned) ? "고정" : "고정안함"}</Typography>
          </Link>
        )
      },
      {
        flex: 0.25,
        field: 'title',
        minWidth: 450,
        headerName: '제목',
        sortable: false,
        renderCell: ({ row }: { row: NoticeVo }) => <Typography variant='body2'>{row.article.title}</Typography>
      },
      {
        flex: 0.1,
        minWidth: 60,
        field: 'hasAttach',
        headerName: '첨부파일 여부',
        sortable: false,
        renderCell: ({ row }: { row: NoticeVo }) => <Typography variant='body2'>{(row.attach.hasFile) ? "있음" : "없음"}</Typography>
      },
      {
        flex: 0.1,
        minWidth: 130,
        field: 'writer',
        headerName: '작성자',
        sortable: false,
        renderCell: ({ row }: { row: NoticeVo }) => <Typography variant='body2'>{row.person.name}</Typography>
      },
      {
        flex: 0.1,
        minWidth: 150,
        field: 'createdAt',
        headerName: '작성일',
        sortable: false,
        renderCell: ({ row }: { row: NoticeVo }) => <Typography variant='body2'>{row.time.createdAt}</Typography>
      },
      {
        flex: 0.1,
        minWidth: 80,
        field: 'expose',
        headerName: '노출여부',
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        renderCell: ({ row }: { row: NoticeVo }) => <Typography variant='body2'>{row.article.expose}</Typography>
      },
      {
        flex: 0.1,
        minWidth: 80,
        field: 'viewCount',
        headerName: '조회수',
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        renderCell: ({ row }: { row: NoticeVo }) => <Typography variant='body2'>{row.article.viewCount}</Typography>
      },
      {
        flex: 0.1,
        minWidth: 140,
        field: 'isPosted',
        headerName: '게시여부',
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        renderCell: ({ row }: { row: NoticeVo }) => <Typography variant='body2'>{row.article.isPosted ? "게시함" : "게시안함"}</Typography>
      }
    ]

  

  React.useEffect(() => {
    dispatch(getAllNotices(undefined))
  }, [dispatch, router.query])


  return (
    <>
      <Typography variant='h2'>{post}</Typography>
      <Card>
      <form onSubmit={e => e.preventDefault()}>
          <div className='search-box'>
            <table>
              <caption>공지사항 검색</caption>
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
            공지사항 목록
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
                상단고정
              </Button>
              <Button type='button' size='small' variant='outlined'>
                상단고정 해제
              </Button>
            </span>
          </div>
          <DataGrid
            rowHeight={40}
            headerHeight={40}
            disableColumnMenu
            autoHeight
            pagination
            rows={AllNotices}
            getRowId={row => row.bar.id}
            columns={NoticeColumn()}
            checkboxSelection
            disableSelectionOnClick
            pageSize={Number(pageSize)}
            rowsPerPageOptions={[10, 25, 50]}
            onSelectionModelChange={rows => setSelectedRows(rows)}
            onPageSizeChange={newPageSize => setPageSize(newPageSize)}
            localeText={{
              noRowsLabel: "공지사항이 없습니다."
            }}
          />
        </div>
      </Card>
      <div className='btn-align'>
        <Button variant='contained' size='medium' href='/boards/notice-add'>
          등록
        </Button>
      </div>
      {/* </DatePickerWrapper> */}
    </>
  )
}
export default NoticePage;

export const getStaticProps: GetStaticProps = async (context) => {


  return {
    props: {
      post: "공지사항 관리",
    },
  };
};

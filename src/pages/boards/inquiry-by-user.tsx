
import * as React from 'react'
import type { GetStaticProps, NextPage } from "next"
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
import { InquiryColumn } from 'app/boards/temp/inquiry-temp/inquiry-column'
import { useRouter } from 'next/router'
import { selectItemCount, selectAllInquiries } from 'app/boards/org/inquiry-org/inquiry-selector'
import { getAllInquiries } from 'app/boards/org/inquiry-org/inquiry-thunk'
import { DataGrid, GridRowId } from '@mui/x-data-grid'

import { useAppDispatch } from 'custom-hooks'
import { getInquiriesByUser } from 'app/boards/org/inquiry-org/inquiry-thunk'
import { useSelector } from 'react-redux'
import { selectCustomerById } from 'app/customers/org/customer-org/customer-selector'



interface Parameters {
  post: string;
}
// ** 024. 1:1 문의 관리
const InquiryByUserPage: NextPage = ({ post }: Parameters) => {
  const dispatch = useAppDispatch()
  const c = useSelector(selectCustomerById)

  React.useEffect(() => {
    console.log('회원-1:1문의 이펙트 : ', JSON.stringify(c))
    dispatch(getInquiriesByUser(c))
  }, [c, dispatch])


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
            <span className='total'>총  개</span>
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
          {/* <DataGrid
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
          /> */}
        </div>
      </Card>
    </>
  )
}
export default InquiryByUserPage;

export const getStaticProps: GetStaticProps = async (context) => {


  return {
    props: {
      post: "1:1 문의",
    },
  };
};


import * as React from 'react'
import type { GetStaticProps, NextPage } from "next"
import { useAppDispatch, useAppSelector } from 'custom-hooks'
import { RootState } from 'store'
import { allReceiptApplications } from 'app/accounting/accountant/receipt-applications/repository'
import Labels from "app/general-affairs/stylist/labels"
import { ReceiptApplication } from "app/accounting/accountant"
import { ReceiptApplicationGridColumns } from 'app/technical-support/flyweight'
import MyDatePicker from 'app/technical-support/memento/date-pickers/mine'
import { DataGrid, GridRowId } from '@mui/x-data-grid'
import BankAccount from "app/accounting/banker/bank-accounts"
import Link from 'next/link'
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
  Table,
  Select
} from '@mui/material'
import ReceiptApplications from 'app/accounting/accountant/receipt-applications'


// ** 028. 전체 영수증/세금계산서 신청 관리

export default function AllReceiptApplications() {
  const [date, setDate] = React.useState<Date>(new Date())
  const [pageSize, setPageSize] = React.useState<number>(10)
  const [selectedRows, setSelectedRows] = React.useState<GridRowId[]>([])
  const [tuples, setTuples] = React.useState<ReceiptApplication[]>([])
  const dispatch = useAppDispatch()
  const answer = useAppSelector((state: RootState) => state.answer)
  React.useEffect(() => {

    ReceiptApplications.new().type().all().then(function (res: any) {
      setTuples(res.data.array)
    })

    dispatch(allReceiptApplications())
  }, [dispatch])

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <Typography className='Title-styled'>영수증 신청 관리</Typography>
            <form onSubmit={e => e.preventDefault()}>
              <div className='search-box'>
                <Table>
                  <caption>영수증 신청 관리</caption>
                  <colgroup>
                    <col width='15%' />
                    <col width='35%' />
                    <col width='15%' />
                    <col width='35%' />
                  </colgroup>
                  <TableBody>
                    <tr>
                      <th scope='row'>
                        <Typography variant='body2'>영수증 유형</Typography>
                      </th>
                      <td>
                        <Select defaultValue='0'>
                          <MenuItem value='0'>전체</MenuItem>
                          <MenuItem value='1'>세금계산서</MenuItem>
                          <MenuItem value='2'>현금영수증</MenuItem>
                          <MenuItem value='3'>간이영수증</MenuItem>
                          <MenuItem value='4'>카드영수증</MenuItem>
                        </Select>
                      </td>
                      <th scope='row'>
                        <Typography variant='body2'>게시여부</Typography>
                      </th>
                      <td>
                        <RadioGroup row aria-label='position' name='horizontal' defaultValue='start'>
                          <FormControlLabel value='all' label='전체' labelPlacement='end' control={<Radio />} />
                          <FormControlLabel value='posting' control={<Radio />} label='답변대기' />
                          <FormControlLabel value='unpublished' control={<Radio />} label='답변완료' />
                        </RadioGroup>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row' colSpan={1}>
                        <Typography variant='body2'>등록일</Typography>
                      </th>
                      <td colSpan={3}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>

                          <MyDatePicker />
                          <span className='dash'>~</span>
                          <MyDatePicker />

                          <div className='btn-group'>
                            <Button size='small' type='submit' sx={{ mr: 2 }} variant='outlined' color='secondary'>
                              당일
                            </Button>
                            <Button size='small' type='submit' sx={{ mr: 2 }} variant='outlined' color='secondary'>
                              어제
                            </Button>
                            <Button size='small' type='submit' sx={{ mr: 2 }} variant='outlined' color='secondary'>
                              3일
                            </Button>
                            <Button size='small' type='submit' sx={{ mr: 2 }} variant='outlined' color='secondary'>
                              일주일
                            </Button>
                          </div>
                        </Box>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>
                        <Typography variant='body2'>문의자</Typography>
                      </th>
                      <td>
                        <TextField />
                      </td>
                      <th scope='row'>
                        <Typography variant='body2'>문의제목</Typography>
                      </th>
                      <td>
                        <TextField />
                      </td>
                    </tr>
                  </TableBody>
                </Table>
              </div>
            </form>
            <div className='btn-align'>
              <Button type='reset' size='small' color='primary' variant='outlined' sx={{ ml: 2, minWidth: '5rem' }}>
                초기화
              </Button>
              <Button type='reset' size='small' color='primary' variant='contained' sx={{ ml: 2, minWidth: '5rem' }}>
                검색
              </Button>
            </div>
            <Typography variant='h3' sx={{ fontWeight: 500 }} className='h3-line-type'>
              영수증 신청 목록
            </Typography>
            <Box>
              <span>총 {answer.count} 개</span>
            </Box>
            <DataGrid
              autoHeight
              pagination
              rows={tuples}
              getRowId={row => row.id}
              columns={ReceiptApplicationGridColumns()}
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
          </Card>
        </Grid>
      </Grid>
    </>
  )
}


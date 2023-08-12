
import * as React from 'react'
import type { GetStaticProps, NextPage } from "next"
import { useAppDispatch, useAppSelector } from 'custom-hooks'
import { RootState } from 'store'
import { DataGrid, GridRowId } from '@mui/x-data-grid'
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
  Typography
} from '@mui/material'
import { SlipVo } from 'app/taxes/mo/slip-mo/slip-vo'

export default function SlipPage() {
  const [date, setDate] = React.useState<Date>(new Date())
  const [pageSize, setPageSize] = React.useState<number>(10)
  const [selectedRows, setSelectedRows] = React.useState<GridRowId[]>([])
  const [tuples, setTuples] = React.useState<SlipVo[]>([])
  const dispatch = useAppDispatch()


  React.useEffect(() => {


    //dispatch(allInquiryTypes())
  }, [dispatch])

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <Typography className='Title-styled'> 간이영수증 관리</Typography>

            <Typography variant='h3' sx={{ fontWeight: 500 }} className='h3-line-type'>
              간이영수증 목록
            </Typography>
            <Box>
              <span>총 {bankAccount.count} 개</span>
            </Box>
            <DataGrid
              autoHeight
              pagination
              rows={tuples}
              getRowId={row => row.id}
              columns={InquiryTypeGridColumns()}
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
          </Card>
        </Grid>
      </Grid>
    </>
  );
};





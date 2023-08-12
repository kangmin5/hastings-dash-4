
import * as React from 'react'
import type { GetStaticProps, NextPage } from "next"
import { useAppDispatch, useAppSelector } from 'custom-hooks'
import { RootState } from 'store'
import TaxInvoiceApplications, { TaxInvoiceApplication } from 'app/accounting/tax-invoice-issuer/tax-invoice-applications'
import { allTaxInvoiceApplications } from 'app/accounting/tax-invoice-issuer/tax-invoice-applications/repository'
import { TaxInvoiceApplicationGridColumns } from "app/technical-support/flyweight"
import MyDatePicker from 'app/technical-support/memento/date-pickers/mine'
import { DataGrid, GridRowId } from '@mui/x-data-grid'
import Link from 'next/link'
import Labels from "app/general-affairs/stylist/labels"
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

export default function AllTaxInvoiceApplications() {
  const [date, setDate] = React.useState<Date>(new Date())
  const [pageSize, setPageSize] = React.useState<number>(10)
  const [selectedRows, setSelectedRows] = React.useState<GridRowId[]>([])
  const [tuples, setTuples] = React.useState<TaxInvoiceApplication[]>([])
  const dispatch = useAppDispatch()
  const bankAccount = useAppSelector((state: RootState) => state.bankAccount)

  React.useEffect(() => {

    TaxInvoiceApplications.new().type().all().then(function (res: any) {
      setTuples(res.data.array)
    })

    dispatch(allTaxInvoiceApplications())
  }, [dispatch])

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <Typography className='Title-styled'> 세금계산서 관리</Typography>

            <Typography variant='h3' sx={{ fontWeight: 500 }} className='h3-line-type'>
              세금계산서 목록
            </Typography>
            <Box>
              <span>총 {bankAccount.count} 개</span>
            </Box>
            <DataGrid
              autoHeight
              pagination
              rows={tuples}
              getRowId={row => row.id}
              columns={TaxInvoiceApplicationGridColumns()}
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
  );
};





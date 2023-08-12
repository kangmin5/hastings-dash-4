
import * as React from 'react'
import type { GetStaticProps, NextPage } from "next"
import { useAppDispatch, useAppSelector } from 'custom-hooks'
import { RootState } from 'store'
import TaxInvoices, { TaxInvoice } from 'app/accounting/tax-invoice-issuer/tax-invoices'
import { allTaxInvoices } from 'app/accounting/tax-invoice-issuer/tax-invoices/repository'
import { TaxInvoiceGridColumns } from "app/technical-support/flyweight"
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

export default function AllTaxInvoices() {
  const [date, setDate] = React.useState<Date>(new Date())
  const [pageSize, setPageSize] = React.useState<number>(10)
  const [selectedRows, setSelectedRows] = React.useState<GridRowId[]>([])
  const [tuples, setTuples] = React.useState<TaxInvoice[]>([])
  const dispatch = useAppDispatch()
  const bankAccount = useAppSelector((state: RootState) => state.bankAccount)

  React.useEffect(() => {

    TaxInvoices.new().type().all().then(function (res: any) {
      setTuples(res.data.array)
    })

    dispatch(allTaxInvoices())
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
              columns={TaxInvoiceGridColumns()}
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





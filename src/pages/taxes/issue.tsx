
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

export default function AllPublicationSettings(props: any) {
  const [date, setDate] = React.useState<Date>(new Date())
  const [pageSize, setPageSize] = React.useState<number>(10)
  const [selectedRows, setSelectedRows] = React.useState<GridRowId[]>([])

  const dispatch = useAppDispatch()
  const bankAccount = useAppSelector((state: RootState) => state.bank)


  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <Typography className='Title-styled'> 영수증 발행 설정</Typography>

            <Typography variant='h3' sx={{ fontWeight: 500 }} className='h3-line-type'>
              영수증 발행 설정 목록
            </Typography>
            <Box>
              <span>총 500 개</span>
            </Box>

          </Card>
        </Grid>
      </Grid>
    </>
  );
};





import * as React from 'react'
import type { GetStaticProps, NextPage } from "next"
import { useAppDispatch, useAppSelector } from 'custom-hooks'
import { RootState } from 'store'


import { DataGrid, GridRowId } from '@mui/x-data-grid'

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
  Typography, Table
} from '@mui/material'
import { ImageVo } from 'app/systems/mo/image-mo/image-vo'

interface Parameters {
  post: string;
}

const InquiryAnswerPage: NextPage = ({post}: Parameters) => {
  const dispatch = useAppDispatch()
  // const picture = useAppSelector((state: RootState) => state.picture)
  const picture = undefined

  const [selectedValue, setSelectedValue] = React.useState<string>('id')
  const [pageSize, setPageSize] = React.useState<number>(10)
  const [selectedRows, setSelectedRows] = React.useState<GridRowId[]>([])
  const [tuples, setTuples] = React.useState<ImageVo[]>([])


  const RadioChange = (event: React.ChangeEvent<HTMLInputElement>)  => {
    setSelectedValue(event.target.value)
  }
  React.useEffect(() => {

    
  }, [dispatch])



  return (
    <>


     
      <Typography variant='body2' sx={{ fontWeight: 100 }} className='h3-line-type'>
      1:1 문의 답변 등록
      </Typography>
      <Box>
        <span>총 개</span>
      </Box>

    </>
  )
}


export default InquiryAnswerPage;


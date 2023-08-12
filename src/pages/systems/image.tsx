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

const ImagePage: NextPage = ({post}: Parameters) => {
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
      <h3>상품 이미지 조회</h3>

     
      <Typography variant='body2' sx={{ fontWeight: 100 }} className='h3-line-type'>
        상품 이미지 목록
      </Typography>
      <Box>
        <span>총 개</span>
      </Box>

    </>
  )
}


export default ImagePage;


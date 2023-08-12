import * as React from 'react'
import type { GetStaticProps, NextPage } from "next"
import { useAppDispatch, useAppSelector } from 'custom-hooks'
import { RootState } from 'store'
import { selectItemCount, selectAllOrders } from 'app/orders/org/order-org/order-selector'
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
import { OrderVo } from 'app/orders/mo/order-mo/order-vo'
import { getAllOrders } from 'app/orders/org/order-org/order-thunk'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
interface Parameters {
  post: string;
}

const OrderItemPage: NextPage = ({post}: Parameters) => {
  //**TODO 임시로 order 와 일치시킴 */
  const [pageSize, setPageSize] = React.useState(10)
  const router = useRouter()
  const dispatch = useAppDispatch()
  const AllOrders = useSelector(selectAllOrders)
  const count = useSelector(selectItemCount)
  const [selectedRows, setSelectedRows] = React.useState<GridRowId[]>([])

  React.useEffect(() => {
    dispatch(getAllOrders(undefined))
  }, [dispatch, router.query])

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <Typography className='Title-styled'> 주문제작 아이템관리</Typography>

            <Typography variant='h3' sx={{ fontWeight: 500 }} className='h3-line-type'>
            주문제작 아이템
            </Typography>
            <Box>
              <span>총  개</span>
            </Box>

          </Card>
        </Grid>
      </Grid>
    </>
  );
};




export default OrderItemPage;

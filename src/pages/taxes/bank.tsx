import * as React from 'react'
import type { GetStaticProps, NextPage } from "next"
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'custom-hooks'
import { selectAllBanks, selectItemCount } from 'app/taxes/org/bank-org/bank-selector'
import { getAllBanks } from 'app/taxes/org/bank-org/bank-thunk'
import { BankColumn } from 'app/taxes/temp/bank-temp/bank-column'
import { DataGrid, GridRowId } from '@mui/x-data-grid'

import {
  Box,
  Button,
  Card,
  Grid,
  Typography
} from '@mui/material'
import { DateMap } from 'app/utils/atom/date-atom'
interface Parameters {
  post: string;
}

const BankPage: NextPage = ({ post }: Parameters) => {

  const dispatch = useAppDispatch()
  const allBanks = useSelector(selectAllBanks)
  const count = useSelector(selectItemCount)
  React.useEffect(() => {
    dispatch(getAllBanks(undefined))
  }, [dispatch])
  const [date, setDate] = React.useState<Date>(new Date())
  const [pageSize, setPageSize] = React.useState<number>(10)
  const [selectedRows, setSelectedRows] = React.useState<GridRowId[]>([])


  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <Typography className='Title-styled'>{post}</Typography>

            <Typography variant='h3' sx={{ fontWeight: 500 }} className='h3-line-type'>
              {post} 목록
            </Typography>
            <Box>
              <span>총 {count} 개</span>
            </Box>
            <DataGrid
              autoHeight
              pagination
              rows={allBanks}
              getRowId={row => row.id}
              columns={BankColumn()}
              checkboxSelection
              disableSelectionOnClick
              pageSize={Number(pageSize)}
              rowsPerPageOptions={[10, 25, 50]}
              onSelectionModelChange={rows => setSelectedRows(rows)}
              onPageSizeChange={newPageSize => setPageSize(newPageSize)}
              localeText={{
                noRowsLabel: "[" + DateMap().get() + "] 현재 데이터가 없습니다."
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default BankPage;
export const getStaticProps: GetStaticProps = async (context) => {

  const data = {
    title: "060-자동입금 확인 조회",
  }

  return {
    props: {
      post: data,
    },
  };
};

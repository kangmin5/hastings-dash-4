import * as React from 'react'
import type { GetStaticProps, NextPage } from "next"
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'custom-hooks'
import { selectAllCashes, selectItemCount } from 'app/taxes/org/cash-org/cash-selector'
import { getAllCashes } from 'app/taxes/org/cash-org/cash-thunk'
import { CashColumn } from 'app/taxes/temp/cash-temp/cash-column'
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

const CashPage: NextPage = ({ post }: Parameters) => {

  const dispatch = useAppDispatch()
  const allCashes = useSelector(selectAllCashes)
  const count = useSelector(selectItemCount)
  React.useEffect(() => {
    dispatch(getAllCashes(undefined))
  }, [dispatch])
  const [date, setDate] = React.useState<Date>(new Date())
  const [pageSize, setPageSize] = React.useState<number>(10)
  const [selectedRows, setSelectedRows] = React.useState<GridRowId[]>([])


  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <Typography className='Title-styled'> 카드 영수증 관리</Typography>

            <Typography variant='h3' sx={{ fontWeight: 500 }} className='h3-line-type'>
              카드 영수증 목록
            </Typography>
            <Box>
              <span>총 {count} 개</span>
            </Box>
            <DataGrid
              autoHeight
              pagination
              rows={allCashes}
              getRowId={row => row.id}
              columns={CashColumn()}
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

export default CashPage;
export const getStaticProps: GetStaticProps = async (context) => {

  const data = {
    title: "현금 결제 조회",
  }

  return {
    props: {
      post: data,
    },
  };
};




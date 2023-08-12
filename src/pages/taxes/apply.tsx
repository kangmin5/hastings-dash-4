import * as React from 'react'
import type { GetStaticProps, NextPage } from "next"
import { ApplyColumn } from 'app/taxes/temp/apply-temp/apply-column'
import { DataGrid, GridRowId } from '@mui/x-data-grid'
import { useAppDispatch } from 'custom-hooks'
import { selectAllApplies } from 'app/taxes/org/apply-org/apply-selector'
import { getAllApplies } from 'app/taxes/org/apply-org/apply-thunk'
import { Button, Card, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { DateMap } from 'app/utils/atom/date-atom'

interface Parameters {
  post: string;
}

const ApplyPage: NextPage = ({ post }: Parameters) => {
  const dispatch = useAppDispatch()
  const allApplies = useSelector(selectAllApplies)
  React.useEffect(() => {
    dispatch(getAllApplies(undefined))
  }, [dispatch])
  const [date, setDate] = React.useState<Date>(new Date())
  const [pageSize, setPageSize] = React.useState<number>(10)
  const [selectedRows, setSelectedRows] = React.useState<GridRowId[]>([])

  return (
    <>
      {/* <DatePickerWrapper> */}
      <Typography variant='h2'>{post}</Typography>
      <Card>

        <div className='dataGrid-wrap'>
          <Typography variant='h4' className='h4-line-type'>
            세금계산서 및 영수증 신청 목록
          </Typography>
          <div className='data-function'>
            <span className='total'>총 10개</span>
            <span className='btn-group'>
              <Button type='button' size='small' variant='outlined'>
                엑셀 다운로드
              </Button>
            </span>
          </div>
          <div className='data-chk-box'>
            <span className='total'>1개 선택</span>
            <span className='btn-group'>
              <Button type='button' size='small' variant='outlined'>
                삭제
              </Button>
              <Button type='button' size='small' variant='outlined'>
                스팸등록
              </Button>
              <Button type='button' size='small' variant='outlined'>
                스팸등록 해제
              </Button>
            </span>
          </div>
          <DataGrid
            rowHeight={40}
            headerHeight={40}
            disableColumnMenu
            autoHeight
            pagination
            rows={allApplies}
            getRowId={row => row.bank.bankId}
            columns={ApplyColumn()}
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
        </div>
      </Card>
      {/* </DatePickerWrapper> */}
    </>
  )
}
export default ApplyPage;

export const getStaticProps: GetStaticProps = async (context) => {


  return {
    props: {
      post: "세금계산서 및 영수증 신청 관리",
    },
  };
};

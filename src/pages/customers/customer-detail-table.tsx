// // ** React Imports
// import React from 'react'
// 기획에서 제거되어 8월 7일 -- 현재 전체 주석 걸었음
// import { GridColDef } from '@mui/x-data-grid'
// import { TabContext, TabList, TabPanel } from '@mui/lab'
// import { Box, Button, Card, Tab, Typography } from '@mui/material'
// import { DataGrid, GridRowId } from '@mui/x-data-grid'

// // ** Store & Actions Imports
// import { useDispatch, useSelector } from 'react-redux'
// import { CustomerVo } from 'app/customers/mo/customer-mo/customer-vo'
// import { OrderVo } from 'app/orders/mo/order-mo/order-vo'
// import { PointVo } from 'app/customers/mo/point-mo/point-vo'
// import { CounselVo } from 'app/boards/mo/counsel-mo/counsel-vo'
// import { InquiryVo } from 'app/boards/mo/inquiry-mo/inquiry-vo'

// // ** 임시 데이터
// // import { fetchDataFromServer } from 'store/member'

// interface CellType {
//   row: OrderVo | PointVo | CounselVo | InquiryVo

// }

// export function CustomerDetailTable({ crate }) {
//   const {
//     car,
//     person,
//     time,
//     calc,
//     user,
//     funnel,
//     rowCount,
//     today,
//     total,
//     adobe,
//     mobile,
//     work,

//   }: CustomerVo = JSON.parse(crate)
//   // ** State
//   const [firstTab, setFirstTab] = React.useState('1')
//   const [secondTab, setSecondTab] = React.useState('1')
//   const [pageSize, setPageSize] = React.useState(10)
//   const [selectedRows, setSelectedRows] = React.useState<GridRowId[]>([])

//   // ** Hooks
//   const dispatch = useDispatch()

//   const firstTabChange = (event, newValue) => {
//     setFirstTab(newValue)
//   }

//   const secondTabChange = (event, newValue) => {
//     setSecondTab(newValue)
//   }

//   const OrderColumn = (): GridColDef[] => ([
//     {
//       flex: 0.1,
//       field: 'createdAt',
//       minWidth: 80,
//       headerName: '주문일시',
//       renderCell: ({ row }) => <Typography variant='body2'>{row.time.createdAt}</Typography>
//     },
//     {
//       flex: 0.1,
//       minWidth: 80,
//       field: 'product',
//       headerName: '주문상품',
//       renderCell: ({ row }) => <Typography variant='body2'>{row.product.name}</Typography>
//     },
//     {
//       flex: 0.25,
//       field: 'payAmount',
//       minWidth: 300,
//       headerName: '결제금액',
//       renderCell: ({ row }) => <Typography variant='body2'>{row.total.payAmount}</Typography>
//     },
//     {
//       flex: 0.1,
//       minWidth: 90,
//       field: 'payMethod',
//       headerName: '결제',
//       renderCell: ({ row }) => <Typography variant='body2'>{row.order.payMethod}</Typography>
//     },
//     {
//       flex: 0.15,
//       minWidth: 125,
//       field: 'status',
//       headerName: '배송상태',
//       renderCell: ({ row }) => <Typography variant='body2'>{row.door.status}</Typography>
//     },
//     {
//       flex: 0.1,
//       minWidth: 90,
//       field: 'balance',
//       headerName: '주문서',
//       renderCell: ({ row }) => <Typography variant='body2'>{row.total.totalAmount}</Typography>
//     }
//   ])

//   const PointColumn = (): GridColDef[] => ([
//     {
//       flex: 0.1,
//       field: 'createdAt',
//       minWidth: 80,
//       headerName: '적립일시',
//       renderCell: ({ row }) => <Typography variant='body2'>{row.time.createdAt}</Typography>
//     },

//   ])

//   const CounselColumn = (): GridColDef[] => ([
//     {
//       flex: 0.1,
//       field: 'createdAt',
//       minWidth: 80,
//       headerName: '상담일시',
//       renderCell: ({ row }) => <Typography variant='body2'>{row.time.createdAt}</Typography>
//     },

//   ])

//   const InquiryColumn = (): GridColDef[] => ([
//     {
//       flex: 0.1,
//       field: 'createdAt',
//       minWidth: 80,
//       headerName: '1:1문의일시',
//       renderCell: ({ row }) => <Typography variant='body2'>{row.time.createdAt}</Typography>
//     },

//   ])

//   return (
//     <>
//       <Card>
//         <TabContext value={firstTab}>
//           <TabList onChange={firstTabChange}>
//             <Tab value='1' label='최근주문내역' />
//             <Tab value='2' label='적립금내역' />
//           </TabList>
//           <TabPanel sx={{ p: '0' }} value='1'>
//             <Box sx={{ mt: '0', display: 'flex', justifyContent: 'space-between' }}>
//               <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', mt: '1rem' }}>
//                 <Typography variant='body1'>최근 5건의 주문내역</Typography>
//               </Box>
//               <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: '1rem' }}>
//                 <Button size='small' color='primary' variant='outlined'>
//                   전체주문조회 {'>'}
//                 </Button>
//               </Box>
//             </Box>
//             <DataGrid
//               autoHeight
//               pagination
//               rows={orders}
//               columns={OrderColumn()}
//               checkboxSelection
//               disableSelectionOnClick
//               pageSize={Number(pageSize)}
//               rowsPerPageOptions={[10, 25, 50]}
//               onSelectionModelChange={rows => setSelectedRows(rows)}
//               onPageSizeChange={newPageSize => setPageSize(newPageSize)}
//               localeText={{
//                 noRowsLabel: '조회된 데이터가 없습니다.'
//               }}
//             />
//           </TabPanel>
//           <TabPanel sx={{ p: '0' }} value='2'>
//             <DataGrid
//               autoHeight
//               pagination
//               rows={points}
//               columns={PointColumn()}
//               checkboxSelection
//               disableSelectionOnClick
//               pageSize={Number(pageSize)}
//               rowsPerPageOptions={[10, 25, 50]}
//               onSelectionModelChange={rows => setSelectedRows(rows)}
//               onPageSizeChange={newPageSize => setPageSize(newPageSize)}
//               localeText={{
//                 noRowsLabel: '조회된 데이터가 없습니다.'
//               }}
//             />
//           </TabPanel>
//         </TabContext>
//       </Card>
//       <Card>
//         <TabContext value={secondTab}>
//           <TabList onChange={secondTabChange}>
//             <Tab value='1' label='고객상담내역' />
//             <Tab value='2' label='1:1문의내역' />
//           </TabList>
//           <TabPanel sx={{ p: '0' }} value='1'>
//             <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: '1rem' }}>
//               <Button size='small' color='primary' variant='outlined'>
//                 전체상담내역 {'>'}
//               </Button>
//             </Box>
//             <DataGrid
//               autoHeight
//               pagination
//               rows={counsels}
//               columns={CounselColumn()}
//               checkboxSelection
//               disableSelectionOnClick
//               pageSize={Number(pageSize)}
//               rowsPerPageOptions={[10, 25, 50]}
//               onSelectionModelChange={rows => setSelectedRows(rows)}
//               onPageSizeChange={newPageSize => setPageSize(newPageSize)}
//             />
//           </TabPanel>
//           <TabPanel sx={{ p: '0' }} value='2'>
//             <DataGrid
//               autoHeight
//               pagination
//               rows={inquiries}
//               columns={InquiryColumn()}
//               checkboxSelection
//               disableSelectionOnClick
//               pageSize={Number(pageSize)}
//               rowsPerPageOptions={[10, 25, 50]}
//               onSelectionModelChange={rows => setSelectedRows(rows)}
//               onPageSizeChange={newPageSize => setPageSize(newPageSize)}
//             />
//           </TabPanel>
//         </TabContext>
//       </Card>
//     </>
//   )
// }



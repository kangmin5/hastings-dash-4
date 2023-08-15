import * as React from 'react'
import type { GetStaticProps, NextPage } from "next"
import { useAppDispatch, useAppSelector } from 'custom-hooks'
import { DataGrid, GridColDef, GridRowId } from '@mui/x-data-grid'
import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  Select,
  Radio,
  RadioGroup,
  MenuItem,
  FormGroup,
  Checkbox,
  TextField,
  Typography,
  Link
} from '@mui/material'
interface Parameters {
  post: string;
}
import { useRouter } from 'next/router'
import {
  selectItemCount, selectAllProducts,
  selectCountOfAll,
  selectCountOfSelling,
  selectCountOfStopSelling,
  selectCountOfDisplayed,
  selectCountOfNoShow
} from 'app/products/org/product-org/product-selector'
import { getAllProducts } from 'app/products/org/product-org/product-thunk'
import { useSelector } from 'react-redux'
import { ProductVo } from 'app/products/mo/product-mo/product-vo'
const ProductPage: NextPage = ({ post }: Parameters) => {
  const [pageSize, setPageSize] = React.useState(10)
  const [selectedRows, setSelectedRows] = React.useState<GridRowId[]>([])
  const dispatch = useAppDispatch()
  const router = useRouter()
  const AllProducts = useSelector(selectAllProducts)
  const itemCount = useSelector(selectItemCount)
  const countOfAll = useSelector(selectCountOfAll)
  const countOfSelling = useSelector(selectCountOfSelling)
  const countOfStopSelling = useSelector(selectCountOfStopSelling)
  const countOfDisplayed = useSelector(selectCountOfDisplayed)
  const countOfNoShow = useSelector(selectCountOfNoShow)

  const { id } = router.query
  interface CellType {
    row: ProductVo
  }
  const ProductColumn = (): GridColDef[] => {
    return [
      {
        flex: 0.05,
        field: 'productId',
        align:'left',
        minWidth: 80,
        hide: true,
        headerName: '상품ID',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.par.id}</Typography>
        }
      },
      {
        flex: 0.07,
        minWidth: 70,
        field: 'imageUrl',
        align:'center',
        headerName: '이미지',
        renderCell({ row }: CellType) {
          return (
            // <Link href=''>
            //   <Typography variant='body2'>{row.par.imageUrl}</Typography>
            // </Link>
            <Box
  component="img"
  sx={{
    height: 50,
    width: 50,
    maxHeight: { xs: 50, md: 50 },
    maxWidth: { xs: 50, md: 50 },
  }}
  alt="상품 이미지"
  src={row.par.imageUrl}
/>
          )
        }
      },
      {
        flex: 0.1,
        field: 'serialNumber',
        align:'left',
        minWidth: 20,
        headerName: '시리얼번호',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.par.serial}</Typography>
        }
      },
      {
        flex: 0.1,
        minWidth: 100,
        field: 'category',
        headerName: '분류',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.cat.category}</Typography>
        }
      },
      {
        flex: 0.18,
        minWidth: 180,
        field: 'name',
        headerName: '상품명',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>
            <Link href={'/products/product/'+row.par.id} >
            {row.par.name}
            </Link>
            </Typography>
        }
      },
      {
        flex: 0.07,
        minWidth: 70,
        align:'center',
        field: 'isDisplayed',
        headerName: '노출',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.facet.isDisplayed}</Typography>
        }
      },
      {
        flex: 0.07,
        minWidth: 70,
        align:'center',
        field: 'isStopSelling',
        headerName: '판매',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.facet.isSelling}</Typography>
        }
      },
      {
        flex: 0.1,
        minWidth: 90,
        field: 'price',
        headerName: '가격',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.price.unitPrice}원</Typography>
        }
      },
      {
        flex: 0.1,
        minWidth: 100,
        align:'center',
        field: 'numberOfOrders',
        headerName: '주문수량',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.facet.orderCount} </Typography>
        }
      },
      {
        flex: 0.1,
        minWidth: 100,
        align:'center',
        field: 'viewCount',
        headerName: '조회수',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.par.viewCount}</Typography>
        }
      },
      {
        flex: 0.2,
        minWidth: 200,
        field: 'createdAt',
        headerName: '등록일',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.time.createdAt}</Typography>
        }
      },
      {
        flex: 0.2,
        minWidth: 200,
        field: 'updatedAt',
        headerName: '수정일',
        renderCell({ row }: CellType) {
          return <Typography variant='body2'>{row.time.updatedAt}</Typography>
        }
      }
    ]
  }
  React.useEffect(() => {
    dispatch(getAllProducts(undefined))
  }, [dispatch])

  return (
    <>
      <Typography variant='h2'>상품 목록</Typography>
      <Card>
        <div className='product-status'>
          <dl>
            <dt>전체</dt>
            <dd>
              <a href='#none'>{countOfAll}</a>건
            </dd>
          </dl>
          <dl>
            <dt>판매함</dt>
            <dd>
              <a href='#none'>{countOfSelling}</a>건
            </dd>
          </dl>
          <dl>
            <dt>판매안함</dt>
            <dd>
              <a href='#none'>{countOfStopSelling}</a>건
            </dd>
          </dl>
          <dl>
            <dt>진열함</dt>
            <dd>
              <a href='#none'>{countOfDisplayed}</a>건
            </dd>
          </dl>
          <dl>
            <dt>진열안함</dt>
            <dd>
              <a href='#none'>{countOfNoShow}</a>건
            </dd>
          </dl>
          <Link href='/products/product-add'>
          <Button variant='contained' size='large' color='primary'>
            신규상품등록
          </Button>
          </Link>
        </div>
        <form onSubmit={e => e.preventDefault()}>
          <div className='search-box'>
            <table>
              <caption>상품 목록 검색</caption>
              <colgroup>
                <col width='15%' />
                <col width='35%' />
                <col width='15%' />
                <col width='35%' />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>진열상태</th>
                  <td>
                    <RadioGroup row aria-label='position' name='horizontal' defaultValue='start'>
                      <FormControlLabel value='all' label='전체' labelPlacement='end' control={<Radio />} />
                      <FormControlLabel value='posting' control={<Radio />} label='진열함' />
                      <FormControlLabel value='unpublished' control={<Radio />} label='진열안함' />
                    </RadioGroup>
                  </td>
                  <th scope='row'>판매상태</th>
                  <td>
                    <RadioGroup row aria-label='position' name='horizontal' defaultValue='start'>
                      <FormControlLabel value='all' label='전체' labelPlacement='end' control={<Radio />} />
                      <FormControlLabel value='web' control={<Radio />} label='판매함' />
                      <FormControlLabel value='mobile' control={<Radio />} label='판매안함' />
                    </RadioGroup>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>가격대체문구</th>
                  <td>
                    <RadioGroup row aria-label='position' name='horizontal' defaultValue='start'>
                      <FormControlLabel value='all' label='전체' labelPlacement='end' control={<Radio />} />
                      <FormControlLabel value='posting' control={<Radio />} label='사용' />
                      <FormControlLabel value='unpublished' control={<Radio />} label='미사용' />
                    </RadioGroup>
                  </td>
                  <th scope='row'></th>
                  <td></td>
                </tr>
                <tr>
                  <th scope='row'>상품 등록일</th>
                  <td colSpan={3}>
                    <div className='date-picker-wrap'>
                      {/*
                        <DatePicker
                          selected={date}
                          id='basic-input'
                          popperPlacement={popperPlacement}
                          onChange={date => setDate(date)}
                          customInput={<CustomInput />}
                          sx={{ mr: '0.5' }}
                        />
                        <span className='dash'>~</span>
                        <DatePicker
                          selected={date}
                          id='basic-input'
                          popperPlacement={popperPlacement}
                          onChange={date => setDate(date)}
                          customInput={<CustomInput />}
                        />*/}
                      <div className='btn-group'>
                        <Button size='small' type='submit' variant='outlined'>
                          당일
                        </Button>
                        <Button size='small' type='submit' variant='outlined'>
                          어제
                        </Button>
                        <Button size='small' type='submit' variant='outlined'>
                          3일
                        </Button>
                        <Button size='small' type='submit' variant='outlined'>
                          일주일
                        </Button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>최종 수정일</th>
                  <td colSpan={3}>
                    <div className='date-picker-wrap'>
                      {/*
                        <DatePicker
                          selected={date}
                          id='basic-input'
                          popperPlacement={popperPlacement}
                          onChange={date => setDate(date)}
                          customInput={<CustomInput />}
                          sx={{ mr: '0.5' }}
                        />
                        <span className='dash'>~</span>
                        <DatePicker
                          selected={date}
                          id='basic-input'
                          popperPlacement={popperPlacement}
                          onChange={date => setDate(date)}
                          customInput={<CustomInput />}
                        />*/}
                      <div className='btn-group'>
                        <Button size='small' type='submit' variant='outlined'>
                          당일
                        </Button>
                        <Button size='small' type='submit' variant='outlined'>
                          어제
                        </Button>
                        <Button size='small' type='submit' variant='outlined'>
                          3일
                        </Button>
                        <Button size='small' type='submit' variant='outlined'>
                          일주일
                        </Button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>상품 분류</th>
                  <td colSpan={3}>
                    <div className='form-wrap'>
                      <FormControl sx={{ width: '160px' }}>
                        <Select name='funnel_type' defaultValue='all'>
                          <MenuItem value='all'>대분류 선택</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl sx={{ width: '160px' }}>
                        <Select name='funnel_type' defaultValue='all'>
                          <MenuItem value='all'>중분류 선택</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl sx={{ width: '160px' }}>
                        <Select name='funnel_type' defaultValue='all'>
                          <MenuItem value='all'>소분류 선택</MenuItem>
                        </Select>
                      </FormControl>
                      <FormGroup>
                        <FormControlLabel value='하위분류 동시적용' label='하위분류 동시적용' control={<Checkbox />} />
                      </FormGroup>
                      <FormGroup>
                        <FormControlLabel
                          value='분류 미등록상품 포함'
                          label='분류 미등록상품 포함'
                          control={<Checkbox />}
                        />
                      </FormGroup>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>상품명</th>
                  <td colSpan={3}>
                    <div className='form-wrap'>
                      <FormControl sx={{ width: '160px' }}>
                        <Select name='funnel_type' defaultValue='all'>
                          <MenuItem value='all'>상품 등록 순서</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField fullWidth />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='btn-align'>
            <Button type='reset' size='small' variant='outlined'>
              초기화
            </Button>
            <Button type='submit' size='small' color='primary' variant='contained'>
              검색
            </Button>
          </div>
        </form>
        <div className='dataGrid-wrap'>
          <Typography variant='h4' className='h4-line-type'>
            상품 목록
          </Typography>
          <div className='data-function'>
            <span className='total'>총 {countOfAll} 개</span>
            <span className='btn-group'>
              <Button type='button' size='small' variant='outlined'>
                메인진열관리
              </Button>
              <Button type='button' size='small' variant='outlined'>
                상품복사
              </Button>
              <Button type='button' size='small' variant='outlined'>
                분류수정
              </Button>
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
                진열함
              </Button>
              <Button type='button' size='small' variant='outlined'>
                진열안함
              </Button>
              <Button type='button' size='small' variant='outlined'>
                판매함
              </Button>
              <Button type='button' size='small' variant='outlined'>
                판매안함
              </Button>
            </span>
          </div>
          <DataGrid
            rowHeight={40}
            headerHeight={40}
            disableColumnMenu
            autoHeight
            pagination
            rows={AllProducts}
            getRowId={row => row.par.id}
            columns={ProductColumn()}
            checkboxSelection
            disableSelectionOnClick
            pageSize={Number(pageSize)}
            rowsPerPageOptions={[10, 25, 50]}
            onSelectionModelChange={rows => setSelectedRows(rows)}
            onPageSizeChange={newPageSize => setPageSize(newPageSize)}
            localeText={{
              noRowsLabel: '조회결과가 없습니다'
            }}
          />
        </div>
      </Card>
      <div className='btn-align'>
        <Button variant='contained' size='medium' href='#'>
          등록
        </Button>
      </div>
    </>
  )
}
export default ProductPage;

export const getStaticProps: GetStaticProps = async (context) => {


  return {
    props: {
      post: "고객상담 관리",
    },
  };
};

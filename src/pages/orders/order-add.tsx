import * as React from 'react'
import { useState } from 'react'
import type { GetStaticProps, NextPage } from "next"
import { useAppDispatch, useAppSelector } from 'custom-hooks'
import { DataGrid, GridRowId } from '@mui/x-data-grid'
import { Button, Card, FormControl, Link, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { selectItemCount, selectAllOrders } from 'app/orders/org/order-org/order-selector'
import { getAllOrders } from 'app/orders/org/order-org/order-thunk'
import { useSelector } from 'react-redux'


interface Parameters {
  post: string;
}

const OrderAddPage: NextPage = ({ post }: Parameters) => {
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
      <div className='tit-area'>
        <h2 className='h2 mb0'>주문 등록</h2>
        <div className='btn-group'>
          <Button variant='outlined' size='medium' color='info'>
            영수증 발행
          </Button>
          <Button variant='outlined' size='medium' color='info'>
            카드부분취소
          </Button>
          <Button variant='outlined' size='medium' color='info'>
            카드취소
          </Button>
          <Button variant='outlined' size='medium' color='info'>
            반품완료
          </Button>
          <Button variant='contained' size='medium' color='primary'>
            주문취소
          </Button>
        </div>
      </div>
      <div style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '6px' }}>

        <Card className='register-box purchase-orders detail'>
          <form onSubmit={e => e.preventDefault()}>
            <div className='h3-back-styled'>
              <h3>주문 번호</h3>
              <span className='order-num'> <TextField className='x-small' />- <TextField className='x-small' /></span>
            </div>
            <div className='tbl-view type2'>
              <table>
                <caption>주문 상세</caption>
                <colgroup>
                  <col width='160px' />
                  <col width='auto' />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope='row'>주문일</th>
                    <td>
                    <TextField className='x-small' />
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>주문자</th>
                    <td>
                      <div className='flex sc'>
                        {/* [Dev] 기업회원일 경우에만 아이콘 표시 */}
                        <span className='badge ico-b mr8' />
                        <TextField className='x-small' />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>회사명</th>
                    <td>
                      <p> <TextField className='x-small' /></p>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row' className='vat'>
                      연락처
                    </th>
                    <td>
                      <div className='form-wrap'>
                        <label htmlFor='' className='label'>
                          연락처 1.
                        </label>
                        <TextField sx={{ width: '140px' }} />
                        <Button variant='outlined' color='primary' size='small'>
                          문자 보내기
                        </Button>
                        <label htmlFor='' className='label ml16'>
                          연락처 2.
                        </label>
                        <TextField sx={{ width: '140px' }} />
                        <Button variant='outlined' color='info' size='small'>
                          수정
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>이메일</th>
                    <td>
                      <div className='form-wrap ss'>
                        <TextField className='medium' />
                        <Button variant='outlined' color='primary' size='small'>
                          메일 보내기
                        </Button>
                        <Button variant='outlined' color='info' size='small'>
                          수정
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>누적주문</th>
                    <td>
                      <p>총 주문횟수 :  <TextField className='x-small' />회&nbsp;&nbsp;
                      총 주문금액 :  <TextField className='x-small' />원 (배송완료 기준)</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='tbl-view type2'>
              <table>
                <caption>주문 상세</caption>
                <colgroup>
                  <col width='160px' />
                  <col width='auto' />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope='row'>받는 분</th>
                    <td>
                      <div className='form-wrap'>
                        <TextField sx={{ width: '207px' }} value={'홍길동'} />
                        <Button variant='outlined' color='info' size='small'>
                          수정
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row' className='vat'>
                      연락처
                    </th>
                    <td>
                      <div className='form-wrap'>
                        <label htmlFor='' className='label'>
                          연락처 1.
                        </label>
                        <TextField sx={{ width: '140px' }} value={'010-1234-5678'} />
                        <Button variant='outlined' color='primary' size='small'>
                          문자 보내기
                        </Button>
                        <label htmlFor='' className='label ml16'>
                          연락처 2.
                        </label>
                        <TextField sx={{ width: '140px' }} />
                        <Button variant='outlined' color='info' size='small'>
                          수정
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row' className='vat'>
                      받는 주소
                    </th>
                    <td>
                      <div className='form-group'>
                        <TextField className='x-small' />
                        <span className='dash'>-</span>
                        <TextField className='x-small' />
                        <Button size='small' variant='outlined' color='primary'>
                          우편번호 검색
                        </Button>
                      </div>
                      <div className='form-group'>
                        <TextField className='medium' value='경기도 고양시 일산서구 일산아파트 100동 1001호' />
                        <Button variant='outlined' color='info' size='small'>
                          수정
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>배송 메세지</th>
                    <td>
                      <FormControl>
                        <Select defaultValue='all' sx={{ width: 380 }}>
                          <MenuItem value='all'>배송기사에게 전달되는 메세지입니다.</MenuItem>
                        </Select>
                      </FormControl>
                      <Button variant='outlined' color='info' size='small' className='ml8'>
                        수정
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='tbl-view type2'>
              <table>
                <caption>주문 상세</caption>
                <colgroup>
                  <col width='160px' />
                  <col width='auto' />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope='row'>결제방법</th>
                    <td> <TextField className='x-small' />
                     【  <TextField className='x-small' />
                     <TextField className='x-small' />
                     (예금주: <TextField className='x-small' />) 】</td>
                  </tr>
                  <tr>
                    <th scope='row'>입금자</th>
                    <td>
                      <div className='form-wrap'>
                        <TextField className='medium' value='혜윰' />
                        <Button variant='outlined' color='info' size='small'>
                          수정
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>결제상태</th>
                    <td>
                      <span className='point'> <TextField className='x-small' /></span>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>현금영수증</th>
                    <td>
                      <div className='form-wrap'>
                      <TextField className='x-small' />
                        <div className='btn-group'>
                          <Button variant='outlined' color='info' size='small'>
                            정보 상세
                          </Button>
                          <Button variant='outlined' color='info' size='small'>
                            정보 수정
                          </Button>
                          <Button variant='outlined' color='info' size='small'>
                            발급 취소
                          </Button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='tbl-view type2'>
              <table>
                <caption>주문 상세</caption>
                <colgroup>
                  <col width='160px' />
                  <col width='auto' />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope='row'>배송처리여부</th>
                    <td>
                      <span className='point'> <TextField className='x-small' /></span>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>송장번호입력</th>
                    <td>
                      <div className='form-wrap'>
                        <Select defaultValue='all' sx={{ width: 160 }}>
                          <MenuItem value='all'> <TextField className='x-small' /></MenuItem>
                        </Select>
                        <TextField className='medium' value='' />
                        <Button variant='outlined' color='info' size='small'>
                          배송추적
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row' className='vat'>
                      주문관련로그
                    </th>
                    <td>
                      <ul className='log'>
                        <li>배송으로 변경 : 로젠택배 (35418489470) (csvsystem) (2023/05/01 16:19)</li>
                        <li>입금으로 변경 (2023/05/01 16:16)</li>
                        <li>주문서 생성 (2023/05/01 20:41)</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </Card>
      </div>
      <div className='btn-align'>
        <div className='left'>
          <Link href='/orders/order'>
          <Button variant='outlined' size='medium' color='info'>
            목록
          </Button></Link>
        </div>
      </div>
    </>
  )
}
export default OrderAddPage;


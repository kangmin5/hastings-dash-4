import * as React from 'react'
import type { GetStaticProps, NextPage } from "next"
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
  Typography, Table
} from '@mui/material'

import { useAppDispatch } from 'custom-hooks'
import {getCartsByUser} from 'app/customers/org/cart-org/cart-thunk'
import { useSelector } from 'react-redux'
import { selectCustomerById } from 'app/customers/org/customer-org/customer-selector'
import { AgreeVo } from 'app/authors/mo/agree-mo/agree-vo'


interface Parameters {
  post: string;
}

const CartPage: NextPage = ({post}: Parameters) => {

  const dispatch = useAppDispatch()
  const c = useSelector(selectCustomerById)

  React.useEffect(() => {
    console.log('장바구니 이펙트 : ', JSON.stringify(c))
    dispatch(getCartsByUser(c))
  }, [c, dispatch])

  return (
    <>
      <h3>장바구니 & 관심상품 조회</h3>

      <form onSubmit={e => e.preventDefault()}>
        <div className='search-box'>
          <Table>
            <caption>장바구니 & 관심상품 조회</caption>
            <colgroup>
              <col width='15%' />
              <col width='35%' />
              <col width='15%' />
              <col width='35%' />
            </colgroup>
            <TableBody>
              <tr>
                <th colSpan={1} scope='row'>
                  <Typography variant='body2'>제목</Typography>
                </th>
                <td colSpan={3}>
                  <RadioGroup>
                    <FormControlLabel value='id' control={<Radio />} label='아이디' />
                    <FormControlLabel value='orderer' control={<Radio />} label='주문자' />
                    <FormControlLabel value='orderNo' control={<Radio />} label='주문번호' />
                    <FormControlLabel value='receiver' control={<Radio />} label='수령인' />
                    <FormControlLabel value='payer' control={<Radio />} label='입금자' />
                    <FormControlLabel value='phone' control={<Radio />} label='전화번호' />
                    <FormControlLabel value='memo' control={<Radio />} label='메모' />
                    <FormControlLabel value='barcode' control={<Radio />} label='바코드' />
                    <FormControlLabel value='transactionNo' control={<Radio />} label='거래번호' />
                    <FormControlLabel value='email' control={<Radio />} label='이메일 주소' />
                  </RadioGroup>
                </td>
              </tr>
              <tr>
                <td>
                <select name='order'>
                  <option value='all'>전체주문</option>
                  <optgroup label='처리기준'>
                    <option value='date'>날짜별</option>
                    <option value='status'>상태별</option>
                  </optgroup>
                  <optgroup label='공급자 선택'>
                    <option value='supplier1'>공급자1</option>
                    <option value='supplier2'>공급자2</option>
                  </optgroup>
                  <optgroup label='연계주문'>
                    <option value='related'>연계주문</option>
                    <option value='unrelated'>비연계주문</option>
                  </optgroup>
                  <optgroup label='회원여부'>
                    <option value='member'>회원주문</option>
                    <option value='nonmember'>비회원주문</option>
                  </optgroup>
                  <optgroup label='검색기간'>
                    <option value='day'>1일</option>
                    <option value='week'>1주일</option>
                    <option value='month'>1개월</option>
                    <option value='year'>1년</option>
                  </optgroup>
                  <optgroup label='결제방법'>
                    <option value='credit_card'>신용카드</option>
                    <option value='bank_transfer'>계좌이체</option>
                    <option value='mobile_payment'>휴대폰결제</option>
                  </optgroup>
                  <optgroup label='결제상태'>
                    <option value='paid'>결제완료</option>
                    <option value='unpaid'>미결제</option>
                    <option value='cancelled'>주문취소</option>
                  </optgroup>
                  <optgroup label='처리단계'>
                    <option value='processing'>처리중</option>
                    <option value='ready'>출고대기</option>
                    <option value='delivered'>배송완료</option>
                  </optgroup>
                  <optgroup label='결제금액'>
                    <option value='under_10000'>1만원 미만</option>
                    <option value='10000_to_50000'>1만원 이상 5만원 미만</option>
                    <option value='over_50000'>5만원 이상</option>
                  </optgroup>
                  <option value='additional_payment'>추가결제</option>
                  <option value='address_search'>주소검색</option>
                  <option value='inflow_route'>유입경로</option>
                </select>
                </td>
              </tr>
            </TableBody>
          </Table>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <td>할일목록</td>
          </tr>
        </thead>
        <tbody>
          <div>현재 등록된 일정이 없습니다</div>
        </tbody>
      </table>
    </>
  )
}
export default CartPage;

export const getStaticProps: GetStaticProps = async (context) => {


  return {
    props: {
      post: "고객상담 관리",
    },
  };
};

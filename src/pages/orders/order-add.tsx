import * as React from 'react'
import { useState } from 'react'
import type { NextPage } from "next"
import { useAppDispatch } from 'custom-hooks'

import {
  Button,
  Card,
  FormControl,
  Link,
  MenuItem,
  Select,
  TextField,
  FormHelperText
} from '@mui/material'
import Textarea from '@mui/joy/Textarea';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from 'dayjs';
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { useForm, SubmitHandler, Controller, } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { OrderBo } from 'app/orders/mo/order-mo/order-vo'
import { OarBuilder } from 'app/orders/atom/oar-atom'
import { CalcBuilder } from 'app/orders/atom/calc-atom'
import { FeeBuilder } from 'app/orders/atom/fee-atom'
import { UserBuilder } from 'app/authors/atom/user-atom'
import { ParBuilder } from 'app/products/atom/par-atom'
import { FunnelBuilder } from 'app/customers/atom/funnel-atom'
import { addOrder } from 'app/orders/org/order-org/order-thunk'
import { AdobeBuilder } from 'app/deliveries/atom/adobe-atom'
import { DepositBuilder } from 'app/taxes/atom/deposit-atom'
import { InvoiceBuilder } from 'app/orders/atom/invoice-atom'
import { WorkBuilder } from 'app/authors/atom/work-atom'
import { PersonBuilder } from 'app/authors/atom/person-atom'
import { ReceiptBuilder } from 'app/taxes/atom/receipt-atom'
import { DoorBuilder } from 'app/deliveries/atom/door-atom'



const OrderAddPage: NextPage = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'));
  const dispatch = useAppDispatch()
  const Zoo: any = z.object({
    orderNum1: z.string(),
    orderNum2: z.string(),
    orderer: z.string(),
    bizName: z.string(),
    phone1: z.string(),
    phone2: z.string(),
    email: z.string(),
    orderCount: z.string(),
    orderPrice: z.string(),
    receiver: z.string(),
    phone3: z.string(),
    phone4: z.string(),
    zip: z.string(),
    sido: z.string(),
    dongho: z.string(),
    message: z.string(),
    payMethod: z.string(),
    bank: z.string(),
    accountNum: z.string(),
    owner: z.string(),
    depositor: z.string(),
    payStatus: z.string(),
    cashReceipt: z.string(),
    isShipDone: z.string(),
    invoiceKind: z.string(),
    invoiceNum: z.string(),
    orderLog: z.string(),
  });

  type Zookeeper = z.infer<typeof Zoo> & { unusedProperty: string };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Zookeeper>({
    mode: "onSubmit",
    defaultValues: {
    orderNum1: '테스트',
    orderNum2: '테스트',
    orderer: '테스트',
    userId: '테스트',
    bizName: '테스트',
    phone1: '테스트',
    phone2: '테스트',
    email: '테스트',
    orderCount: '테스트',
    orderPrice: '테스트',
    receiver: '테스트',
    phone3: '테스트',
    phone4: '테스트',
    zip: '테스트',
    sido: '테스트',
    dongho: '테스트',
    message: '테스트',
    payMethod: '테스트',
    bank: '테스트',
    accountNum: '테스트',
    owner: '테스트',
    depositor: '테스트',
    payStatus: '테스트',
    cashReceipt: '테스트',
    isShipDone: '테스트',
    invoiceKind: '테스트',
    invoiceNum: '테스트',
    orderLog: '테스트',

    },
    resolver: zodResolver(Zoo), // Useful to check TypeScript regressions
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log('공지사항 전송 테스트')

    console.log('1--------\n', JSON.stringify(data))

    const orderNum1 = data.orderNum1
    console.log('주문번호 1  : ', orderNum1) //
    const orderNum2 = data.orderNum2
    console.log('주문번호 2 : ', orderNum2) //
    const orderer = data.orderer
    console.log('주문자 : ',orderer) //
    const userId = data.userId //
    console.log('주문자 ID : ',userId) //
    const bizName = data.bizName
    console.log('회사명 : ', bizName) //
    const phone1 = data.phone1
    console.log('연락처1 : ', phone1) //
    const phone2 = data.phone2
    console.log('연락처2 : ', phone2) //
    const email = data.email
    console.log('이메일 : ', email) //
    const orderCount = data.orderCount
    console.log('총 주문횟수 : ', orderCount) //
    const orderPrice = data.orderPrice
    console.log('총 주문금액 : ', orderPrice) //
    const receiver_ = data.receiver
    console.log('받는 분 : ', receiver_) //
    const phone3 = data.phone3
    console.log('연락처 1 : ', phone3) //
    const phone4 = data.phone4
    console.log('연락처 2 : ', phone4) //
    const zip = data.zip
    console.log('우편번호 : ', zip) //
    const sido = data.sido
    console.log('시도구군 : ', sido) //
    const dongho = data.dongho
    console.log('동호 : ', dongho) //
    const message = data.message
    console.log('배송메시지 : ', message)
    const payMethod = data.payMethod
    console.log('결제방법 : ', payMethod) //
    const bank = data.bank
    console.log('은행 : ', bank) //
    const accountNum = data.accountNum
    console.log('계좌번호 : ', accountNum) //
    const owner = data.owner
    console.log('예금주 : ', owner) //
    const depositor = data.depositor
    console.log('입금자 : ', depositor) //
    const payStatus = data.payStatus
    console.log('결제상태 : ', payStatus) //
    const cashReceipt = data.cashReceipt
    console.log('현금영수증 : ', cashReceipt) //
    const isShipDone = data.isShipDone
    console.log('배송처리여부 : ', isShipDone)
    const invoiceKind = data.invoiceKind
    console.log('송장종류 : ', invoiceKind) //
    const invoiceNum = data.invoiceNum
    console.log('송장번호 : ', invoiceNum) //
    const orderLog = data.orderLog
    console.log('주문관련로그 : ', orderLog) //


    const oar= new OarBuilder()
    .orderNo(orderNum1+'-'+orderNum2)
    .orderLog(orderLog)
    .build()
    const  calc= new CalcBuilder()
    .orderCountPerUser(orderCount)
    .orderAmount(orderPrice)
    .build()
    const  fee= new FeeBuilder()
    .payMethod(payMethod)
    .payStatus(payStatus)
    .build()
    const  user= new UserBuilder()
    .userId(userId)
    .username(orderer)

    .build()
   // const  funnel= new FunnelBuilder().build()
   // const  par= new ParBuilder().build()
    const adobe = new AdobeBuilder()
    .zip(zip)
    .addr(sido)
    .extraAddr(dongho)
    .build()

    const deposit = new DepositBuilder()
    .accountNo(accountNum)
    .bank(bank)
    .owner(owner)
    .depositor(depositor)
    .build()

    const invoice = new InvoiceBuilder()
    .invoiceKind(invoiceKind)
    .invoiceNo(invoiceNum)
    .build()

    const work = new WorkBuilder()
    .bizName(bizName)
    .build()

    const receiver = new PersonBuilder()
    .phone(phone3)
    .homePhone(phone4)
    .email(email)
    .name(receiver_)

    .build()

    const receipt = new ReceiptBuilder()
    .cashReceipt(cashReceipt)

    .build()

    const door = new DoorBuilder()
    .status(isShipDone)
    .message(message)
    .build()

    const order = new OrderBo()

    .oar(oar)
    .calc(calc)
    .fee(fee)
    .user(user)
    .adobe(adobe)
    .deposit(deposit)
    .invoice(invoice)
    .work(work)
    .receiver(receiver)
    .receipt(receipt)
    .door(door)



    .build()





    // const child1 = body.children[0].textContent
    // console.log('5--------\n', child1)

    // const child2 = body.children[1]
    // console.log('6--------\n', child2)

    // const tttt = body.children[1].textContent
    // console.log('tttt--------\n', tttt)

    // const a = child2.children[0]

    // console.log('7--------\n', a)

    // const child3 = a.getAttribute('src')
    // console.log('8--------\n', child3)

    // const b = body.children[1].textContent

    dispatch(addOrder(order))
    // alert(' 공지사항 등록 : ')

  }



  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
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

            <div className='h3-back-styled'>
              <h3>주문 번호</h3>
              <span className='order-num'>
                <Controller
                  rules={{ required: true }}
                  control={control}
                  name="orderNum1"
                  defaultValue={''}
                  render={(
                    {
                      field: { value, onChange, onBlur, ref },
                      fieldState: { error },
                    }
                  ) => (
                    <FormControl component="fieldset" >
                      <TextField
                        variant='outlined'
                        name="orderNum1"
                        placeholder="주문번호 1"
                        inputRef={ref}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        error={Boolean(error)}
                        sx={{ width: '200px' }} />
                      <FormHelperText
                        sx={{
                          color: 'error.main',
                        }}
                      >
                        {error?.message ?? ''}
                      </FormHelperText>
                    </FormControl>
                  )}
                />

                -

                <Controller
                  rules={{ required: true }}
                  control={control}
                  name="orderNum2"
                  defaultValue={''}
                  render={(
                    {
                      field: { value, onChange, onBlur, ref },
                      fieldState: { error },
                    }
                  ) => (
                    <FormControl component="fieldset" >
                      <TextField
                        variant='outlined'
                        name="orderNum2"
                        placeholder="주문번호 2"
                        inputRef={ref}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        error={Boolean(error)}
                        sx={{ width: '200px' }} />
                      <FormHelperText
                        sx={{
                          color: 'error.main',
                        }}
                      >
                        {error?.message ?? ''}
                      </FormHelperText>
                    </FormControl>
                  )}
                />


              </span>
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
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          disableFuture
                          label="Responsive"
                          openTo="day"
                          views={['year', 'month', 'day']}
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>주문자</th>
                    <td>
                      <div className='flex sc'>
                        {/* [Dev] 기업회원일 경우에만 아이콘 표시 */}
                        <span className='badge ico-b mr8' />
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="orderer"
                          defaultValue={''}
                          render={(
                            {
                              field: { value, onChange, onBlur, ref },
                              fieldState: { error },
                            }
                          ) => (
                            <FormControl component="fieldset" >
                              <TextField
                                variant='outlined'
                                name="orderer"
                                placeholder="주문자"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '200px' }} />
                              <FormHelperText
                                sx={{
                                  color: 'error.main',
                                }}
                              >
                                {error?.message ?? ''}
                              </FormHelperText>
                            </FormControl>
                          )}
                        />  &nbsp;&nbsp;&nbsp;&nbsp; /  &nbsp;&nbsp;&nbsp;&nbsp; (
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="userId"
                          defaultValue={''}
                          render={(
                            {
                              field: { value, onChange, onBlur, ref },
                              fieldState: { error },
                            }
                          ) => (
                            <FormControl component="fieldset" >
                              <TextField
                                variant='outlined'
                                name="userId"
                                placeholder="주문자 ID"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '225px' }} />
                              <FormHelperText
                                sx={{
                                  color: 'error.main',
                                }}
                              >
                                {error?.message ?? ''}
                              </FormHelperText>
                            </FormControl>
                          )}
                        /> &nbsp;&nbsp;&nbsp;&nbsp;)
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>회사명</th>
                    <td>
                      <Controller
                        rules={{ required: true }}
                        control={control}
                        name="bizName"
                        defaultValue={''}
                        render={(
                          {
                            field: { value, onChange, onBlur, ref },
                            fieldState: { error },
                          }
                        ) => (
                          <FormControl component="fieldset" >
                            <TextField
                              variant='outlined'
                              name="bizName"
                              placeholder="회사명"
                              inputRef={ref}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                              error={Boolean(error)}
                              sx={{ width: '500px' }} />
                            <FormHelperText
                              sx={{
                                color: 'error.main',
                              }}
                            >
                              {error?.message ?? ''}
                            </FormHelperText>
                          </FormControl>
                        )}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope='row' className='vat'>
                      연락처 1.
                    </th>
                    <td>
                      <div className='form-wrap ss'>
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="phone1"
                          defaultValue={''}
                          render={(
                            {
                              field: { value, onChange, onBlur, ref },
                              fieldState: { error },
                            }
                          ) => (
                            <FormControl component="fieldset" >
                              <TextField
                                variant='outlined'
                                name="title"
                                placeholder="연락처 1"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '500px' }} />
                              <FormHelperText
                                sx={{
                                  color: 'error.main',
                                }}
                              >
                                {error?.message ?? ''}
                              </FormHelperText>
                            </FormControl>
                          )}
                        />
                        <Button variant='outlined' color='primary' size='small'>
                          문자 보내기
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row' className='vat'>
                      연락처 2.
                    </th>
                    <td>

                      <div className='form-wrap ss'>
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="phone2"
                          defaultValue={''}
                          render={(
                            {
                              field: { value, onChange, onBlur, ref },
                              fieldState: { error },
                            }
                          ) => (
                            <FormControl component="fieldset" >
                              <TextField
                                variant='outlined'
                                name="phone2"
                                placeholder="연락처 2"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '500px' }} />
                              <FormHelperText
                                sx={{
                                  color: 'error.main',
                                }}
                              >
                                {error?.message ?? ''}
                              </FormHelperText>
                            </FormControl>
                          )}
                        />
                        <Button variant='outlined' size='small' >
                          문자 보내기
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>이메일</th>
                    <td>
                      <div className='form-wrap ss'>
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="email"
                          defaultValue={''}
                          render={(
                            {
                              field: { value, onChange, onBlur, ref },
                              fieldState: { error },
                            }
                          ) => (
                            <FormControl component="fieldset" >
                              <TextField
                                type='text'
                                variant='outlined'
                                name="email"
                                placeholder="이메일"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '500px' }} />
                              <FormHelperText
                                sx={{
                                  color: 'error.main',
                                }}
                              >
                                {error?.message ?? ''}
                              </FormHelperText>
                            </FormControl>
                          )}
                        />
                        <Button variant='outlined' size='small' >
                          메일 보내기
                        </Button>

                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>누적주문</th>
                    <td>
                      <div className='form-wrap ss'>
                        <p>총 주문횟수 : &nbsp;&nbsp;&nbsp;&nbsp;

                          <Controller
                            rules={{ required: true }}
                            control={control}
                            name="orderCount"
                            defaultValue={''}
                            render={(
                              {
                                field: { value, onChange, onBlur, ref },
                                fieldState: { error },
                              }
                            ) => (
                              <FormControl component="fieldset" >
                                <TextField
                                  type='text'
                                  variant='outlined'
                                  name="orderCount"
                                  placeholder="총 주문횟수"
                                  inputRef={ref}
                                  value={value}
                                  onChange={onChange}
                                  onBlur={onBlur}
                                  error={Boolean(error)}
                                  sx={{ width: '100px' }} />
                                <FormHelperText
                                  sx={{
                                    color: 'error.main',
                                  }}
                                >
                                  {error?.message ?? ''}
                                </FormHelperText>
                              </FormControl>
                            )}
                          />
                          &nbsp;&nbsp;&nbsp;&nbsp; 회. &nbsp;&nbsp;&nbsp;&nbsp;
                          총 주문금액 : &nbsp;&nbsp;&nbsp;&nbsp;
                          <Controller
                            rules={{ required: true }}
                            control={control}
                            name="orderPrice"
                            defaultValue={''}
                            render={(
                              {
                                field: { value, onChange, onBlur, ref },
                                fieldState: { error },
                              }
                            ) => (
                              <FormControl component="fieldset" >
                                <TextField
                                  type='text'
                                  variant='outlined'
                                  name="title"
                                  placeholder="총 주문금액"
                                  inputRef={ref}
                                  value={value}
                                  onChange={onChange}
                                  onBlur={onBlur}
                                  error={Boolean(error)}
                                  sx={{ width: '200px' }} />
                                <FormHelperText
                                  sx={{
                                    color: 'error.main',
                                  }}
                                >
                                  {error?.message ?? ''}
                                </FormHelperText>
                              </FormControl>
                            )}
                          />
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          원 (배송완료 기준)</p>
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
                    <th scope='row'>받는 분</th>
                    <td>
                      <div className='form-wrap'>
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="receiver"
                          defaultValue={''}
                          render={(
                            {
                              field: { value, onChange, onBlur, ref },
                              fieldState: { error },
                            }
                          ) => (
                            <FormControl component="fieldset" >
                              <TextField
                                variant='outlined'
                                name="receiver"
                                placeholder="받는 분"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '500px' }} />
                              <FormHelperText
                                sx={{
                                  color: 'error.main',
                                }}
                              >
                                {error?.message ?? ''}
                              </FormHelperText>
                            </FormControl>
                          )}
                        />

                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th scope='row' className='vat'>
                      연락처 1.
                    </th>
                    <td>
                      <div className='form-wrap ss'>
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="phone3"
                          defaultValue={''}
                          render={(
                            {
                              field: { value, onChange, onBlur, ref },
                              fieldState: { error },
                            }
                          ) => (
                            <FormControl component="fieldset" >
                              <TextField
                                variant='outlined'
                                name="phone3"
                                placeholder="연락처 1"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '500px' }} />
                              <FormHelperText
                                sx={{
                                  color: 'error.main',
                                }}
                              >
                                {error?.message ?? ''}
                              </FormHelperText>
                            </FormControl>
                          )}
                        />
                        <Button variant='outlined' color='primary' size='small'>
                          문자 보내기
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row' className='vat'>
                      연락처 2.
                    </th>
                    <td>

                      <div className='form-wrap ss'>
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="phone4"
                          defaultValue={''}
                          render={(
                            {
                              field: { value, onChange, onBlur, ref },
                              fieldState: { error },
                            }
                          ) => (
                            <FormControl component="fieldset" >
                              <TextField
                                variant='outlined'
                                name="title"
                                placeholder="phone4"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '500px' }} />
                              <FormHelperText
                                sx={{
                                  color: 'error.main',
                                }}
                              >
                                {error?.message ?? ''}
                              </FormHelperText>
                            </FormControl>
                          )}
                        />
                        <Button variant='outlined' size='small' >
                          문자 보내기
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr >
                    <th scope='row' className='vat'>
                      받는 주소
                    </th>
                    <td>
                      <div className='form-group'>
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="zip"
                          defaultValue={''}
                          render={(
                            {
                              field: { value, onChange, onBlur, ref },
                              fieldState: { error },
                            }
                          ) => (
                            <FormControl component="fieldset" >
                              <TextField
                                variant='outlined'
                                name="zip"
                                placeholder="우편번호"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '300px' }} />
                              <FormHelperText
                                sx={{
                                  color: 'error.main',
                                }}
                              >
                                {error?.message ?? ''}
                              </FormHelperText>
                            </FormControl>
                          )}
                        />

                        <Button size='small' variant='outlined' color='primary'>
                          우편번호 검색
                        </Button>
                      </div>
                      <div className='form-group'>

                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="sido"
                          defaultValue={''}
                          render={(
                            {
                              field: { value, onChange, onBlur, ref },
                              fieldState: { error },
                            }
                          ) => (
                            <FormControl component="fieldset" >
                              <TextField
                                variant='outlined'
                                name="sido"
                                placeholder="시.도.구.군"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '500px' }} />
                              <FormHelperText
                                sx={{
                                  color: 'error.main',
                                }}
                              >
                                {error?.message ?? ''}
                              </FormHelperText>
                            </FormControl>
                          )}
                        />
                      </div>
                      <div>
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="dongho"
                          defaultValue={''}
                          render={(
                            {
                              field: { value, onChange, onBlur, ref },
                              fieldState: { error },
                            }
                          ) => (
                            <FormControl component="fieldset" >
                              <TextField
                                variant='outlined'
                                name="dongho"
                                placeholder="상세주소"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                error={Boolean(error)}
                                sx={{ width: '500px' }} />
                              <FormHelperText
                                sx={{
                                  color: 'error.main',
                                }}
                              >
                                {error?.message ?? ''}
                              </FormHelperText>
                            </FormControl>
                          )}
                        />

                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>배송 메시지</th>
                    <td>
                      <div className='form-group'>

                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="message"
                          defaultValue={'etc'}
                          render={(
                            { field }
                          ) => (
                            <Select sx={{ width: '500px' }} defaultValue='0'>
                              <MenuItem value='all'>배송기사에게 전달되는 메세지입니다.</MenuItem>
                            </Select>
                          )} />
                        <Button variant='outlined' size='small' className='icon'>
                          {/* <Add /> */}
                          <i className='add' />
                          직접입력
                        </Button>
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
                    <th scope='row'>결제방법</th>
                    <td>
                      <div className='form-group'>

                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="payMethod"
                          defaultValue={''}
                          render={(
                            {
                              field: { value, onChange, onBlur, ref },
                              fieldState: { error },
                            }
                          ) => (
                            <FormControl component="fieldset" >
                              <TextField
                                variant='outlined'
                                name="payMethod"
                                placeholder="무통장입금"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                error={Boolean(error)}
                                sx={{ width: '150px' }} />
                              <FormHelperText
                                sx={{
                                  color: 'error.main',
                                }}
                              >
                                {error?.message ?? ''}
                              </FormHelperText>
                            </FormControl>
                          )}
                        />

                        【 &nbsp;&nbsp;&nbsp;&nbsp;


                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="bank"
                          defaultValue={''}
                          render={(
                            {
                              field: { value, onChange, onBlur, ref },
                              fieldState: { error },
                            }
                          ) => (
                            <FormControl component="fieldset" >
                              <TextField
                                variant='outlined'
                                name="bank"
                                placeholder="은행"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                error={Boolean(error)}
                                sx={{ width: '140px' }} />
                              <FormHelperText
                                sx={{
                                  color: 'error.main',
                                }}
                              >
                                {error?.message ?? ''}
                              </FormHelperText>
                            </FormControl>
                          )}
                        />


                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="accountNum"
                          defaultValue={''}
                          render={(
                            {
                              field: { value, onChange, onBlur, ref },
                              fieldState: { error },
                            }
                          ) => (
                            <FormControl component="fieldset" >
                              <TextField
                                variant='outlined'
                                name="accountNum"
                                placeholder="계좌번호"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                error={Boolean(error)}
                                sx={{ width: '250px' }} />
                              <FormHelperText
                                sx={{
                                  color: 'error.main',
                                }}
                              >
                                {error?.message ?? ''}
                              </FormHelperText>
                            </FormControl>
                          )}
                        /> &nbsp;&nbsp;&nbsp;&nbsp;
  】
</div><div className='form-group'><p>
                        (예금주 :  &nbsp;&nbsp;&nbsp;&nbsp;

                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="owner"
                          defaultValue={''}
                          render={(
                            {
                              field: { value, onChange, onBlur, ref },
                              fieldState: { error },
                            }
                          ) => (
                            <FormControl component="fieldset" >
                              <TextField
                                variant='outlined'
                                name="owner"
                                placeholder="예금주"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                error={Boolean(error)}
                                sx={{ width: '150px' }} />
                              <FormHelperText
                                sx={{
                                  color: 'error.main',
                                }}
                              >
                                {error?.message ?? ''}
                              </FormHelperText>
                            </FormControl>
                          )}
                        />
 &nbsp;&nbsp;&nbsp;&nbsp;

                        )</p>
                      </div>

                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>입금자</th>
                    <td>
                      <div className='form-wrap'>

                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="depositor"
                          defaultValue={''}
                          render={(
                            {
                              field: { value, onChange, onBlur, ref },
                              fieldState: { error },
                            }
                          ) => (
                            <FormControl component="fieldset" >
                              <TextField
                                variant='outlined'
                                name="depositor"
                                placeholder="입금자"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                error={Boolean(error)}
                                sx={{ width: '500px' }} />
                              <FormHelperText
                                sx={{
                                  color: 'error.main',
                                }}
                              >
                                {error?.message ?? ''}
                              </FormHelperText>
                            </FormControl>
                          )}
                        />


                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>결제상태</th>
                    <td>
                      <span className='point'>
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="payStatus"
                          defaultValue={''}
                          render={(
                            {
                              field: { value, onChange, onBlur, ref },
                              fieldState: { error },
                            }
                          ) => (
                            <FormControl component="fieldset" >
                              <TextField
                                variant='outlined'
                                name="payStatus"
                                placeholder="결제상태"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                error={Boolean(error)}
                                sx={{ width: '500px' }} />
                              <FormHelperText
                                sx={{
                                  color: 'error.main',
                                }}
                              >
                                {error?.message ?? ''}
                              </FormHelperText>
                            </FormControl>
                          )}
                        />

                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>현금영수증</th>
                    <td>
                      <div className='form-wrap'>
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="cashReceipt"
                          defaultValue={''}
                          render={(
                            {
                              field: { value, onChange, onBlur, ref },
                              fieldState: { error },
                            }
                          ) => (
                            <FormControl component="fieldset" >
                              <TextField
                                variant='outlined'
                                name="cashReceipt"
                                placeholder="현금영수증"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                error={Boolean(error)}
                                sx={{ width: '500px' }} />
                              <FormHelperText
                                sx={{
                                  color: 'error.main',
                                }}
                              >
                                {error?.message ?? ''}
                              </FormHelperText>
                            </FormControl>
                          )}
                        />
                        <div className='btn-group'>
                          <Button variant='outlined'  size='small'>
                            정보 상세
                          </Button>
                          <Button variant='outlined'  size='small'>
                            정보 수정
                          </Button>
                          <Button variant='outlined'  size='small'>
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
                      <span className='point'>
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="isShipDone"
                          defaultValue={''}
                          render={(
                            {
                              field: { value, onChange, onBlur, ref },
                              fieldState: { error },
                            }
                          ) => (
                            <FormControl component="fieldset" >
                              <TextField
                                variant='outlined'
                                name="isShipDone"
                                placeholder="배송처리여부"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                error={Boolean(error)}
                                sx={{ width: '500px' }} />
                              <FormHelperText
                                sx={{
                                  color: 'error.main',
                                }}
                              >
                                {error?.message ?? ''}
                              </FormHelperText>
                            </FormControl>
                          )}
                        />

                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>송장번호입력</th>
                    <td>
                    <div className='form-wrap'>
                      <Controller
                        rules={{ required: true }}
                        control={control}
                        name="invoiceKind"
                        defaultValue={'etc'}
                        render={(
                          { field }
                        ) => (
                          <Select defaultValue='all' sx={{ width: 160 }} name='invoiceKind'>
                            <MenuItem value='all'> 없음</MenuItem>
                          </Select>
                        )} />

<Controller
                          rules={{ required: true }}
                          control={control}
                          name="invoiceNum"
                          defaultValue={''}
                          render={(
                            {
                              field: { value, onChange, onBlur, ref },
                              fieldState: { error },
                            }
                          ) => (
                            <FormControl component="fieldset" >
                              <TextField
                                variant='outlined'
                                name="invoiceNum"
                                placeholder="송장번호"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                error={Boolean(error)}
                                sx={{ width: '330px' }} />
                              <FormHelperText
                                sx={{
                                  color: 'error.main',
                                }}
                              >
                                {error?.message ?? ''}
                              </FormHelperText>
                            </FormControl>
                          )}
                        />
                      <Button variant='outlined'  size='small'>
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
                    <Controller
                          rules={{ required: true }}
                          control={control}
                          name="orderLog"
                          defaultValue={''}
                          render={(
                            {
                              field: { value, onChange, onBlur, ref },
                              fieldState: { error },
                            }
                          ) => (
                            <FormControl component="fieldset" >
 <textarea
          value={''}
          name={'orderLog'}
          onChange={()=> alert()}
          rows={10}
          cols={80}
          placeholder=' 배송으로 변경 : 로젠택배 (35418489470) (2023/05/01 16:19)
          입금으로 변경 (2023/05/01 16:16)
          주문서 생성 (2023/05/01 20:41)'
        />
                            </FormControl>
                          )}
                        />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

        </Card>
      </div>
      <div className='btn-align'>
        <div className='center form-wrap'>

          <Link href='/orders/order'>
            <Button variant='outlined' size='medium'>
              목록
            </Button></Link>
            <Button variant='contained' size='medium' type='submit'>
              등록
            </Button>
        </div>
      </div>
      </form>
    </>
  )
}
export default OrderAddPage;


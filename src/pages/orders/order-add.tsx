import * as React from 'react'
import { useState } from 'react'
import type { NextPage } from "next"
import { useAppDispatch, useAppSelector } from 'custom-hooks'

import {
  Button,
  Card,
  FormControl,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormHelperText
} from '@mui/material'

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from 'dayjs';
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { useForm, SubmitHandler, Controller, } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";



const OrderAddPage: NextPage = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'));

  const Zoo: any = z.object({
    title: z.string().nonempty('제목은 필수값입니다'),
    isPosted: z.string(),
    expose: z.string(),
    isPinned: z.string()
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
      title: "",
      isPosted: "Y",
      expose: "all",
      isPinned: "N"

    },
    resolver: zodResolver(Zoo), // Useful to check TypeScript regressions
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log('공지사항 전송 테스트')

    console.log('1--------\n', JSON.stringify(data))


    const isPinned = data.isPinned

    console.log('isPinned : ', isPinned)

    const expose = data.expose

    console.log('expose : ', expose)

    const isPosted = data.isPosted

    console.log('isPosted : ', isPosted)

    const title = data.title

    console.log('title : ', title)



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

    // dispatch(addNotice(notice))
    // alert(' 공지사항 등록 : ')

  }



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
              <span className='order-num'>
                <Controller
                  rules={{ required: true }}
                  control={control}
                  name="title"
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
                  name="title"
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
                          openTo="year"
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
                          name="title"
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
                                placeholder="주문자"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '472px' }} />
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
                    <th scope='row'>회사명</th>
                    <td>
                      <Controller
                        rules={{ required: true }}
                        control={control}
                        name="title"
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
                      <Controller
                        rules={{ required: true }}
                        control={control}
                        name="title"
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

                    </td>
                  </tr>
                  <tr>
                    <th scope='row' className='vat'>
                      연락처 2.
                    </th>
                    <td>

                       
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="title"
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
                                placeholder="제목을 입력하세요"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '720px' }} />
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
                        <Button variant='outlined' color='info' size='small'>
                          수정
                        </Button>

                    </td>
                  </tr>
                  <tr>
                    <th>이메일</th>
                    <td>
                      <div className='form-wrap ss'>
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="title"
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
                                placeholder="제목을 입력하세요"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '720px' }} />
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
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="title"
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
                                placeholder="제목을 입력하세요"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '720px' }} />
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
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="title"
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
                                placeholder="제목을 입력하세요"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '720px' }} />
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
                        <label htmlFor='' className='label ml16'>
                          연락처 2.
                        </label>
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="title"
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
                                placeholder="제목을 입력하세요"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '720px' }} />
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
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="title"
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
                                placeholder="제목을 입력하세요"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '720px' }} />
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
                        <span className='dash'>-</span>
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="title"
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
                                placeholder="제목을 입력하세요"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                                sx={{ width: '720px' }} />
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
                          name="title"
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
                                placeholder="제목을 입력하세요"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                error={Boolean(error)}
                                sx={{ width: '720px' }} />
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
                        <Button variant='outlined' color='info' size='small'>
                          수정
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>배송 메세지</th>
                    <td>
                      <Controller
                        rules={{ required: true }}
                        control={control}
                        name="kind"
                        defaultValue={'etc'}
                        render={(
                          { field }
                        ) => (
                          <Select sx={{ width: '11.25rem' }} defaultValue='0'>
                            <MenuItem value='all'>배송기사에게 전달되는 메세지입니다.</MenuItem>
                          </Select>
                        )} />
                      <Button variant='outlined' size='small' color='info' className='icon'>
                        {/* <Add /> */}
                        <i className='add' />
                        적 용
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
                    <td>

                      <Controller
                        rules={{ required: true }}
                        control={control}
                        name="title"
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
                              placeholder="제목을 입력하세요"
                              inputRef={ref}
                              value={value}
                              onChange={onChange}
                              error={Boolean(error)}
                              sx={{ width: '720px' }} />
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

                      【


                      <Controller
                        rules={{ required: true }}
                        control={control}
                        name="title"
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
                              placeholder="제목을 입력하세요"
                              inputRef={ref}
                              value={value}
                              onChange={onChange}
                              error={Boolean(error)}
                              sx={{ width: '720px' }} />
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
                        name="title"
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
                              placeholder="제목을 입력하세요"
                              inputRef={ref}
                              value={value}
                              onChange={onChange}
                              error={Boolean(error)}
                              sx={{ width: '720px' }} />
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


                      (예금주:

                      <Controller
                        rules={{ required: true }}
                        control={control}
                        name="title"
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
                              placeholder="제목을 입력하세요"
                              inputRef={ref}
                              value={value}
                              onChange={onChange}
                              error={Boolean(error)}
                              sx={{ width: '720px' }} />
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


                      ) 】</td>
                  </tr>
                  <tr>
                    <th scope='row'>입금자</th>
                    <td>
                      <div className='form-wrap'>

                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="title"
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
                                placeholder="제목을 입력하세요"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                error={Boolean(error)}
                                sx={{ width: '720px' }} />
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

                        <Button variant='outlined' color='info' size='small'>
                          수정
                        </Button>
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
                          name="title"
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
                                placeholder="제목을 입력하세요"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                error={Boolean(error)}
                                sx={{ width: '720px' }} />
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
                          name="title"
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
                                placeholder="제목을 입력하세요"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                error={Boolean(error)}
                                sx={{ width: '720px' }} />
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
                      <span className='point'>
                        <Controller
                          rules={{ required: true }}
                          control={control}
                          name="title"
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
                                placeholder="제목을 입력하세요"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                error={Boolean(error)}
                                sx={{ width: '720px' }} />
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
                      <Controller
                        rules={{ required: true }}
                        control={control}
                        name="kind"
                        defaultValue={'etc'}
                        render={(
                          { field }
                        ) => (
                          <Select defaultValue='all' sx={{ width: 160 }}>
                            <MenuItem value='all'>
                              <TextField className='x-small' />
                            </MenuItem>
                          </Select>
                        )} />

                      <TextField className='medium' value='' />
                      <Button variant='outlined' color='info' size='small'>
                        배송추적
                      </Button>
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


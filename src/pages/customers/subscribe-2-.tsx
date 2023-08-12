import React from 'react'
import { Box, Button, Card, Checkbox, MenuItem, Select, Table, TableBody, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'custom-hooks'
// import { updateFirm, updateData } from 'store/member'

import DaumPost from 'views/forms/form-elements/postcode/DaumPost'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import { Icon } from '@iconify/react'

import { getSubscribesByUser } from 'app/customers/org/subscribe-org/subscribe-thunk'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { selectCustomerById } from 'app/customers/org/customer-org/customer-selector'
import { CustomerVo } from 'app/customers/mo/customer-mo/customer-vo'
import { FormAlert } from 'app/valves/temp/alert-temp/form-alert'

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";


export function Subscribe2() {
 
  //** 주키퍼 등록 */
  const zookeeperSchema = z
    .object({
      p1: z
        .string()
        .nonempty("사용자 이름")
      ,
      p2: z
        .string()
        .nonempty("아이디를 입력해주세요.")
        .regex(
          /^[a-z0-9]{4,30}$/,
          "영문 소문자 또는 영문+숫자 조합 4~30자리를 입력해주세요."
        ),
        p3: z.string(),
        p4: z.string(),
        u1: z.string(),
      pw: z
        .string()
        .nonempty("비밀번호를 입력해주세요.")
        .regex(
          /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
          "영문+숫자+특수문자(! @ # $ % & * ?) 조합 8~15자리를 입력해주세요."
        ),
      pw2: z.string().nonempty("비밀번호를 다시 입력해주세요."),
      a1: z.string(),
      a2: z.string(),
      a3: z.string(),
      a4: z.string(),
      a5: z.string(),
      a6: z.string(),
      m1: z.string(),
    })
    .refine((data) => data.pw === data.pw2, {
      path: ["passwordCheck"],
      message: "비밀번호가 일치하지 않습니다.",
    });
  type zookeeperType = z.infer<typeof zookeeperSchema>;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<zookeeperType>({
    resolver: zodResolver(zookeeperSchema),
  });

  const zookeeperChange = e => {
    e.preventDefault()
    const formData = e.target

    // const req_data = {
    //   user_id: customer.user_id,
    //   is_firm: formData.is_firm.value
    // }

    // const update_isFirm = dispatch(updateFirm(req_data))
    //setFirmn({ ...customer, is_firm: update_isFirm.arg.is_firm })
  }

  const zookeeperSubmit = data => {
    // const user_id = customer.user_id
    // const req_data = { ...data, user_id }

    // const change = dispatch(updateData(req_data))
    //setSubscription({ ...customer, firm_ceo: change.arg.firm_ceo })
  }


  /*
    const p1 = person.name
  const p2 = person.homePhone
  const p3 = person.phone
  const p4 = person.email
  const u1 = user.userId
  const a1 = adobe.zip
  const a2 = adobe.addr 
  const a3 = adobe.extraAddr
  const a4 = adobe.shipZip
  const a5 = adobe.shipAddr 
  const a6 = adobe.shipExtraAddr
  const m1 = memo.content
  const pw = ''
  const pw2 = ''
  */
  return (
    <>
      <form>


        <Box
          sx={{ position: 'relative', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: '1rem' }}
        >
          <Typography variant='body1' sx={{ position: 'absolute', right: '707px' }}>
            개인정보
          </Typography>
          <Button size='small' color='primary' variant='outlined'>
            취소
          </Button>
          <Button size='small' color='primary' variant='contained' sx={{ ml: 2, minWidth: '5rem' }}>
            저장
          </Button>
        </Box>
        <Card>
          <table>
            <colgroup>
              <col width='20%' />
              <col width='80%' />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>
                  <Typography variant='body1'>이름</Typography>
                </th>
                <td>
                  <TextField size='small' sx={{ ml: 2 }} {...register('p1')}
                  // placeholder={subscription.name}
                  />
                  <FormControlLabel value='end' control={<Checkbox />} label='이름변경' labelPlacement='end' />
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <Typography variant='body1'>아이디</Typography>
                </th>
                <td>
                  <Typography>{'아이디자리'}</Typography>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <Typography variant='body1'>새 비밀번호</Typography>
                </th>
                <td>
                  <TextField size='small' sx={{ ml: 2 }} {...register('pw')}/>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <Typography variant='body1'> 새 비밀번호 확인 </Typography>
                </th>
                <td>
                  <TextField size='small' sx={{ ml: 2 }} {...register('pw2')} />
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <Typography variant='body1'>주소</Typography>
                </th>
                <td>
                  <TextField size='small' sx={{ ml: 2 }} {...register('a1')}/>
                  -<TextField size='small' sx={{ ml: 2 }} {...register('a1')}/>
                  <Button variant='outlined' color='primary'>
                    우편번호 검색
                  </Button>
                  <TextField size='small' sx={{ ml: 2 }} {...register('a2')}/>
                  <TextField size='small' sx={{ ml: 2 }} {...register('a3')}/>
                </td>
              </tr>
              <tr>
                <th></th>
                <td>
                  <TextField {...register('p3')} size='small' sx={{ ml: 2 }} />
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <Typography variant='body1'>기본배송지</Typography>
                </th>
                <td>
                  <TextField size='small' sx={{ ml: 2 }} {...register('a4')}/>
                  - <TextField size='small' sx={{ ml: 2 }} {...register('a4')}/>
                  <Button variant='outlined' color='primary'>
                    우편번호 검색
                  </Button>
                  <TextField size='small' sx={{ ml: 2 }} {...register('a5')}/>
                  <TextField size='small' sx={{ ml: 2 }} {...register('a6')}/>
                  <Button variant='contained' color='primary'>
                    + 배송지 목록
                  </Button>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <Typography variant='body1'>집 전화번호</Typography>
                </th>
                <td>
                  <TextField size='small' sx={{ ml: 2 }} {...register('p2')}/>
                  -<TextField size='small' sx={{ ml: 2 }} {...register('p2')}/>
                  -<TextField size='small' sx={{ ml: 2 }} {...register('p2')}/>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <Typography variant='body1'>휴대 전화번호</Typography>
                </th>
                <td>
                  <TextField size='small' sx={{ ml: 2 }} {...register('p3')}/>
                  -<TextField size='small' sx={{ ml: 2 }} {...register('p3')}/>
                  -<TextField size='small' sx={{ ml: 2 }} {...register('p3')}/>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <Typography variant='body1'>이메일</Typography>
                </th>
                <td>
                  <TextField size='small' sx={{ ml: 2 }}  {...register('p4')}/>
                  @<TextField size='small' sx={{ ml: 2 }} {...register('p4')}/>
                  <Button variant='contained' color='primary'>
                    중복확인
                  </Button>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <Typography variant='body1'>관리자 메모(고객노출 안됨)</Typography>
                </th>
                <td>
                  <TextField {...register('m1')} rows={5} multiline variant='outlined' />
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </form>
    </>
  )

}

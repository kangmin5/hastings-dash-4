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

import {getSubscribesByUser} from 'app/customers/org/subscribe-org/subscribe-thunk'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { selectCustomerById } from 'app/customers/org/customer-org/customer-selector'
import { CustomerVo } from 'app/customers/mo/customer-mo/customer-vo'
import { FormAlert } from 'app/valves/temp/alert-temp/form-alert'

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Subscribe2 } from 'pages/customers/subscribe-2-'




export default function SubscribePage({
  person, user, adobe, funnel, work, mobile}) {
 

  const dispatch = useAppDispatch()
  const [pearShow, setPearShow] = React.useState<boolean>(false) /** 배송지 */

  const [subscribe, setSubscribe] = React.useState(null)
  const [modalOpen, setModalOpen] = React.useState(false)
  const [daum, setDaum] = React.useState(<></>)
  const [modalWidth, setModalWidth] = React.useState('')






  const zooSchema = z
  .object({
    w1: z
      .string()
      .nonempty("이메일을 입력해주세요.")
      .email("이메일 형식을 입력해주세요."),
    w2: z
      .string()
      .nonempty("아이디를 입력해주세요.")
      .regex(
        /^[a-z0-9]{4,30}$/,
        "영문 소문자 또는 영문+숫자 조합 4~30자리를 입력해주세요."
      ),
    w3: z
      .string()
      .nonempty("비밀번호를 입력해주세요.")
      .regex(
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
        "영문+숫자+특수문자(! @ # $ % & * ?) 조합 8~15자리를 입력해주세요."
      ),
    w4: z.string().nonempty("비밀번호를 다시 입력해주세요."),
    w5: z
      .string()
      .regex(/^[a-z]{0,}$/, "추천코드는 소문자로 입력 가능합니다")
      .optional(),
    w6: z.string(),
    a1: z.string(),
    a2: z.string(),
    a3: z.string(),
    a4: z.string(),
    a5: z.string(),
    a6: z.string(),

  })

  type zooType = z.infer<typeof zooSchema>;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<zooType>({
    resolver: zodResolver(zooSchema),
  });

  const zooChange = e => {
    e.preventDefault()
    const formData = e.target

    // const req_data = {
    //   user_id: customer.user_id,
    //   is_firm: formData.is_firm.value
    // }

    // const update_isFirm = dispatch(updateFirm(req_data))
    //setFirmn({ ...customer, is_firm: update_isFirm.arg.is_firm })
  }

  const zooSubmit = data => {
    // const user_id = customer.user_id
    // const req_data = { ...data, user_id }

   // const change = dispatch(updateData(req_data))
    //setSubscription({ ...customer, firm_ceo: change.arg.firm_ceo })
  }




  

  // ** modal
  const openModal = () => {
    setDaum(
      <>
        <DaumPost
          onClose={(data: any) => {
            setValue('a1', data)
            console.log('다음포스트 주소값: ', JSON.stringify(data))
            closeModal()
          }}
        />
      </>
    )
    setModalOpen(true)
    setModalWidth('md')
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <Grid container direction='column' justifyContent='flex-start' alignItems='center'>
      <Box sx={{ width: '100%' }}>
        <Typography>회원형태/전환</Typography>
        <Card>
          <form id='updateFirm' onSubmit={()=>alert('전환')}>
            <div className='search-box'>
              <Table>
                <caption>회원형태/전환 수정</caption>
                <colgroup>
                  <col width='20%' />
                  <col width='20%' />
                  <col width='20%' />
                  <col width='40%' />
                </colgroup>
                <TableBody>
                  <tr>
                    <th scope='row'>
                      <Typography variant='body1'>회원형태</Typography>
                    </th>
                    <td>
                    
          <Typography variant='body1'>{(work.hasBizId === '' ) ?'개인회원':'기업회원'}</Typography> 
          
                    </td>
                    <th scope='row'>
                      <Typography variant='body1'>회원전환</Typography>
                    </th>
                    <td>
                      <RadioGroup
                        row
                        aria-label='position'
                        name='is_firm'
                        defaultValue={work.hasBizId === '' ? '0' : '1'}
                      >
                        <FormControlLabel value='0' label='개인회원' labelPlacement='end' control={<Radio />} />
                        <FormControlLabel value='1' control={<Radio />} label='기업회원' />

                        <FormAlert
                          hidden
                          // form='updateFirm' 새로고침 이후 처음으로 돌아감. 주석처리
                          content='회원전환을 위해 회원정보 입력폼을 변경합니다.
                                    변경된 입력폼의 필수값 확인 및 추가 입력 후
                                    페이지 하단의 [수정] 버튼을 통해 회원정보를
                                    저장하시면 회원전환이 완료됩니다.'
                          label='변경'
                        /> 
                      </RadioGroup>
                    </td>
                  </tr>
                </TableBody>
              </Table>
            </div>
          </form>
        </Card>

        {(work.hasBizId !== '' ) &&
        
        <>
        
        
      

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', mt: '1rem' }}>
            <Typography variant='body1'>기업정보</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: '1rem' }}>
            <Button size='small' color='primary' variant='outlined'>
              취소
            </Button>
            <Button
              type='submit'
              form='updateForm'
              size='small'
              color='primary'
              variant='contained'
              sx={{ ml: 2, minWidth: '5rem' }}
            >
              저장
            </Button>
          </Box>
        </Box>

          <Card>
            <table>
              <caption>기업정보 테이블</caption>
              <colgroup>
                <col width='20%' />
                <col width='80%' />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>
                    <Typography variant='body1'>회사명</Typography>
                  </th>
                  <td>
                    <TextField
                      size='small'
                      sx={{ ml: 2 }}
                      {...register('w1')}
                      placeholder={work.hasBizId}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    <Typography variant='body1'>대표자명</Typography>
                  </th>
                  <td>
                    <TextField
                      size='small'
                      sx={{ ml: 2 }}
                      {...register('w2')}
                      placeholder={work.ceo}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    <Typography variant='body1'>사업자번호</Typography>
                  </th>
                  <td>
                    <TextField size='small' sx={{ ml: 2 }} {...register('w3')} placeholder={work.bizNo} /> 
                    - <TextField size='small' sx={{ ml: 2 }} {...register('w3')} placeholder={work.bizNo} />
                    - <TextField size='small' sx={{ ml: 2 }} {...register('w3')} placeholder={work.bizNo} />
                    <Button variant='outlined' color='primary'>
                      중복가입 확인
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    <Typography variant='body1'>법인등록번호</Typography>
                  </th>
                  <td>
                    <TextField size='small' sx={{ ml: 2 }}  {...register('w4')} placeholder={work.corpNo} /> -
                    <TextField size='small' sx={{ ml: 2 }}  {...register('w4')} placeholder={work.corpNo} />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    <Typography variant='body1'>업태</Typography>
                  </th>
                  <td>
                    <TextField
                      size='small'
                      sx={{ ml: 2 }}
                      {...register('w5')}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    <Typography variant='body1'>업종</Typography>
                  </th>
                  <td>
                    <TextField
                      size='small'
                      sx={{ ml: 2 }}
                      {...register('w6')}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    <Typography variant='body1'>회사주소</Typography>
                  </th>
                  <td>
                    <TextField size='small' sx={{ ml: 2 }} />
                    <TextField size='small' sx={{ ml: 2 }} />
                    <Button variant='outlined' color='primary' onClick={openModal}>
                      우편번호 검색
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <td>
                    <TextField {...register('a2')} size='small' sx={{ ml: 2 }} />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    <Typography variant='body1'>기본배송지</Typography>
                  </th>
                  <td>
                    <TextField size='small' sx={{ ml: 2 }} />
                    <TextField size='small' sx={{ ml: 2 }} />
                    <Button variant='outlined' color='primary'>
                      우편번호 검색
                    </Button>
                    <Button variant='contained' color='primary'>
                      + 배송지 목록
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <td>
                    <TextField {...register('a5')} size='small' sx={{ ml: 2 }} />
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>



</>}  {/* 개인회원은 아래 부분만 노출됨*/}

<>


<Subscribe2 /> 

        </>


      </Box>
      <Dialog
       fullWidth
       open={pearShow}
       maxWidth='md'
       scroll='body'
       onClose={() => setPearShow(false)}
     //  TransitionComponent={Transition}
       onBackdropClick={() => setPearShow(false)}
      >
        <DialogContent
          sx={{
            position: 'relative',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            py: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
<IconButton
            size='small'
            onClick={() => setPearShow(false)}
            sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
          >
            <Icon icon='mdi:close' />
          </IconButton>

          <Box sx={{ mb: 4, textAlign: 'top' }}>
            <Typography variant='h5' sx={{ mb: 3 }}>
              배송지 목록
            </Typography>
          
          </Box>
         



        </DialogContent>

      </Dialog>
    </Grid>


    
  )
}


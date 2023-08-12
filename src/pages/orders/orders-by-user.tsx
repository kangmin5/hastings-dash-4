/**
 * ===============================================
 * DATE             AUTHOR          NOTE
 * -----------------------------------------------
 * Mar 23 2023     Paris   Create Board Component DepictSubscription.jsx
 */

import { Box, Button, Card, Checkbox, MenuItem, Select, Table, TableBody, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'custom-hooks'
// import { updateFirm, updateData } from 'store/member'
import { useEffect, useState } from 'react'
import DaumPost from 'views/forms/form-elements/postcode/DaumPost'
// import { Modal, FormAlert } from './modal'
import { Modal } from '../customers/modal'

import {getOrdersByUser} from 'app/orders/org/order-org/order-thunk'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { selectCustomerById } from 'app/customers/org/customer-org/customer-selector'


const schema = yup.object().shape({
  // ** 추후....
})

export  function OrdersByUserPage(props) {
  // ** Hooks
  const dispatch = useAppDispatch()
  const c1 = useSelector(selectCustomerById)

  // const [firm, setFirmn] = useState(customer)
  const [subscribe, setSubscribe] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [content, setContent] = useState(<></>)
  const [modalWidth, setModalWidth] = useState('')

  useEffect(() => {
    console.log('useEffect CustomerSubscribe : ', JSON.stringify(c1))
    dispatch(getOrdersByUser(c1))
  }, [c1, dispatch])

  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm({
    resolver: yupResolver(schema)
  })

  // ** is_firm 변경
  const updateIsFirm = e => {
    e.preventDefault()
    const formData = e.target

    // const req_data = {
    //   user_id: customer.user_id,
    //   is_firm: formData.is_firm.value
    // }

    // const update_isFirm = dispatch(updateFirm(req_data))
    //setFirmn({ ...customer, is_firm: update_isFirm.arg.is_firm })
  }

  // ** 기업/개인 data 변경
  const onSubmit = data => {
    // const user_id = customer.user_id
    // const req_data = { ...data, user_id }

   // const change = dispatch(updateData(req_data))
    //setSubscription({ ...customer, firm_ceo: change.arg.firm_ceo })
  }

  // ** modal
  const openModal = () => {
    setContent(
      <>
        <DaumPost
          onClose={data => {
            setValue('firm_address', data)
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
          <form id='updateFirm' onSubmit={e => updateIsFirm(e)}>
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
                      {/* <Typography variant='body1'>{firm.is_firm == '0' ? '개인회원' : '기업회원'}</Typography> */}
                    </td>
                    <th scope='row'>
                      <Typography variant='body1'>회원전환</Typography>
                    </th>
                    <td>
                      <RadioGroup
                        row
                        aria-label='position'
                        name='is_firm'
                        // defaultValue={firm.is_firm == '0' ? '0' : '1'}
                      >
                        <FormControlLabel value='0' label='개인회원' labelPlacement='end' control={<Radio />} />
                        <FormControlLabel value='1' control={<Radio />} label='기업회원' />

                        {/* <FormAlert
                          hidden
                          form='updateFirm'
                          content='회원전환을 위해 회원정보 입력폼을 변경합니다.
                                    변경된 입력폼의 필수값 확인 및 추가 입력 후
                                    페이지 하단의 [수정] 버튼을 통해 회원정보를
                                    저장하시면 회원전환이 완료됩니다.'
                          label='변경'
                        /> */}
                      </RadioGroup>
                    </td>
                  </tr>
                </TableBody>
              </Table>
            </div>
          </form>
        </Card>

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
        <form id='updateForm' onSubmit={handleSubmit(onSubmit)}>
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
                      {...register('firm_name')}
                      // placeholder={subscription.firm_name}
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
                      {...register('firm_ceo')}
                      // placeholder={subscription.firm_ceo}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    <Typography variant='body1'>사업자번호</Typography>
                  </th>
                  <td>
                    <TextField size='small' sx={{ ml: 2 }} {...register('buisnessNum')} placeholder={'buisnessNum'} /> -
                    <TextField size='small' sx={{ ml: 2 }} {...register('buisnessNum2')} placeholder={'buisnessNum2'} />
                    -
                    <TextField size='small' sx={{ ml: 2 }} {...register('buisnessNum3')} placeholder={'buisnessNum3'} />
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
                    <TextField size='small' sx={{ ml: 2 }} /> -
                    <TextField size='small' sx={{ ml: 2 }} />
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
                      {...register('buisness_type')}
                      // placeholder={subscription.buisness_type}
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
                      {...register('buisness_item')}
                      // placeholder={subscription.buisness_item}
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
                    <TextField {...register('firm_address')} size='small' sx={{ ml: 2 }} />
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
                    <TextField {...register('address')} size='small' sx={{ ml: 2 }} />
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
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
                    <TextField size='small' sx={{ ml: 2 }} {...register('name')}
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
                    <Typography></Typography>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    <Typography variant='body1'>새 비밀번호</Typography>
                  </th>
                  <td>
                    <TextField size='small' sx={{ ml: 2 }} />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    <Typography {...register('password')} variant='body1'>
                      새 비밀번호 확인
                    </Typography>
                  </th>
                  <td>
                    <TextField size='small' sx={{ ml: 2 }} />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    <Typography variant='body1'>회사주소</Typography>
                  </th>
                  <td>
                    <TextField size='small' sx={{ ml: 2 }} />
                    <TextField size='small' sx={{ ml: 2 }} />
                    <Button variant='outlined' color='primary'>
                      우편번호 검색
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <td>
                    <TextField {...register('firm_address')} size='small' sx={{ ml: 2 }} />
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
                  <th scope='row'></th>
                  <td>
                    <TextField {...register('address')} size='small' sx={{ ml: 2 }} />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    <Typography variant='body1'>전화번호</Typography>
                  </th>
                  <td>
                    <TextField size='small' sx={{ ml: 2 }} />-
                    <TextField size='small' sx={{ ml: 2 }} />-
                    <TextField size='small' sx={{ ml: 2 }} />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    <Typography variant='body1'>휴대전화번호</Typography>
                  </th>
                  <td>
                    <TextField size='small' sx={{ ml: 2 }} />-
                    <TextField size='small' sx={{ ml: 2 }} />-
                    <TextField size='small' sx={{ ml: 2 }} />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    <Typography variant='body1'>이메일</Typography>
                  </th>
                  <td>
                    <TextField size='small' sx={{ ml: 2 }} />@<TextField size='small' sx={{ ml: 2 }} />
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
                    <TextField {...register('memo')} rows={5} multiline variant='outlined' />
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
        </form>
      </Box>
      <Modal content={content} width={modalWidth} open={modalOpen} close={closeModal} />
    </Grid>
  )
}

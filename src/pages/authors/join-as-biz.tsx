import React from 'react'
import type { GetStaticProps, NextPage } from "next"
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import Checkbox from '@mui/material/Checkbox'
import Switch from '@mui/material/Switch'

export default function Join() {
  return (
    <>
      <div className='tit-wrap'>
        <h5 className='h5'>기업정보</h5>
      </div>
      <div className='tbl-write type2'>
        <table>
          <colgroup>
            <col width='20%' />
            <col width='80%' />
          </colgroup>
          <tbody>
            <tr>
              <th scope='row'>
                회원구분<span className='essential'>*</span>
              </th>
              <td>
                <RadioGroup row defaultValue='1'>
                  <FormControlLabel value='0' label='개인회원' labelPlacement='end' control={<Radio />} />
                  <FormControlLabel value='1' control={<Radio />} label='기업회원' />
                </RadioGroup>
              </td>
            </tr>
            <tr>
              <th scope='row'>
                회사명<span className='essential'>*</span>
              </th>
              <td>
                <TextField className='small' placeholder='' />
              </td>
            </tr>
            <tr>
              <th scope='row'>
                대표자명<span className='essential'>*</span>
              </th>
              <td>
                {/* <TextField className='small' {...register('firm_ceo')} placeholder={subscription.ceo} /> */}
                <TextField className='small' placeholder='' />
              </td>
            </tr>
            <tr>
              <th scope='row'>
                사업자번호<span className='essential'>*</span>
              </th>
              <td>
                <div className='form-group'>
                  <TextField size='small' className='x-small' placeholder='' />
                  <span className='dash'>-</span>
                  <TextField size='small' className='x-small' placeholder='' />
                  <span className='dash'>-</span>
                  <TextField size='small' className='x-small' placeholder='' />
                  <Button size='small' variant='outlined' color='primary' className='ml8'>
                    중복가입 확인
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope='row'>법인등록번호</th>
              <td>
                <div className='form-group'>
                  <TextField className='x-small' />
                  <span className='dash'>-</span>
                  <TextField className='x-small' />
                </div>
              </td>
            </tr>
            <tr>
              <th scope='row'>
                업태<span className='essential'>*</span>
              </th>
              <td>
                <TextField className='small' placeholder='' />
              </td>
            </tr>
            <tr>
              <th scope='row'>
                업종<span className='essential'>*</span>
              </th>
              <td>
                <TextField className='small' placeholder='' />
              </td>
            </tr>
            <tr>
              <th scope='row' className='vat'>
                회사주소<span className='essential'>*</span>
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
                  <TextField className='w100' />
                </div>
                <FormGroup className='mt8'>
                  <FormControlLabel control={<Checkbox className='round' />} label='기본 배송지로 저장' />
                </FormGroup>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='tit-wrap'>
        <h5 className='h5'>담당자 정보</h5>
      </div>
      <div className='tbl-write type2'>
        <table>
          <colgroup>
            <col width='20%' />
            <col width='80%' />
          </colgroup>
          <tbody>
            <tr>
              <th scope='row'>
                이름<span className='essential'>*</span>
              </th>
              <td>
                <TextField className='small' />
              </td>
            </tr>
            <tr>
              <th scope='row'>
                아이디<span className='essential'>*</span>
              </th>
              <td>
                <div className='form-wrap'>
                  <TextField className='small' />
                  <Button variant='outlined' size='small' color='info'>
                    아이디 중복 확인
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope='row'>
                새 비밀번호<span className='essential'>*</span>
              </th>
              <td>
                <TextField className='small' />
              </td>
            </tr>
            <tr>
              <th scope='row'>
                새 비밀번호 확인<span className='essential'>*</span>
              </th>
              <td>
                <TextField className='small' />
              </td>
            </tr>
            <tr>
              <th scope='row'>전화번호</th>
              <td>
                <div className='form-wrap'>
                  <TextField className='x-small' />
                  <span className='dash'>-</span>
                  <TextField className='x-small' />
                  <span className='dash'>-</span>
                  <TextField className='x-small' />
                </div>
              </td>
            </tr>
            <tr>
              <th scope='row' className='vat'>
                휴대전화번호<span className='essential'>*</span>
              </th>
              <td>
                <div className='form-wrap'>
                  <TextField className='x-small' />
                  <span className='dash'>-</span>
                  <TextField className='x-small' />
                  <span className='dash'>-</span>
                  <TextField className='x-small' />
                </div>
                <FormGroup row>
                  <FormControlLabel labelPlacement='start' control={<Switch defaultChecked />} label='SMS 수신동의' />
                  <FormControlLabel labelPlacement='start' control={<Switch defaultChecked />} label='앱 푸쉬동의' />
                </FormGroup>
              </td>
            </tr>
            <tr>
              <th scope='row' className='vat'>
                이메일<span className='essential'>*</span>
              </th>
              <td>
                <div className='form-wrap'>
                  <TextField className='small' style={{ width: '170px' }} />
                  <span className='dash'>@</span>
                  <TextField className='small' style={{ width: '170px' }} />
                  <Button size='small' variant='outlined' color='info'>
                    중복확인
                  </Button>
                </div>
                <FormGroup row>
                  <FormControlLabel
                    labelPlacement='start'
                    control={<Switch defaultChecked />}
                    label='이메일 수신동의'
                  />
                </FormGroup>
              </td>
            </tr>
            <tr>
              <th scope='row' className='vat'>
                주소
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
                  <TextField className='w100' />
                </div>
                <FormGroup className='mt8'>
                  <FormControlLabel control={<Checkbox className='round' />} label='기본 배송지로 저장' />
                </FormGroup>
              </td>
            </tr>
            <tr>
              <th scope='row' className='vat'>
                관리자 메모<span className='block'>(고객노출 안됨)</span>
              </th>
              <td>
                <TextField rows={3} multiline variant='outlined' className='w100' />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

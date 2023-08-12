
import React from 'react'
import type { GetStaticProps, NextPage } from "next"
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
// ** MUI Imports
import {
  Box,
  Button,
  IconButton,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Table,
  TableBody,
  TextField,
  Typography
} from '@mui/material'
import EditorControlled from 'views/forms/form-elements/editor/EditorControlled'

// import { DragDrop } from 'views'

// ** Images
// import dele from '/public/images/icons/ico-delete.svg'
// import square from '/public/images/icons/ico-square.svg'
// import { ReactComponent as Add } from '/public/images/icons/Add.svg'

// ** customer-service / faq-operator / register-faq 자주묻는 질문 등록
export default function FaqAddPage() {
  // ** next ReferenceError: window is not defined 해결 방법

  const [isChecked, setIsChecked] = React.useState(false)

 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => { 
      alert(' 1 ')
      console.log('>>> ',data); }
    console.log(errors);


  return (
    <>
      <Card className='register-box'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='h3-back-styled'>
            <h3>자주묻는 질문 등록</h3>
          </div>
          <div className='tbl-write type3'>
            <Table>
              <caption>자주묻는 질문 등록</caption>
              <colgroup>
                <col width='160px' />
                <col width='auto' />
              </colgroup>
              <TableBody>
                <tr>
                  <th scope='row'>문의여부</th>
                  <td>
                    <div className='form-wrap'>
                      <Select sx={{ width: '11.25rem' }} defaultValue='0'>
                        <MenuItem value='0'>선택</MenuItem>
                        <MenuItem value='1'>사이트이용</MenuItem>
                        <MenuItem value='2'>시스템오류</MenuItem>
                        <MenuItem value='4'>회원</MenuItem>
                        <MenuItem value='5'>상품</MenuItem>
                        <MenuItem value='6'>배송</MenuItem>
                        <MenuItem value='7'>취소/교환/환불</MenuItem>
                        <MenuItem value='8'>대량구매</MenuItem>
                        <MenuItem value='9'>이벤트/쿠폰/적립금</MenuItem>
                        <MenuItem value='10'>기타</MenuItem>
                      </Select>
                      <Button variant='outlined' size='small' color='info' className='icon'>
                        {/* <Add /> */}
                        <i className='add' />
                        문의유형 추가
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>게시여부</th>
                  <td>
                    <RadioGroup row aria-label='position' name='horizontal' defaultValue='start'>
                      <FormControlLabel value='posting' label='게시' labelPlacement='end' control={<Radio />} />
                      <FormControlLabel value='unpublished' control={<Radio />} label='미게시' />
                    </RadioGroup>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>질문 2</th>
                  <td>
                    <div className='form-wrap'>
                      <TextField sx={{ width: '45rem' }} {...register("First name", {required: true, maxLength: 80})} />
                      <FormControlLabel
                        value='fixed'
                        label='게시글 등록순서 고정'
                        labelPlacement='end'
                        control={<Checkbox />}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row' className='vat'>
                    <span style={{ display: isChecked ? 'none' : '' }}>답변</span>
                  </th>
                  <td>
                    <div className='editor-inline-box'>
                      <EditorControlled />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row' className='vat'>
                    파일첨부
                  </th>
                  <td>{/* <DragDrop /> */}</td>
                </tr>
              </TableBody>
            </Table>
          </div>
          
      <div className='btn-align'>
        <Button color='secondary' variant='outlined' size='small'>
          취소
        </Button>
        <Button size='small' color='primary' variant='contained' sx={{ ml: 2, minWidth: '5rem' }}>
          저장
        </Button>
      </div>
      </form>
      </Card>
    </>
  )
}

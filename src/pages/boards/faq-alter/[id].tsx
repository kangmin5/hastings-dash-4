import { useEffect, useState } from 'react'
import type { GetStaticProps, NextPage } from "next"
import {
  Button,
  Card,
  MenuItem,
  RadioGroup,
  Select,
  Radio,
  FormControlLabel,
  TextField,
  Typography
} from '@mui/material'
import { ReactComponent as Add } from '/public/images/icons/Add.svg'

import EditorControlled from 'views/forms/form-elements/editor/EditorControlled'

// import { CustomModal, DragDrop } from 'views'

// ** 022. customer-service / faq-operator / update-faq : 자주묻는 질문 수정
export default function FaqAlterPage() {
  const [isChecked, setIsChecked] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  function handleCheck(event: any) {
    setIsChecked(prevState => !prevState)
  }
  function openModal(data: any) {
    setModalOpen(true)
  }
  function closeModal() {
    setModalOpen(false)
  }

  return (
    <>
      <Typography variant='h2'>자주 묻는 질문 관리</Typography>
      <Card className='register-box'>
        <form onSubmit={e => e.preventDefault()}>
          <div className='h3-back-styled'>
            <h3>자주묻는 질문 수정</h3>
          </div>
          <div className='tbl-write type3'>
            <table>
              <caption>자주묻는 질문 수정</caption>
              <colgroup>
                <col width='160px' />
                <col width='auto' />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>문의유형</th>
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
                      <Button onClick={openModal} variant='outlined' size='small' color='info' className='icon'>
                        {/* <Add /> */}
                        <i className='add' />
                        문의유형 수정
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
                  <th scope='row'>질문</th>
                  <td>
                    <TextField placeholder='아이디,비밀번호를 잊어버렸습니다.' sx={{ width: '45rem' }} />
                  </td>
                </tr>
                <tr>
                  <th scope='row' className='vat'>
                    <span style={{ display: isChecked ? 'none' : '' }}>내용</span>
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
              </tbody>
            </table>
          </div>
        </form>
      </Card>
      <div className='btn-align'>
        <div className="left">
        <Button color='info' variant='outlined' size='medium'>
          목록
        </Button>
        </div>
        <Button color='info' variant='outlined' size='medium'>
          취소
        </Button>
        <Button color='primary' variant='contained' size='medium'>
          저장
        </Button>
      </div>
      {/* <CustomModal content={<GatherInquiryTypes />} width='md' title='문의 유형 수정' open={modalOpen} close={closeModal} /> */}
    </>
  )
}

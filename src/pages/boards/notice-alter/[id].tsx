

// ** React Imports
import { useEffect, useState } from 'react'
import type { GetStaticProps, NextPage } from "next"
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material'

// import { DragDrop } from 'views'
import EditorControlled from 'views/forms/form-elements/editor/EditorControlled'
import CardSnippet from '@core/components/card-snippet'

// 018. customer-service / messenger / update-notice 공지사항 수정
export default function NoticeAlterPage() {
  const [isChecked, setIsChecked] = useState(false)

  function handleCheck(event: any) {
    setIsChecked(prevState => !prevState)
  }

  return (
    <>
      <Typography variant='h2'>공지사항 관리</Typography>
      <Card className='register-box'>
        <form onSubmit={e => e.preventDefault()}>
          <Box className='h3-back-styled'>
            <h3>공지사항 수정</h3>
          </Box>
          <div className='tbl-write type3'>
            <table>
              <caption>공지사항 수정</caption>
              <colgroup>
                <col width='160px' />
                <col width='auto' />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>게시여부</th>
                  <td>
                    <RadioGroup row aria-label='position' name='horizontal' defaultValue='start'>
                      <FormControlLabel value='posting' control={<Radio />} label='게시' />
                      <FormControlLabel value='unpublished' control={<Radio />} label='미게시' />
                    </RadioGroup>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>제목</th>
                  <td>
                    <div className='form-wrap'>
                      <TextField placeholder='[개인정보처리방침 개정안내](시행일:2023.03.09)' sx={{ width: '720px' }} />
                      <FormControlLabel value='fixed' label='상단고정' labelPlacement='end' control={<Checkbox />} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row' className='vat'>
                    <span style={{ display: isChecked ? 'none' : '' }}>내용</span>
                    <span style={{ display: isChecked ? '' : 'none' }}>내용(웹)</span>
                  </th>
                  <td>
                    <div className='form-wrap ss'>
                      <div className='editor-inline-box'>
                        <EditorControlled />
                      </div>
                      <FormControlLabel
                        value='fixed'
                        label='모바일 내용분리'
                        labelPlacement='end'
                        control={<Checkbox checked={isChecked} onChange={handleCheck} />}
                      />
                    </div>
                  </td>
                </tr>
                <tr style={{ display: isChecked ? '' : 'none' }}>
                  <th scope='row' className='vat'>
                    내용(모바일)
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
        <Button color='info' variant='outlined' size='medium'>
          취소
        </Button>
        <Button size='medium' color='primary' variant='contained'>
          저장
        </Button>
      </div>
    </>
  )
}

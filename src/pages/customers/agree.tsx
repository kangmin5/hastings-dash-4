import React from 'react'

import { Button, Card, Radio, RadioGroup, FormControlLabel, Checkbox } from '@mui/material'
import Typography from '@mui/material/Typography'

//import { useEffect } from 'react'

export function AgreePage(props: any) {
  const { memberInfo } = props
  console.log(`memberInfo`, memberInfo)

  // useEffect(() => {}, [memberInfo])

  return (
    <>
      <Typography variant='h4'>개인정보 동의 내역</Typography>

      <Card className='send-consent'>
        <Typography variant='h5'>[필수]개인정보 수집·이용</Typography>
        <div className='tbl-list'>
          <table>
            <caption>개인정보 동의 테이블</caption>
            <colgroup>
              <col width='30%' />
              <col width='30%' />
              <col width='20%' />
              <col width='20%' />
            </colgroup>
            <thead>
              <tr>
                <th scope='col'>목적</th>
                <th scope='col'>항목</th>
                <th scope='col'>보유기간</th>
                <th scope='col'>동의여부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>회원제 서비스 이용/본인확인</td>
                <td>이름,아이디,비밀번호,이메일,생년월일,성별,휴대전화</td>
                <td>회원탈퇴후 즉시</td>
                <td>
                  <RadioGroup row aria-label='position' name='horizontal' defaultValue='start'>
                    <FormControlLabel value='agreed' label='동의함' labelPlacement='end' control={<Radio />} />
                    <FormControlLabel value='doNotAgree' control={<Radio />} label='동의안함' />
                  </RadioGroup>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Typography variant='h5'>[선택]개인정보 수집·이용</Typography>
        <div className='tbl-list'>
          <table>
            <caption>마케팅활용 동의 테이블</caption>
            <colgroup>
              <col width='32%' />
              <col width='28%' />
              <col width='20%' />
              <col width='20%' />
            </colgroup>
            <thead>
              <tr>
                <th scope='col'>목적</th>
                <th scope='col'>항목</th>
                <th scope='col'>보유기간</th>
                <th scope='col'>동의여부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>마케팅활용(이벤트,맞춤형 광고)</td>
                <td>휴대폰,이메일,쿠키정보</td>
                <td>회원탈퇴후 즉시</td>
                <td>
                  <RadioGroup row aria-label='position' name='horizontal' defaultValue='start'>
                    <FormControlLabel value='agreed_1' label='동의함' labelPlacement='end' control={<Radio />} />
                    <FormControlLabel value='doNotAgree_1' control={<Radio />} label='동의안함' />
                  </RadioGroup>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Typography variant='h5'>[선택]광고성 정보 수신</Typography>
        <div className='tbl-list'>
          <table>
            <caption>광고성 정보 동의 테이블</caption>
            <colgroup>
              <col width='12%' />
              <col width='38%' />
              <col width='15%' />
              <col width='15%' />
              <col width='20%' />
            </colgroup>
            <thead>
              <tr>
                <th scope='col'>수신</th>
                <th scope='col'>목적</th>
                <th scope='col'>항목</th>
                <th scope='col'>보유기간</th>
                <th scope='col'>동의여부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>이메일</td>
                <td>마케팅 및 광고 활용을 위한 정보 수신 동의</td>
                <td>이메일</td>
                <td>철회 후 즉시</td>
                <td>
                  <RadioGroup row aria-label='position' name='horizontal' defaultValue='start'>
                    <FormControlLabel value='agreed_2' label='동의함' labelPlacement='end' control={<Radio />} />
                    <FormControlLabel value='doNotAgree_2' control={<Radio />} label='동의안함' />
                  </RadioGroup>
                </td>
              </tr>
              <tr>
                <td>SMS</td>
                <td>마케팅 및 광고 활용을 위한 정보 수신 동의</td>
                <td>휴대 전화</td>
                <td>철회 후 즉시</td>
                <td>
                  <RadioGroup row aria-label='position' name='horizontal' defaultValue='start'>
                    <FormControlLabel value='agreed_3' label='동의함' labelPlacement='end' control={<Radio />} />
                    <FormControlLabel value='doNotAgree_3' control={<Radio />} label='동의안함' />
                  </RadioGroup>
                </td>
              </tr>
              <tr>
                <td>앱Push</td>
                <td>마케팅 및 광고 활용을 위한 정보 수신 동의</td>
                <td></td>
                <td>철회 후 즉시</td>
                <td>
                  <div className='form-check'>
                    <FormControlLabel
                      value='information'
                      disabled
                      control={<Checkbox />}
                      label='정보성'
                      labelPlacement='end'
                    />
                    <FormControlLabel
                      value='advertisement'
                      disabled
                      control={<Checkbox />}
                      label='광고성'
                      labelPlacement='end'
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
      <ul className='list-type1'>
        <li className='point'>이메일,SMS는 개인 정보 수정 페이지에서 철회 및 재동의가 가능합니다.</li>
        <li className='point'>앱PUSH는 파워앱에서만 철회 및 재동의가 가능합니다.</li>
      </ul>
      <div className='btn-align'>
        <Button size='medium' variant='outlined' color='primary'>
          수정 이력 확인
        </Button>
        <Button size='medium' variant='contained' color='primary'>
          저장
        </Button>
      </div>
    </>
  )
}

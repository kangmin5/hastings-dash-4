import React from 'react'
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

export default function SimpleId() {
  return (
    <>
      <Typography variant='h2'>간편 견적 문의</Typography>
      <Card className='register-box'>
        <div className='h3-back-styled'>
          <h3>문의 상세</h3>
        </div>
        <div className='tbl-view type2'>
          <table>
            <caption>간편 견적 문의 상세</caption>
            <colgroup>
              <col width='160px' />
              <col width='auto' />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>답변여부</th>
                <td>
                  <p>답변대기</p>
                </td>
              </tr>
              <tr>
                <th scope='row'>제목</th>
                <td>
                  <p>견적 요청합니다.</p>
                </td>
              </tr>
              <tr>
                <th scope='row'>작성자</th>
                <td>
                  <p>김상성</p>
                </td>
              </tr>
              <tr>
                <th scope='row'>작성일</th>
                <td>
                  <p>2023-03-09 12:38</p>
                </td>
              </tr>
              <tr>
                <th scope='row'>비밀번호 여부</th>
                <td>
                  <p>
                    <Button variant='outlined' color='info' size='small'>
                      비밀번호 변경
                    </Button>
                  </p>
                </td>
              </tr>
              <tr>
                <th scope='row'>연락처</th>
                <td>
                  <div className='form-wrap'>
                    <p>010-1234-5678</p>
                    <FormControlLabel
                      value='fixed'
                      label='답변 수신 문자/알림톡 받기'
                      labelPlacement='end'
                      control={<Checkbox defaultChecked disabled />}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>이메일</th>
                <td>
                  <p>bongtoo@hrbongtoo.com</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className='h4-line-type type2'>견적 문의 내용</h4>
        <div className='tbl-view type2'>
          <table>
            <caption>간편 견적 문의 상세</caption>
            <colgroup>
              <col width='160px' />
              <col width='auto' />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>봉투 재질</th>
                <td>
                  <p>OPP</p>
                </td>
              </tr>
              <tr>
                <th scope='row'>봉투 사이즈</th>
                <td>
                  <p>가로 145* 세로 210(cm)</p>
                </td>
              </tr>
              <tr>
                <th scope='row'>인쇄사양</th>
                <td>
                  <p>2도</p>
                </td>
              </tr>
              <tr>
                <th scope='row'>수량</th>
                <td>
                  <p>20,000 장</p>
                </td>
              </tr>
              <tr>
                <th scope='row'>용도</th>
                <td>
                  <p>OPP</p>
                </td>
              </tr>
              <tr>
                <th scope='row' className='vat'>
                  기타 문의사항
                </th>
                <td>
                  <div className='board-cont'>
                    CiC 서비스를 이용해주시는 고객님들께 감사드립니다. <br />
                    개인정보처리방침 변경시 사전 고지 의무에 따라 아래와 같이 안내드립니다. <br />
                    -아래- <br /> 1. 주요 개정 내용
                    <br /> ■ 수집하는 개인정보 항목 및 수집방법 수정 <br />■ 수집한 개인정보의 공유 및 제공(제3자 제공)
                    수정
                    <br /> ■ 가명정보의 처리 추가
                    <br /> 2. 개정 내용
                    <br /> º 수집하는 개인정보 항목 및 수집방법 수정
                    <br /> → 서비스 이용내역 : 접속로그, 접속 IP 정보, 서비스 이용기록
                    <br /> → PC환경 정보 : OS버전,Web Browser 버전
                    <br /> º 수집한 개인정보의 공유 및 제공(제3자 제공) 수정
                    <br /> → 가.필수정보 (영문)이름,아이디,사번,(영문)소속회사(조직),부서명,프로필 사진,가입 캠퍼스 수,
                    <br /> 팔로워 수, 팔로잉 수, 배지 수,포인트 정보, 서비스 이용 내역 <br />→ (4) Samsung CIC 사용기간{' '}
                    <br /> (1) 파놉토 (인우IT/파놉토코리아) (2) 사용자인증 (3) 이메일(SSO) (4) 서비스제공기간
                    <br /> (1) 줌,웹엑스 (2) 사용자인증 (3) 이메일(SSO) (4) 서비스제공기간
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row' className='vat'>
                  첨부파일
                </th>
                <td>
                  <div className='thumb'>이미지 등록시 여기에 들어옴</div>
                  <div className='file-box'>
                    <Button variant='outlined' color='info' className='file icon'>
                      <strong>주문목록.excel</strong>
                      <span className='byte'>115 MB</span>
                      <i className='download' />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>이용약관 동의 여부</th>
                <td>동의</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
      <Card className='register-box mt40'>
        <div className='h3-back-styled'>
          <h3>답변 작성</h3>
        </div>
        <form onSubmit={e => e.preventDefault()}>
          <div className='tbl-view type2'>
            <Table>
              <caption>간편 견적 문의 등록</caption>
              <colgroup>
                <col width='160px' />
                <col width='auto' />
              </colgroup>
              <TableBody>
                <tr>
                  <th scope='row'>답변자</th>
                  <td>관리자(양은영)</td>
                </tr>
                <tr>
                  <th scope='row' className='vat'>
                    답변내용
                  </th>
                  <td>
                    <div className='text-box'>
                      <span className='date'>2023-03-09 12:38</span>
                      <div>
                        해당 거래건은 사업자 현금결제(지출증빙용)으로 신청, 발급되어 세금계산서가 발급되지 않은 것으로
                        확인됩니다. 발급 확인 메일을 고객님께 발송하였으며 국세청에서도 확인 가능하십니다. 감사합니다.
                        해당 거래건은 사업자 현금결제(지출증빙용)으로 신청, 발급되어 세금계산서가 발급되지 않은 것으로
                        확인됩니다. 발급 확인 메일을 고객님께 발송하였으며 국세청에서도 확인 가능하십니다. 감사합니다.
                        해당 거래건은 사업자 현금결제(지출증빙용)으로 신청, 발급되어 세금계산서가 발급되지 않은 것으로
                        확인됩니다. 발급 확인 메일을 고객님께 발송하였으며 국세청에서도 확인 가능하십니다. 감사합니다.
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row' className='vat'>
                    파일첨부
                  </th>
                  <td>
                    <div className='file-box'>
                      <Button variant='outlined' color='info' className='file icon'>
                        <strong>견적서.docx</strong>
                        <span className='byte'>115 MB</span>
                        <i className='download' />
                      </Button>
                      <Button variant='outlined' color='info' className='picture icon'>
                        <strong>258423588-58425441.png</strong>
                        <span className='byte'>115 MB</span>
                        <i className='download' />
                      </Button>
                      <Button variant='outlined' color='info' className='file icon fail'>
                        <strong>
                          업로드에 실패하였습니다.
                          <br />
                          삭제 후 다시 시도해주세요.
                        </strong>
                        <i className='delete' />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row' className='vat'>
                    답변전송
                  </th>
                  <td>
                    <FormControlLabel
                      value='fixed'
                      label='문자전송'
                      labelPlacement='end'
                      control={<Checkbox defaultChecked disabled />}
                    />
                    <span className='form-guide'>(체크하시면 SMS/알림톡으로 답변이 전송됩니다.) </span>
                    <div className='sub-form-wrap'>
                      <RadioGroup row aria-label='position' name='horizontal' defaultValue='start'>
                        <FormControlLabel
                          value='posting'
                          label='문자'
                          labelPlacement='end'
                          control={<Checkbox defaultChecked disabled />}
                        />
                        <FormControlLabel
                          value='unpublished'
                          control={<Checkbox defaultChecked disabled />}
                          label='알림톡'
                        />
                      </RadioGroup>
                    </div>
                  </td>
                </tr>
              </TableBody>
            </Table>
          </div>
        </form>
      </Card>
      <div className='btn-align'>
        <div className='left'>
          <Button color='info' variant='outlined' size='medium'>
            목록
          </Button>
        </div>
        {/* 답변등록하기 전이면 노출 */}
        <Button color='info' variant='outlined' size='medium'>
          취소
        </Button>
        <Button color='primary' variant='contained' size='medium'>
          답변등록
        </Button>
      </div>
    </>
  )
}

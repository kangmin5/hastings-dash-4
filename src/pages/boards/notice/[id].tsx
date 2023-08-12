

import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TextField,
  Typography
} from '@mui/material'
import Link from 'next/link'
import type { GetStaticProps, NextPage } from "next"
import { useRouter } from 'next/router'
import { useAppSelector } from 'custom-hooks'
import { RootState } from 'store'

// ** 017. 공지사항 상세
export default function NoticeIdPage() {
  const router = useRouter()
  const { id } = router.query
  const row = useAppSelector((state: RootState) => state.notice.theNotice)

  return (
    <>
      <Typography variant='h2'>공지사항 관리 :삭제: 넥스트 라우터 테스트 중 !!</Typography>
      <Card className='register-box'>
        <form onSubmit={e => e.preventDefault()}>
          <Box className='h3-back-styled'>
            <h3>공지사항 상세</h3>
          </Box>
          <div className='tbl-view type2'>
            <Table>
              <caption>공지사항 상세</caption>
              <colgroup>
                <col width='160px' />
                <col width='auto' />
              </colgroup>
              <TableBody>
                <tr>
                  <th scope='row'>게시여부</th>
                  <td>
                    {/* (게시 미게시) 데이터 들어와야함 */}
                    <p>게시</p>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>노출여부</th>
                  <td>
                    {/* (전체 웹 모바일) 데이터 들어와야함  */}
                    <p>전체</p>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>작성일</th>
                  <td>
                    <p>2023-03-09 12:38</p>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>작성자</th>
                  <td>
                    <p>관리자</p>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>제목</th>
                  <td>
                    <div className='form-wrap'>
                      <p>[개인정보처리방침 개정 안내](시행일:2023.03.09)</p>
                      <FormControlLabel value='fixed' label='상단고정' labelPlacement='end' control={<Checkbox />} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row' className='vat'>
                    내용(웹)
                  </th>
                  <td>
                    <FormControlLabel
                      value='fixed'
                      label='모바일 내용분리'
                      labelPlacement='start'
                      control={<Checkbox defaultChecked />}
                    />
                    <div className='board-cont'>
                      CiC 서비스를 이용해주시는 고객님들께 감사드립니다. <br />
                      개인정보처리방침 변경시 사전 고지 의무에 따라 아래와 같이 안내드립니다. <br />
                      -아래- <br /> 1. 주요 개정 내용
                      <br /> ■ 수집하는 개인정보 항목 및 수집방법 수정 <br />■ 수집한 개인정보의 공유 및 제공(제3자
                      제공) 수정
                      <br /> ■ 가명정보의 처리 추가
                      <br /> 2. 개정 내용
                      <br /> º '수집하는 개인정보 항목 및 수집방법' 수정
                      <br /> → 서비스 이용내역 : 접속로그, 접속 IP 정보, 서비스 이용기록
                      <br /> → PC환경 정보 : OS버전,Web Browser 버전
                      <br /> º '수집한 개인정보의 공유 및 제공(제3자 제공)' 수정
                      <br /> → 가.필수정보 (영문)이름,아이디,사번,(영문)소속회사(조직),부서명,프로필 사진,가입 캠퍼스
                      수,
                      <br /> 팔로워 수, 팔로잉 수, 배지 수,포인트 정보, 서비스 이용 내역 <br />→ (4) Samsung CIC
                      사용기간 <br /> (1) 파놉토 (인우IT/파놉토코리아) (2) 사용자인증 (3) 이메일(SSO) (4) 서비스제공기간
                      <br /> (1) 줌,웹엑스 (2) 사용자인증 (3) 이메일(SSO) (4) 서비스제공기간
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row' className='vat'>
                    내용(모바일)
                  </th>
                  <td>
                    <div className='board-cont'>
                      CiC 서비스를 이용해주시는 고객님들께 감사드립니다. <br />
                      개인정보처리방침 변경시 사전 고지 의무에 따라 아래와 같이 안내드립니다. <br />
                      -아래- <br /> 1. 주요 개정 내용
                      <br /> ■ 수집하는 개인정보 항목 및 수집방법 수정 <br />■ 수집한 개인정보의 공유 및 제공(제3자
                      제공) 수정
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>첨부파일</th>
                  <td>
                    <Typography variant='body2'>데이터 들어오면 여기에 표시됨</Typography>
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
        <Button color='info' variant='outlined' size='medium'>
          삭제
        </Button>
        <Button size='medium' color='primary' variant='contained'>
          수정
        </Button>
      </div>
    </>
  )
}

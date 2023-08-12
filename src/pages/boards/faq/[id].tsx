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
import React from 'react'
import { useRouter } from 'next/router'
import { FaqByIdSelector } from 'app/boards/org/faq-org/faq-selector'
import { useAppDispatch } from 'custom-hooks'
import { saveFaq } from 'app/boards/org/faq-org/faq-reducer'
import { useSelector } from 'react-redux'
import { addFaq, getFaqById } from 'app/boards/org/faq-org/faq-thunk';
import { FaqBo } from 'app/boards/mo/faq-mo/faq-vo'
import { ArticleBuilder } from 'app/boards/atom/article-atom'
import { BarBuilder } from 'app/boards/atom/bar-atom'

// ** 021. 자주묻는 질문 상세

export function FaqIdPage() {
  const router = useRouter()

  const dispatch = useAppDispatch()
  const faqById = useSelector(FaqByIdSelector)

  React.useEffect(() => {
    const { id } = router.query
    if (typeof id === 'string') {
      console.log(' URL 로 넘어온 ID 는 ', id, ' 입니다')
      const a = new FaqBo().bar(new BarBuilder().id(id).build()).build()
      dispatch(getFaqById(a))
    }
  }, [dispatch, router.query])

  const row = faqById
  return (
    <Box>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <Typography className='Title-styled'>자주묻는 질문 관리</Typography>
            <form onSubmit={e => e.preventDefault()}>
              <div className='register-box'>
                <Box className='h3-back-styled'>
                  <Typography variant='h3' sx={{ fontWeight: '500' }}>
                    자주묻는 질문 상세
                  </Typography>
                </Box>
                <Table>
                  <caption>자주묻는 질문 상세</caption>
                  <colgroup>
                    <col width='15%' />
                    <col width='35%' />
                    <col width='15%' />
                    <col width='35%' />
                  </colgroup>
                  <TableBody>
                    <tr>
                      <th colSpan={1} scope='row'>
                        <Typography variant='body2'>문의여부</Typography>
                      </th>
                      <td colSpan={3}>
                        {/* (게시 미게시) 데이터 들어와야함 */}
                        <Typography variant='body2'>회원</Typography>
                      </td>
                    </tr>
                    <tr>
                      <th colSpan={1} scope='row'>
                        <Typography variant='body2'>게시여부</Typography>
                      </th>
                      <td colSpan={3}>
                        {/* (전체 웹 모바일) 데이터 들어와야함  */}
                        <Typography variant='body2'>게시</Typography>
                      </td>
                    </tr>
                    <tr>
                      <th colSpan={1} scope='row'>
                        <Typography variant='body2'>등록일</Typography>
                      </th>
                      <td colSpan={3}>
                        <Typography variant='body2'>2023-03-09 12:38</Typography>
                      </td>
                    </tr>
                    <tr>
                      <th colSpan={1} scope='row'>
                        <Typography variant='body2'>작성자</Typography>
                      </th>
                      <td colSpan={3}>
                        <Typography variant='body2'>관리자</Typography>
                      </td>
                    </tr>
                    <tr>
                      <th colSpan={1} scope='row'>
                        <Typography variant='body2'>질문</Typography>
                      </th>
                      <td colSpan={3}>
                        <Typography variant='body2'>아이디,비밀번호를 잊어버렸습니다.</Typography>
                      </td>
                    </tr>
                    <tr>
                      <th colSpan={1} scope='row'>
                        <Typography variant='body2'>답변</Typography>
                      </th>
                      <td colSpan={3}>
                        <Typography variant='subtitle1'>

                        </Typography>
                      </td>
                    </tr>
                    <tr>
                      <th colSpan={1} scope='row'>
                        첨부파일
                      </th>
                      <td colSpan={3}>
                        <Typography variant='body2'>데이터 들어오면 여기에 표시됨</Typography>
                      </td>
                    </tr>
                  </TableBody>
                </Table>
              </div>
            </form>
            <div style={{ justifyContent: 'space-between' }} className='btn-align'>
              <Link href='/boards/faq'>
                <Button variant='contained' size='medium' >
                  등록
                </Button>
              </Link>
              <div>
                <Button variant='outlined' size='medium'>
                  삭제
                </Button>
                <Link className='Link-styled' href='/board/change/faq'>
                  <Button size='medium' color='primary' variant='contained' sx={{ ml: 2, minWidth: '5rem' }}>
                    수정
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

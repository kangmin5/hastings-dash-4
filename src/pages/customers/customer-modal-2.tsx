import { useEffect, useState, SyntheticEvent } from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Icon from '@core/components/icon'
import { RootState } from 'store'
import { useAppDispatch, useAppSelector } from 'custom-hooks'
import MuiTabList from '@mui/lab/TabList'
import { CustomerVo } from "app/customers/mo/customer-mo/customer-vo"
import Detail from 'pages/customers/customer-id'
//import { SubscriptionDetail } from 'app/systems/state/details'
//import { AgreementDetail } from 'app/systems/state/details'
import { useSelector } from 'react-redux'
import { CustomerByIdSelector } from 'app/customers/org/customer-org/customer-selector'
const tabData = [
  { value: '회원상세', label: '회원상세' },
  { value: '회원가입정보', label: '회원가입정보' },
  { value: '개인정보 동의 내역', label: '개인정보 동의 내역' },
  { value: '주문내역', label: '주문내역' },
  { value: '적립금내역', label: '적립금내역' },
  { value: '장바구니&관심상품', label: '장바구니&관심상품' },
  { value: '쿠폰내역&즉시발급', label: '쿠폰내역&즉시발급' },
  { value: '고객상담 내역', label: '고객상담 내역' },
  { value: '1:1문의내역', label: '1:1문의내역' },
  { value: '게시글 내역', label: '게시글 내역' },
  { value: '고객후기 내역', label: '고객후기 내역' },
  { value: '회원쪽지 내역', label: '회원쪽지 내역' },
  { value: '회원SMS 내역', label: '회원SMS 내역' },
  { value: '회원 알림톡 내역', label: '회원 알림톡 내역' },
  { value: '전화상담 내역', label: '전화상담 내역' }
]

const TabList = styled(MuiTabList)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    minWidth: 81,
    minHeight: 38,
    borderRadius: theme.shape.borderRadius
  }
}))

// ** 011. 회원상세정보 (CRM )
export function CustomerModal({ viewName }: { viewName: string }) {
  const [pageName, setPageName] = useState<string>(viewName)
  const c: CustomerVo = useSelector(CustomerByIdSelector)
  const [detailOfCustomer, setDetailOfCustomer] = useState<CustomerVo>(new CustomerVo())
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setPageName(newValue)
  }

  const name = c.person.name
  const createdAt = c.time.createdAt
  const updatedAt = c.time.updatedAt
  const totalOrderAmount = c.calc.totalOrderAmount
  const totalOrderCount = c.calc.totalOrderCount
  const totalPayAmount = c.calc.totalPayAmount
  const todayOrderAmount = c.calc.todayOrderAmount
  const todayOrderCount = c.calc.todayOrderCount
  const todayPayAmount = c.calc.todayPayAmount
  const totalRewardPoint = c.calc.totalRewardPoint

  return (
    <Grid container direction='row' className='depict-customer'>
      <div className='depict-wrap'>
        <TabContext value={pageName}>
          <Box sx={{ display: 'flex' }}>
            <div className='tab-lnb'>
              <div className='custom-info'>
                {/* [Dev] 기업회원일 경우에만 아이콘 표시 */}
                <span className='badge ico-b' />
                <Typography variant='h4'>{name}</Typography>
                <Typography variant='body2'>최종방문일 :{updatedAt}</Typography>
                <Typography variant='body2'>가입일 :{createdAt}</Typography>
              </div>
              <div className='message-wrap'>
                <IconButton className='ico-mail2'>
                  <Icon icon='material-symbols:mail-outline' color='#00707b' />
                  <span>메일</span>
                </IconButton>
                <IconButton className='ico-sms2'>
                  <Icon icon='material-symbols:phone-android' color='#00707b' />
                  <span>문자</span>
                </IconButton>
                <IconButton className='ico-memo2'>
                  <Icon icon='jam:write' color='#00707b' />
                  <span>메모</span>
                </IconButton>
              </div>
              <TabList orientation='vertical' onChange={handleChange} sx={{ borderRight: 1, borderColor: 'divider' }}>
                {tabData.map((tab, index) => {
                  return <Tab key={index} value={tab.value} label={tab.label} />
                })}
              </TabList>
            </div>

            <div className='tab-lnb-cont'>
              <TabPanel value='customerDetailInformation'>
                <Detail />
              </TabPanel>
              <TabPanel value='회원가입정보'>
                {/* <SubscriptionDetail /> */}
              </TabPanel>
              <TabPanel value='개인정보 동의 내역'>
                {/* <AgreementDetail customerParam={c.user.userId} /> */}
              </TabPanel>
              <TabPanel value='주문내역'>주문내역</TabPanel>
              <TabPanel value='적립금내역'>적립금내역</TabPanel>
              <TabPanel value='장바구니&관심상품'>장바구니&관심상품</TabPanel>
              <TabPanel value='쿠폰내역&즉시발급'>쿠폰내역&즉시발급</TabPanel>
              <TabPanel value='고객상담 내역'>고객상담 내역</TabPanel>
              <TabPanel value='1:1문의내역'>1:1문의내역</TabPanel>
              <TabPanel value='게시글 내역'>게시글 내역</TabPanel>
              <TabPanel value='고객후기 내역'>고객후기 내역</TabPanel>
              <TabPanel value='회원쪽지 내역'>회원쪽지 내역</TabPanel>
              <TabPanel value='회원SMS내역'>회원SMS내역</TabPanel>
              <TabPanel value='회원 알림톡 내역'>회원 알림톡 내역</TabPanel>
              <TabPanel value='전화상담 내역'>전화상담 내역</TabPanel>
            </div>
          </Box>
        </TabContext>
      </div>
      <div className='quick-counsel'>
        <div className='new-counsel-register'>
          <Typography variant='h4'>신규상담등록</Typography>
          <div className='tbl-write'>
            <table>
              <caption>회원상세 팝업 상담등록 테이블</caption>
              <colgroup>
                <col width='30%' />
                <col width='70%' />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>상담자</th>
                  <td>홍길동</td>
                </tr>
                <tr>
                  <th scope='row'>처리여부</th>
                  <td>
                    <FormControl className='w100'>
                      <Select defaultValue='a'>
                        <MenuItem value='a'>미처리</MenuItem>
                        <MenuItem value=''>처리중</MenuItem>
                        <MenuItem value=''>처리완료</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>상담분류</th>
                  <td>
                    <FormControl className='w100'>
                      <Select defaultValue='all'>
                        <MenuItem value='all'>주문</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>상담지수</th>
                  <td>
                    <FormControl className='w100'>
                      <Select defaultValue='all'>
                        <MenuItem value='all'>선택</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>주문번호</th>
                  <td>
                    <TextField size='small' className='w100' />
                  </td>
                </tr>
                <tr>
                  <th scope='row' className='vt'>상담내용</th>
                  <td>
                    <TextField multiline rows={3} className='w100' />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='btn-align'>
            <Button type='button' size='medium' color='primary' variant='outlined'>
              취소
            </Button>
            <Button type='button' size='medium' color='primary' variant='contained'>
              등록
            </Button>
          </div>
        </div>
        <div className='counsel-count'>
          <dl>
            <dt>고객상담</dt>
            <dd>1건</dd>
          </dl>
          <dl>
            <dt>1:1 문의</dt>
            <dd>1건</dd>
          </dl>
          <dl>
            <dt>게시글</dt>
            <dd>0건</dd>
          </dl>
        </div>
        <div className='total-count'>
          <Typography>TOTAL</Typography>
          <dl>
            <dt>총 주문금액</dt>
            <dd>{totalOrderAmount}</dd>
          </dl>
          <dl>
            <dt>총 결제금액</dt>
            <dd>{ }</dd>
          </dl>
          <dl>
            <dt>주문건수</dt>
            <dd>{c.calc.totalOrderAmount}</dd>
          </dl>
          <dl>
            <dt>주문취소</dt>
            <dd>{c.calc.totalOrderAmount}</dd>
          </dl>
          <div className='today'>
            <Typography>TODAY</Typography>
            <dl>
              <dt>주문금액</dt>
              <dd>{todayOrderAmount}</dd>
            </dl>
            <dl>
              <dt>결제금액</dt>
              <dd>{todayPayAmount}</dd>
            </dl>
            <dl>
              <dt>주문건수</dt>
              <dd>{todayOrderCount}</dd>
            </dl>
          </div>
          <dl>
            <dt>적립금</dt>
            <dd>{totalRewardPoint}</dd>
          </dl>
          <dl>
            <dt>포인트</dt>
            <dd>{totalRewardPoint}</dd>
          </dl>
        </div>
      </div>
    </Grid>
  )
}

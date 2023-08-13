// ** React Imports
import React from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'

import { CustomerAxios as axios } from 'app/customers/org/customer-org/customer-axios'

import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

import { useAppDispatch } from 'custom-hooks'
import { useSelector } from 'react-redux'
import Link from 'next/link'

// ** MUI Components
// import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'

// import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from '@core/components/icon'

// ** Custom Components Imports
import CustomChip from '@core/components/mui/chip'
import OptionsMenu from '@core/components/option-menu'
import Drawer from '@core/layouts/components/vertical/navigation/Drawer'
import { Container, Tabs, TextField } from '@mui/material'
import SubscribePage from './subscribe'



import { CustomerDetail } from './customer-detail'
import { getCustomerById } from 'app/customers/org/customer-org/customer-thunk'
import MuiTabList from '@mui/lab/TabList'
import { AgreePage } from './agree'
import { OrdersByUserPage } from 'pages/orders/order-per-user'
import ReservePage from './point'
import CartPage from './cart'
import InquiryByUserPage from 'pages/boards/inquiry-by-user'
import ReviewPage from 'pages/products/review'
import { selectCustomerById } from 'app/customers/org/customer-org/customer-selector'
import { CustomerVo } from 'app/customers/mo/customer-mo/customer-vo'
import { DateMap } from 'app/utils/atom/date-atom'
import { PersonAtom } from 'app/authors/atom/person-atom'
import { TimeAtom } from 'app/utils/atom/time-atom'
import { RowCountAtom } from 'app/boards/atom/row-count-atom'
import { TotalAtom } from 'app/orders/atom/total-atom'
import { TodayAtom } from 'app/orders/atom/today-atom'
import { ReserveAtom } from 'app/customers/atom/reserve-atom'
import { WalletAtom } from 'app/taxes/atom/wallet-atom'
import { CustomerDesign } from 'app/customers/mo/customer-mo/customer-design'
import { UserAtom } from 'app/authors/atom/user-atom'
import { AdobeAtom } from 'app/deliveries/atom/adobe-atom'
import { FunnelAtom } from 'app/customers/atom/funnel-atom'
import { WorkAtom } from 'app/authors/atom/work-atom'
import { MobileAtom } from 'app/utils/atom/mobile-atom'
import { CounselForm } from 'app/boards/temp/counsel-temp/counsel-form'
import CounselPage from 'pages/boards/counsel'



import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'




const tabData = [
  { value: '회원상세', label: '회원상세' },
  { value: '가입정보', label: '가입정보' },
  { value: '개인정보 동의 내역', label: '개인정보 동의 내역' },
  { value: '주문내역', label: '주문내역' },
  { value: '적립금내역', label: '적립금내역' },
  { value: '장바구니&관심상품', label: '장바구니&관심상품' },

  { value: '고객상담 내역', label: '고객상담 내역' },
  { value: '1:1문의내역', label: '1:1문의내역' },

  { value: '고객후기 내역', label: '고객후기 내역' },


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








export function ModalPage(props: any) {
  const { box, sendPage } = props
  const dispatch = useAppDispatch()

  const [toy, setToy] = React.useState(sendPage)

  const cowList = ["apple", "banana", "grape", "orange"];
  const [cow, setCow] = React.useState("");
  const changeCow = React.useCallback((e: any) => {
    setCow(e.target.value);
  }, []);

  const treeList = ["미처리", "처리중", "처리완료"];
  const [tree, setTree] = React.useState("");
  const changeTree = React.useCallback((e: any) => {
    setTree(e.target.value);
  }, []);

  const jazzList = ["최상", "좋음", "보통", "낮음", "최악"];
  const [jazz, setJazz] = React.useState("");
  const changeJazz = React.useCallback((e: any) => {
    setJazz(e.target.value);
  }, []);

  const nounList = ["apple", "banana", "grape", "orange"];
  const [noun, setNoun] = React.useState("");
  const changeNoun = React.useCallback((e: any) => {
    const noun = e.target.value;
    setNoun(noun);
  }, []);

  const changeTab = React.useCallback((event: any, newValue: any) => {
    setToy(newValue)
  }, [])




  const submitCounsel = (e: any) => {
    e.preventDefault();
    console.log("cow : ", cow);
    console.log("tree : ", tree);
    console.log("jazz : ", jazz);
    console.log("noun : ", noun);
  };

  const zooSchema = z
    .object({
      krName: z
        .string()
      ,


    })

  type zooType = z.infer<typeof zooSchema>;
  const {
    register,
    handleSubmit,
    setValue,
    formState,
  } = useForm<zooType>({
    // resolver: zodResolver(zooSchema),
    mode: 'onChange',
  });

  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  console.log(formState);

  const zooChange = e => {
    e.preventDefault()
    const formData = e.target

    // const req_data = {
    //   user_id: customer.user_id,
    //   is_firm: formData.is_firm.value
    // }

    // const update_isFirm = dispatch(updateFirm(req_data))
    //setFirmn({ ...customer, is_firm: update_isFirm.arg.is_firm })
  }

  const zooSubmit = data => {
    alert('submit')
    console.log(' === data ===> ', JSON.stringify(data))
  }



  const [cup, setCup] = React.useState(new CustomerVo())
  const [person, setPerson] = React.useState(new PersonAtom())
  const [time, setTime] = React.useState(new TimeAtom())
  const [rowCount, setRowCount] = React.useState(new RowCountAtom())
  const [total, setTotal] = React.useState(new TotalAtom())
  const [today, setToday] = React.useState(new TodayAtom())
  const [reserve, setReserve] = React.useState(new ReserveAtom())
  const [wallet, setWallet] = React.useState(new WalletAtom())
  const [user, setUser] = React.useState(new UserAtom())
  const [work, setWork] = React.useState(new WorkAtom())
  const [adobe, setAdobe] = React.useState(new AdobeAtom())
  const [funnel, setFunnel] = React.useState(new FunnelAtom())
  const [mobile, setMobile] = React.useState(new MobileAtom())
  const [krName, setKrName] = React.useState('')

  React.useEffect(() => {

    //   // const c = window.localStorage.getItem('customer')
    axios.then().getById(box).then(
      (res) => {
        const cup = new CustomerDesign().handle(res.data.json)[0]
        console.log('[', DateMap().get(), '] 선택한 고객 정보 : ', JSON.stringify(cup))
        const {
          car,
          person,
          time,
          calc,
          user,
          funnel,
          rowCount,
          reserve,
          today,
          total,
          adobe,
          mobile,
          work,
          bank,
          wallet,
        }: CustomerVo = cup

        setUser(user)
        setPerson(person)
        setTime(time)
        setRowCount(rowCount)
        setTotal(total)
        setToday(today)
        setReserve(reserve)
        setWallet(wallet)
        setAdobe(adobe)
        setCup(cup)
        setWork(work)
        setMobile(mobile)


        const x1 = person.name
        const x2 = time.accessAt
        const x3 = time.createdAt
        const x4 = rowCount.counsel
        const x5 = rowCount.inquiry
        const x6 = rowCount.review
        const x7 = total.orderAmount
        const x8 = total.payAmount
        const x9 = total.orderCount
        const x10 = total.cancelCount
        const x11 = today.orderAmount
        const x12 = today.payAmount
        const x13 = today.orderCount
        const x14 = reserve.balance
        const x15 = wallet.deposit
      }
    )

    setToy(sendPage)

    const u = window.localStorage.getItem('userData')
    const {
      krName
    } = JSON.parse(u)

    console.log('[', DateMap().get(), '] 관리자 정보 : ', u)
    setKrName(krName)





  }, [box, sendPage])

  return (
    <Grid container direction='row' justifyContent='flex-start' spacing={2}>
      <Grid item xs>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Icon icon='twemoji:letter-b' />
            <Typography>{person?.name}</Typography>
            <Typography>최종방문일 :{time.accessAt}</Typography>
            <Typography>가입일 :{time.createdAt}</Typography>
            <Box sx={{ width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <IconButton>
                  <Icon icon='material-symbols:mail-outline' color='#00707b' />
                </IconButton>
                <Typography variant='caption'>메일</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <IconButton>
                  <Icon icon='material-symbols:phone-android' color='#00707b' />
                </IconButton>
                <Typography variant='caption'>문자</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <IconButton>
                  <Icon icon='jam:write' color='#00707b' />
                </IconButton>
                <Typography variant='caption'>메모</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <TabContext value={toy}>
          <Box sx={{ display: 'flex' }}>
            <TabList orientation='vertical' onChange={changeTab} sx={{ borderRight: 1, borderColor: 'divider' }}>
              {tabData.map((tab, index) => {
                return <Tab key={index} value={tab.value} label={tab.label} />
              })}
            </TabList>

            <Box sx={{ width: '100%' }}>
              <TabPanel value='회원상세'>
                <CustomerDetail person={person} user={user}
                  adobe={adobe} funnel={funnel} work={work} mobile={mobile} />
              </TabPanel>
              <TabPanel value='가입정보'>
                <SubscribePage person={person} user={user}
                  adobe={adobe} funnel={funnel} work={work} mobile={mobile} />
              </TabPanel>
              <TabPanel value='개인정보 동의 내역'>
                <AgreePage memberInfo={''} />
              </TabPanel>
              <TabPanel value='주문내역'>
                <OrdersByUserPage memberInfo={''} />
              </TabPanel>
              <TabPanel value='적립금내역'>

                <ReservePage />
              </TabPanel>
              <TabPanel value='장바구니&관심상품'>

                <CartPage />
              </TabPanel>
              <TabPanel value='고객상담 내역'>

                <CounselPage />
              </TabPanel>
              <TabPanel value='1:1문의내역'>

                <InquiryByUserPage />
              </TabPanel>

              <TabPanel value='고객후기 내역'>

                <ReviewPage />
              </TabPanel>


            </Box>
          </Box>
        </TabContext>
      </Grid>
      <Grid item xs={2}>
        <div className='user-detail-right-box'>
          <div className='user-detail-count'>
            <div>
              <Typography>고객상담 :  {(rowCount.counsel === '0') ? '0' : rowCount.counsel} 건 </Typography>
            </div>
            <div>
              <Typography>1:1 문의 :  {(rowCount.inquiry === '0') ? '0' : rowCount.inquiry} 건 </Typography>
            </div>
            <div>
              <Typography>상품리뷰 : {(rowCount.review === '0') ? '0' : rowCount.review} 건 </Typography>

            </div>
          </div>
          <div>
            <Typography>신규상담등록</Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              <table>
                <caption>회원상세 팝업 상담등록 테이블</caption>
                <colgroup>
                  <col width='30%' />
                  <col width='70%' />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope='row'>
                      <Typography>상담자</Typography>
                    </th>
                    <td>
                      <TextField
                        size='small'
                        sx={{ ml: 2 }}
                        {...register('krName')}
                        value={krName}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>
                      <Typography>처리여부</Typography>
                    </th>
                    <td>
                      <select onChange={changeTree} value={tree}>
                        {treeList.map((item) => (
                          <option value={item} key={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>
                      <Typography>상담분류</Typography>
                    </th>
                    <td>
                      <select onChange={changeCow} value={cow}>
                        {cowList.map((item) => (
                          <option value={item} key={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>
                      <Typography>상담지수</Typography>
                    </th>
                    <td>
                      <select onChange={changeJazz} value={jazz}>
                        {jazzList.map((item) => (
                          <option value={item} key={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>
                      <Typography>주문번호</Typography>
                    </th>
                    <td>
                      <select onChange={changeNoun} value={noun}>
                        {nounList.map((item) => (
                          <option value={item} key={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>

                </tbody>
              </table>
              <Box>
                <Typography>상담내용</Typography>
                <TextField
                  label="내용"
                  multiline
                  rows={5}
                  defaultValue="내용을 입력해주세요."
                />
              </Box>
              <pre>{JSON.stringify(formState, null, 2)}</pre>

              <input type="submit" />
            </form>

            {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button color='primary' variant='contained' size='small'>
                등록
              </Button>
              <Button color='primary' variant='outlined' size='small'>
                취소
              </Button>

            </Box> */}

          </div>

          <div>
            <Typography>TOTAL</Typography>
            <table className='tbl-view'>
              <caption>당일과 총 주문금액 테이블</caption>
              <colgroup>
                <col width='30%' />
                <col width='70%' />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>
                    <Typography>주문금액</Typography>
                  </th>
                  <td>
                    <Typography>: {(total.orderAmount === '0') ? '0' : Number(total.orderAmount).toLocaleString('ko-KR')} 원 </Typography>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    <Typography>결제금액</Typography>
                  </th>
                  <td>
                    <Typography>: {(total.payAmount === '0') ? '0' : Number(total.payAmount).toLocaleString('ko-KR')} 원 </Typography>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    <Typography>주문건수</Typography>
                  </th>
                  <td>
                    <Typography>: {(total.orderCount === '0') ? '0' : Number(total.orderCount).toLocaleString('ko-KR')} 건 </Typography>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    <Typography>주문취소</Typography>
                  </th>
                  <td>
                    <Typography>: {(total.cancelCount === '0') ? '0' : Number(total.cancelCount).toLocaleString('ko-KR')} 건 </Typography>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography>TODAY</Typography>
                  </td>
                </tr>

                <tr>
                  <th scope='row'>
                    <Typography>주문금액</Typography>
                  </th>
                  <td>
                    <Typography>: {(today.orderAmount === '0') ? '0' : Number(today.orderAmount).toLocaleString('ko-KR')} 원</Typography>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    <Typography>결제금액</Typography>
                  </th>
                  <td>
                    <Typography>: {(today.payAmount === '0') ? '0' : Number(today.payAmount).toLocaleString('ko-KR')} 원</Typography>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    <Typography>주문건수</Typography>
                  </th>
                  <td>
                    <Typography>: {(today.orderCount === '0') ? '0' : Number(today.orderCount).toLocaleString('ko-KR')} 건 </Typography>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    <Typography>적립금</Typography>
                  </th>
                  <td>
                    <Typography>: {(reserve.balance === '0') ? '0' : Number(reserve.balance).toLocaleString('ko-KR')} 원</Typography>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    <Typography>예치금</Typography>
                  </th>
                  <td>
                    <Typography>: {(wallet.deposit === '0') ? '0' : Number(wallet.deposit).toLocaleString('ko-KR')} 원</Typography>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}

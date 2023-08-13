
import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'custom-hooks'
import { saveSelectedId } from 'app/valves/org/lnb-org/lnb-reducer';
import Icon from '@core/components/icon'
import { selectLnbId } from 'app/valves/org/lnb-org/lnb-selector';
import { Settings } from '@core/context/settingsContext'

import Link from 'next/link'
import { styled, useTheme } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

// ** Components
import Autocomplete from 'layouts/components/Autocomplete'

// import ModeToggler from '@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from '@core/layouts/components/shared-components/UserDropdown'

// import LanguageDropdown from '@core/layouts/components/shared-components/LanguageDropdown'
// import NotificationDropdown, {
//   NotificationsType
// } from '@core/layouts/components/shared-components/NotificationDropdown'
// import ShortcutsDropdown, { ShortcutsType } from '@core/layouts/components/shared-components/ShortcutsDropdown'

// ** Hook Import
import { useAuth } from 'custom-hooks/useAuth'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
  getData: (values: number) => void
}

// const notifications: NotificationsType[] = [
//   {
//     meta: 'Today',
//     avatarAlt: 'Flora',
//     title: 'Congratulation Flora! 🎉',
//     avatarImg: '/images/avatars/4.png',
//     subtitle: 'Won the monthly best seller badge'
//   },
//   {
//     meta: 'Yesterday',
//     avatarColor: 'primary',
//     subtitle: '5 hours ago',
//     avatarText: 'Robert Austin',
//     title: 'New user registered.'
//   },
//   {
//     meta: '11 Aug',
//     avatarAlt: 'message',
//     title: 'New message received 👋🏻',
//     avatarImg: '/images/avatars/5.png',
//     subtitle: 'You have 10 unread messages'
//   },
//   {
//     meta: '25 May',
//     title: 'Paypal',
//     avatarAlt: 'paypal',
//     subtitle: 'Received Payment',
//     avatarImg: '/images/misc/paypal.png'
//   },
//   {
//     meta: '19 Mar',
//     avatarAlt: 'order',
//     title: 'Received Order 📦',
//     avatarImg: '/images/avatars/3.png',
//     subtitle: 'New order received from John'
//   },
//   {
//     meta: '27 Dec',
//     avatarAlt: 'chart',
//     subtitle: '25 hrs ago',
//     avatarImg: '/images/misc/chart.png',
//     title: 'Finance report has been generated'
//   }
// ]

// const shortcuts: ShortcutsType[] = [
//   {
//     title: 'Calendar',
//     url: '/apps/calendar',
//     subtitle: 'Appointments',
//     icon: 'mdi:calendar-month-outline'
//   },
//   {
//     title: 'Invoice App',
//     url: '/apps/invoice/list',
//     subtitle: 'Manage Accounts',
//     icon: 'mdi:receipt-text-outline'
//   },
//   {
//     title: 'Users',
//     url: '/apps/user/list',
//     subtitle: 'Manage Users',
//     icon: 'mdi:account-outline'
//   },
//   {
//     url: '/apps/roles',
//     title: 'Role Management',
//     subtitle: 'Permissions',
//     icon: 'mdi:shield-check-outline'
//   },
//   {
//     url: '/',
//     title: 'Dashboard',
//     icon: 'mdi:chart-pie',
//     subtitle: 'User Dashboard'
//   },
//   {
//     title: 'Settings',
//     icon: 'mdi:cog-outline',
//     subtitle: 'Account Settings',
//     url: '/pages/account-settings/account'
//   },
//   {
//     title: 'Help Center',
//     subtitle: 'FAQs & Articles',
//     icon: 'mdi:help-circle-outline',
//     url: '/pages/help-center'
//   },
//   {
//     title: 'Dialogs',
//     subtitle: 'Useful Dialogs',
//     icon: 'mdi:window-maximize',
//     url: '/pages/dialog-examples'
//   }
// ]

const gnbData = [
  // { id: 1, name: ' 대시보드 ' },
  // { id: 2, name: ' 쇼핑몰 구축 ' },
  { id: 3, name: ' 상품관리 ' },
  { id: 4, name: ' 주문관리 ' },
  { id: 5, name: ' 회원관리 ' },
  { id: 6, name: ' 게시판 ' },
  { id: 7, name: ' 메일/팝업 ' },
  // { id: 8, name: ' 접속통계 ' }

  // { id: 9, name: '생산' },
  // { id: 10, name: '영업' },
  // { id: 11, name: '인증센터' }
]

const AppBarContent = (props: Props) => {
  const dispatch = useAppDispatch()
  const { hidden, settings, getData } = props
  const gnbButton = React.useRef<HTMLButtonElement>(null)
  const auth = useAuth()

  const handleClick = (data: { id: number }) => {
    getData(data.id)
    sessionStorage.setItem('gnbId', JSON.stringify(data.id))
    const gnbButtons = Array.from(document.getElementsByClassName('gnb-button') as HTMLCollectionOf<HTMLElement>)

    //   gnbButtons.forEach((gnbButton) => {
    //     gnbButton?.style.setProperty('background-color', 'white');
    // });
    // document.getElementById("btn-"+data.id)?.style.setProperty('background-color', 'red');

    gnbButtons.forEach(gnbButton => {
      gnbButton.classList.remove('active')
    })
    document.getElementById('btn-' + data.id)?.classList.add('active')
  }

  const selectedId = useSelector(selectLnbId);
  console.log("선택한 사이드메뉴 ", selectedId);

  const LinkStyled = styled(Link)({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none'
  })

  const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
    fontWeight: 600,
    lineHeight: 'normal',
    textTransform: 'uppercase',
    color: theme.palette.text.primary,
    transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
  }))

  React.useEffect(() => {

    const gnbButtons = Array.from(document.getElementsByClassName('gnb-button') as HTMLCollectionOf<HTMLElement>)
    const gnbId = sessionStorage.getItem('gnbId')
    if (gnbId) {
      const id = JSON.parse(gnbId)
      getData(id)
      gnbButtons.forEach(gnbButton => {
        gnbButton.classList.remove('active')
      })
      document.getElementById('btn-' + id)?.classList.add('active')
    } else {
      getData(1)
      gnbButtons.forEach(gnbButton => {
        gnbButton.classList.remove('active')
      })
      document.getElementById('btn-1')?.classList.add('active')
    }
  }, [getData])

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
      <LinkStyled href='/'>
          <HeaderTitle variant='h1' sx={{ color: '#fff' }}>
            혜림봉투
          </HeaderTitle>
        </LinkStyled>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center', height: '100%' }}>
        {gnbData.map(data => {
          return (
            <div key={data.id}
              //className='nav-menu'
              className={selectedId === String(data.id) ? "selected" : null}
            >
              {/* <a onClick={() => onclick(data)}>{data.name}</a> */}
              <button
                ref={gnbButton}
                id={'btn-' + data.id}
                className={'gnb-button'}
                onClick={() => {
                  console.log('리덕스에 저장하는 아이디 : ', String(data.id))
                  dispatch(saveSelectedId(String(data.id)))
                  handleClick({ id: data.id })
                }}
              >
                {data.name}
              </button>
            </div>
          )
        })}
        {/* {hidden && !settings.navHidden ? (
        <IconButton color='inherit' sx={{ ml: -2.75 }} onClick={toggleNavVisibility}>
          <Icon icon='mdi:menu' />
        </IconButton>
      ) : null}
      {auth.user && <Autocomplete hidden={hidden} settings={settings} />} */}
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        {auth.user && (
          <>
            <Autocomplete hidden={hidden} settings={settings} />
            <IconButton color='inherit' sx={{ ml: -2.75 }}>
              <Icon icon='uil:map-marker-question' />
            </IconButton>
            <IconButton color='inherit' sx={{ ml: -2.75 }}>
              <Icon icon='mdi:bell' />
            </IconButton>
            <UserDropdown settings={settings} />
          </>
        )}
      </Box>
    </Box>
  )
}

export default AppBarContent

// ** Next Import
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next/types'

// ** Third Party Imports
import axios from 'axios'

//**TODO : Types
// import { MailLayoutType, MailType } from 'src/types/apps/emailTypes'

import { Dispatch } from 'redux'
import { ReactElement, SyntheticEvent } from 'react'

export type MailLabelType = 'personal' | 'company' | 'important' | 'private'

export type MailFolderType = 'inbox' | 'sent' | 'draft' | 'starred' | 'spam' | 'trash'

export type RouteParams = {
  label?: string
  folder?: string
}

export type MailLayoutType = RouteParams & {}

export type MailAttachmentType = {
  url: string
  size: string
  fileName: string
  thumbnail: string
}

export type FieldMenuItems = {
  src: string
  name: string
  value: string
}

export type FetchMailParamsType = { q: string; folder: MailFolderType; label: MailLabelType }

export type PaginateMailParamsType = { dir: 'next' | 'previous'; emailId: number }

export type UpdateMailParamsType = {
  emailIds: number[] | number | []
  dataToUpdate: { folder?: MailFolderType; isStarred?: boolean; isRead?: boolean; label?: MailLabelType }
}

export type UpdateMailLabelType = {
  label: MailLabelType
  emailIds: number[] | number | []
}

export type MailFromType = {
  name: string
  email: string
  avatar: string
}

export type MailToType = {
  name: string
  email: string
}

export type MailMetaType = {
  spam: number
  inbox: number
  draft: number
}

export type MailType = {
  id: number
  message: string
  subject: string
  isRead: boolean
  to: MailToType[]
  cc: string[] | []
  isStarred: boolean
  bcc: string[] | []
  from: MailFromType
  time: Date | string
  replies: MailType[]
  hasNextMail?: boolean
  folder: MailFolderType
  labels: MailLabelType[]
  hasPreviousMail?: boolean
  attachments: MailAttachmentType[]
}

export type MailFoldersArrType = {
  icon: ReactElement
  name: MailFolderType
}
export type MailFoldersObjType = {
  [key: string]: any[]
}

export type MailStore = {
  mails: MailType[] | null
  selectedMails: number[]
  currentMail: null | MailType
  mailMeta: null | MailMetaType
  filter: {
    q: string
    label: string
    folder: string
  }
}

export type MailLabelColors = {
  personal: string
  company: string
  private: string
  important: string
}

export type MailSidebarType = {
  hidden: boolean
  store: MailStore
  lgAbove: boolean
  dispatch: Dispatch<any>
  leftSidebarOpen: boolean
  leftSidebarWidth: number
  mailDetailsOpen: boolean
  toggleComposeOpen: () => void
  handleLeftSidebarToggle: () => void
  setMailDetailsOpen: (val: boolean) => void
  handleSelectAllMail: (val: boolean) => void
}

export type MailLogType = {
  query: string
  hidden: boolean
  store: MailStore
  lgAbove: boolean
  dispatch: Dispatch<any>
  direction: 'ltr' | 'rtl'
  mailDetailsOpen: boolean
  routeParams: RouteParams
  labelColors: MailLabelColors
  setQuery: (val: string) => void
  handleLeftSidebarToggle: () => void
  getCurrentMail: (id: number) => void
  handleSelectMail: (id: number) => void
  setMailDetailsOpen: (val: boolean) => void
  handleSelectAllMail: (val: boolean) => void
  updateMail: (data: UpdateMailParamsType) => void
  updateMailLabel: (data: UpdateMailLabelType) => void
  paginateMail: (data: PaginateMailParamsType) => void
}

export type MailDetailsType = {
  mail: MailType
  hidden: boolean
  dispatch: Dispatch<any>
  direction: 'ltr' | 'rtl'
  mailDetailsOpen: boolean
  routeParams: RouteParams
  labelColors: MailLabelColors
  folders: MailFoldersArrType[]
  foldersObj: MailFoldersObjType
  setMailDetailsOpen: (val: boolean) => void
  updateMail: (data: UpdateMailParamsType) => void
  paginateMail: (data: PaginateMailParamsType) => void
  handleStarMail: (e: SyntheticEvent, id: number, value: boolean) => void
  handleLabelUpdate: (id: number | number[], label: MailLabelType) => void
  handleFolderUpdate: (id: number | number[], folder: MailFolderType) => void
}

export type MailComposeType = {
  mdAbove: boolean
  composeOpen: boolean
  toggleComposeOpen: () => void
  composePopupWidth: number | string
}


// ** Demo Components Imports
//**TODO : import Email from 'src/views/apps/email/Email' */

// ** React Imports
import { useState, useEffect } from 'react'

// ** Redux Imports
import { useDispatch, useSelector } from 'react-redux'

// ** MUI Imports
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Hooks
import { useSettings } from '@core/hooks/useSettings'

// ** Types
import { RootState, AppDispatch } from 'store'
// import { MailLabelColors } from 'src/types/apps/emailTypes 충돌나서 주석처리함

// ** Email App Component Imports
import MailLog from 'views/apps/email/MailLog'
import SidebarLeft from 'views/apps/email/SidebarLeft'
import ComposePopup from 'views/apps/email/ComposePopup'

// ** Actions
import {
  fetchMails,
  updateMail,
  paginateMail,
  getCurrentMail,
  updateMailLabel,
//  handleSelectMail,
//  handleSelectAllMail
} from 'app/deliveries/org/mail-org/mail-thunk'
import {
  // fetchMails,
  // updateMail,
  // paginateMail,
  // getCurrentMail,
  // updateMailLabel,
 handleSelectMail,
 handleSelectAllMail
} from 'app/deliveries/org/mail-org/mail-slice'

// ** Variables
const labelColors: MailLabelColors = {
  private: 'error',
  personal: 'success',
  company: 'primary',
  important: 'warning'
}

const Email = ({ folder, label }: MailLayoutType) => {
  // ** States
  const [query, setQuery] = useState<string>('')
  const [composeOpen, setComposeOpen] = useState<boolean>(false)
  const [mailDetailsOpen, setMailDetailsOpen] = useState<boolean>(false)
  const [leftSidebarOpen, setLeftSidebarOpen] = useState<boolean>(false)

  // ** Hooks
  const theme = useTheme()
  const { settings } = useSettings()
  const dispatch = useDispatch<AppDispatch>()
  const lgAbove = useMediaQuery(theme.breakpoints.up('lg'))
  const mdAbove = useMediaQuery(theme.breakpoints.up('md'))
  const smAbove = useMediaQuery(theme.breakpoints.up('sm'))
  const hidden = useMediaQuery(theme.breakpoints.down('lg'))
  const store = useSelector((state: RootState) => state.mails)

  // ** Vars
  const leftSidebarWidth = 260
  const { skin, direction } = settings
  const composePopupWidth = mdAbove ? 754 : smAbove ? 520 : '100%'
  const routeParams = {
    label: label || '',
    folder: folder || 'inbox'
  }

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchMails({ q: query || '', folder: routeParams.folder, label: routeParams.label }))
  }, [dispatch, query, routeParams.folder, routeParams.label])

  const toggleComposeOpen = () => setComposeOpen(!composeOpen)
  const handleLeftSidebarToggle = () => setLeftSidebarOpen(!leftSidebarOpen)

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        borderRadius: 1,
        overflow: 'hidden',
        position: 'relative',
        boxShadow: skin === 'bordered' ? 0 : 6,
        ...(skin === 'bordered' && { border: `1px solid ${theme.palette.divider}` })
      }}
    >
      <SidebarLeft
        store={store}
        hidden={hidden}
        lgAbove={lgAbove}
        dispatch={dispatch}
        mailDetailsOpen={mailDetailsOpen}
        leftSidebarOpen={leftSidebarOpen}
        leftSidebarWidth={leftSidebarWidth}
        toggleComposeOpen={toggleComposeOpen}
        setMailDetailsOpen={setMailDetailsOpen}
        handleSelectAllMail={handleSelectAllMail}
        handleLeftSidebarToggle={handleLeftSidebarToggle}
      />
      <MailLog
        query={query}
        store={store}
        hidden={hidden}
        lgAbove={lgAbove}
        dispatch={dispatch}
        setQuery={setQuery}
        direction={direction}
        updateMail={updateMail}
        routeParams={routeParams}
        labelColors={labelColors}
        paginateMail={paginateMail}
        getCurrentMail={getCurrentMail}
        updateMailLabel={updateMailLabel}
        mailDetailsOpen={mailDetailsOpen}
        handleSelectMail={handleSelectMail}
        setMailDetailsOpen={setMailDetailsOpen}
        handleSelectAllMail={handleSelectAllMail}
        handleLeftSidebarToggle={handleLeftSidebarToggle}
      />
      <ComposePopup
        mdAbove={mdAbove}
        composeOpen={composeOpen}
        composePopupWidth={composePopupWidth}
        toggleComposeOpen={toggleComposeOpen}
      />
    </Box>
  )
}


const EmailApp = ({ folder }: MailLayoutType) => {
  return <Email folder={folder} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get('/apps/email/allEmails')
  const data: MailType[] = await res.data.emails

  const paths = data.map((mail: MailType) => ({
    params: { folder: mail.folder }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = ({ params }: GetStaticPropsContext) => {
  return {
    props: {
      folder: params?.folder
    }
  }
}

EmailApp.contentHeightFixed = true

export default EmailApp

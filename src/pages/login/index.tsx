import { useState, ReactNode, MouseEvent } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import Typography, { TypographyProps } from '@mui/material/Typography'
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'

// ** Icon Imports
import Icon from '@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'custom-hooks/useAuth'
import useBgColor from '@core/hooks/useBgColor'
import { useSettings } from '@core/hooks/useSettings'

import { AuthorAtom } from "app/author-domain"
import themeConfig from 'configs/themeConfig'

// ** Layout Import
import BlankLayout from '@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV2 from 'views/pages/auth/FooterIllustrationsV2'
import { em } from '@fullcalendar/core/internal-common'


const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const schema = yup.object().shape({
  email: yup.string().required('한글 이름을 입력해주세요.'),
  password: yup.string().required('비밀번호를 입력해주세요')
})

const defaultValues = {
  password: 'staff001!',
  email: 'staff001'
}

interface FormData {
  email: string
  password: string
}

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(true)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  // ** Hooks
  const auth = useAuth()
  const theme = useTheme()
  const bgColors = useBgColor()
  const { settings } = useSettings()

  // const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** Vars
  const { skin } = settings

  const {
    control,
    setError,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onSubmit',
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: FormData) => {
    const { email, password } = data
    const AuthorAtomToLogin = new AuthorAtom();

    AuthorAtomToLogin.enName = email // TODO : server key value is enName or krName
    AuthorAtomToLogin.password = password
    AuthorAtomToLogin.rememberMe = true

    // AuthorAtomToLogin.rememberMe = rememberMe
    auth.login(AuthorAtomToLogin, () => {
      setError('email', {
        type: 'manual',
        message: '아이디 또는 비밀번호가 일치하지 않습니다.'
      })
    })
  }

  return (
    <section className='login'>
      <div className='login-wrap'>
        <Typography variant='h1'>로그인</Typography>
        <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth>
            <Controller
              name='email'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  autoFocus
                  label='아이디'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.email)}
                  placeholder='admin@materio.com'
                />
              )}
            />
            {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor='auth-login-v2-password' error={Boolean(errors.password)}>
              Password
            </InputLabel>
            <Controller
              name='password'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <OutlinedInput
                  value={value}
                  onBlur={onBlur}
                  label='Password'
                  onChange={onChange}
                  id='auth-login-v2-password'
                  error={Boolean(errors.password)}
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onMouseDown={e => e.preventDefault()}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <Icon icon={showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} fontSize={20} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )}
            />
            {errors.password && (
              <FormHelperText sx={{ color: 'error.main' }} id=''>
                {errors.password.message}
              </FormHelperText>
            )}
          </FormControl>
          <div className='save-id'>
            <FormControlLabel
              label='아이디 저장'
              control={<Checkbox checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />}
            />
          </div>
          <Button fullWidth size='large' type='submit' variant='contained'>
            로그인
          </Button>
          {/* <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Typography variant='body2' sx={{ mr: 2 }}>
            New on our platform?
          </Typography>
          <Typography variant='body2'>
            <LinkStyled href='/register'>Create an account</LinkStyled>
          </Typography>
        </Box>
        <Divider sx={{ my: theme => `${theme.spacing(5)} !important` }}>or</Divider>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IconButton
            href='/'
            component={Link}
            sx={{ color: '#497ce2' }}
            onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
          >
            <Icon icon='mdi:facebook' />
          </IconButton>
          <IconButton
            href='/'
            component={Link}
            sx={{ color: '#1da1f2' }}
            onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
          >
            <Icon icon='mdi:twitter' />
          </IconButton>
          <IconButton
            href='/'
            component={Link}
            onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
            sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : 'grey.300') }}
          >
            <Icon icon='mdi:github' />
          </IconButton>
          <IconButton
            href='/'
            component={Link}
            sx={{ color: '#db4437' }}
            onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
          >
            <Icon icon='mdi:google' />
          </IconButton>
        </Box> */}
        </form>
      </div>
    </section>
  )
}

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

LoginPage.guestGuard = true

export default LoginPage


import { useState } from 'react'
import type { GetStaticProps, NextPage } from "next"
// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Icon Imports
import Image from 'next/image'
import del from '/public/images/icons/ico-delete.svg'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'custom-hooks/useAuth'
import { useSettings } from '@core/hooks/useSettings'

// ** Layout Import
import BlankLayout from '@core/layouts/BlankLayout'

const BoxWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '400px',
  margin: '0 auto',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}))

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down('md')]: { mt: theme.spacing(8) }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const schema = yup.object().shape({
  admin_id: yup.string().required('한글 이름을 입력해주세요.'),
  password: yup.string().required('비밀번호를 입력해주세요')
})

const defaultValues = {
  password: '1234',
  admin_id: '이강산'
}

const Login = () => {
  const [rememberMe, setRememberMe] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  // ** Hooks
  const auth = useAuth()
  const theme = useTheme()
  const { settings } = useSettings()

  const {
    control,
    setError,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema)
  })

  function onSubmit(data: any) {
    const { admin_id, password } = data

    /**
    auth.login({ admin_id, password, rememberMe }, () => {
      setError('admin_id', {
        type: 'manual',
        message: '아이디 또는 비밀번호가 일치하지 않습니다.'
      })
    }) */
  }

  return (
    <BoxWrapper>
      <Box sx={{ mb: '29px', mt: '114px' }}>
        <TypographyStyled sx={{ fontSize: '20px' }}>로그인</TypographyStyled>
      </Box>
      <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth sx={{ mb: '8px' }}>
          <Controller
            name='admin_id'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <TextField
                autoFocus
                value={value || ''}
                onChange={onChange}
                placeholder='한글 이름을 입력해주세요'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton onClick={() => reset({ admin_id: '' })}>
                        {del && <Image src={del} width='24' height='24' alt='' />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth>
          <Controller
            name='password'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <TextField
                type='password'
                value={value || ''}
                onChange={onChange}
                id='auth-login-v2-password'
                placeholder='비밀번호를 입력해주세요'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton onClick={() => reset({ password: '' })}>
                        {del && <Image src={del} width='24' height='24' alt='' />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            )}
          />
        </FormControl>
        <Box sx={{ mb: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <FormControlLabel
            label='아이디 저장'
            control={<Checkbox checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />}
          />
        </Box>
        <Box sx={{ minHeight: '29px' }}>
          {/* <Box sx={{ mb: 1 }}>
            {errors.admin_id && <FormHelperText sx={{ color: 'error.main' }}>{errors.admin_id.message}</FormHelperText>}
          </Box> */}
          <Box sx={{ mb: 1 }}>
            {errors.password && (
              <FormHelperText sx={{ color: 'error.main' }} id=''>
                {/* {errors.password.message} */}
              </FormHelperText>
            )}
          </Box>
        </Box>
        <Button fullWidth sx={{ height: '56px' }} type='submit' variant='contained'>
          <span style={{ fontSize: '16px' }}>로그인</span>
        </Button>
      </form>
    </BoxWrapper>
  )
}

Login.getLayout = (page: any) => <BlankLayout>{page}</BlankLayout>
Login.guestGuard = true

export default Login

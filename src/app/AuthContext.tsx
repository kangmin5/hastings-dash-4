import { AuthorAtom, AuthorDto, AuthorBuilder } from './author-domain'
import { AuthorService } from "./author-service"
import { createContext, useEffect, useState, ReactNode } from 'react'
import { useRouter } from 'next/router'
import { authConfig } from 'configs'
import { DateMap } from './utils/atom/date-atom'

// import { EmployeeAuthType, EmployeeToLogin, ErrCallbackType, EmployeeDataType, } from 'boxes'
// import ErrorCallbackType from "app/general-affairs/troubleshooter/errors"
// import { Timer } from 'app/technical-support/memento/calendars'


type AuthorType = {
  loading: boolean
  logout: () => void
  user: AuthorAtom | null
  setLoading: (value: boolean) => void
  setUser: (value: AuthorAtom | null) => void
  // login: (params: AuthorAtom, errorCallback?: ErrorCallbackType) => void
  login: (params: AuthorAtom, errorCallback?: any) => void
}



const defaultProvider: AuthorType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<AuthorAtom | null>(defaultProvider.user)
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)
  const router = useRouter()

  useEffect(function () {
    const initAuth = async (): Promise<void> => {
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)
      const storedUser = window.localStorage.getItem('userData')
      console.log('[', DateMap().get(), '] 최초 실행 . 토큰 유무 체크 ..', storedToken ? '있음' : '없음')
      console.log(' 사용자 정보 ..', storedUser ? '있음' : '없음')
      if (storedToken) {
        setLoading(true)

        if (storedUser) {
          setLoading(false)
          setUser(JSON.parse(storedUser))
        }

        // await axios
        //   .get(authConfig.meEndpoint, {
        //     headers: {
        //       Authorization: storedToken
        //     }
        //   })
        //   .then(async response => {
        //     setLoading(false)
        //     setUser({ ...response.data.userData })
        //   })
        //   .catch(() => {
        //     localStorage.removeItem('userData')
        //     localStorage.removeItem('refreshToken')
        //     localStorage.removeItem('accessToken')
        //     setUser(null)
        //     setLoading(false)
        //     if (authConfig.onTokenExpiration === 'logout' && !router.pathname.includes('login')) {
        //       router.replace('/login')
        //     }
        //   })
      } else {
        setLoading(false)
      }
    }

    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const handleLogin = (employeeToLogin: AuthorAtom, errorCallback?: ErrorCallbackType) => {
  const handleLogin = (employeeToLogin: AuthorAtom, errorCallback?: any) => {
    console.log(`로그인 시도 정보: ${JSON.stringify(employeeToLogin)} `)

    const service = new AuthorService()

    const authorVo = new AuthorBuilder()
      .enName('staff001')
      .password('staff001!')
      .role('admin')
      .build()

    service.getLoginAxios(authorVo)
      .then(async (response: any) => {


        if (response.data.code === 200) {
          if (employeeToLogin.rememberMe) {
            const userData = response.data.employee
            console.log(`인증맥락 => 로그인 성공  :  ${JSON.stringify(response.data)}!`)
/**
{
  "code": 200,
  "success": true,
  "message": "OK",
  "accessToken": "",
  "json": {
    "krName": "스태프001",
    "enName": "staff001",
    "team": "개발",
    "title": "관리자"
  },
  "array": [
    "array 없어요"
  ]
}
 */

            window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.accessToken)
            
            
            window.localStorage.setItem('userData', JSON.stringify({ ...response.data.json, role: 'admin' }))
            //** userData 를 고치면 무한로딩에 빠진다 !! */
            console.log(`로컬저장소 => userData  :  ${window.localStorage.getItem('userData')}!`)
          } else {
            alert(` This Alert is not rememberMe, ${response.data}!`)
          }
          const returnUrl = router.query.returnUrl
          setUser({ ...response.data.userData, role: 'admin' })

          // params.rememberMe ? window.localStorage.setItem('userData', response.data.userData) : null

          const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
          router.replace(redirectURL as string)
        } else {
          // if (errorCallback) errorCallback(response.data.code)
        }
      })

      .catch((err: any) => {
        console.log(' 로그인 실패')

        // if (errorCallback) errorCallback(err)
      })
  }

  const handleLogout = async () => {
    const service = new AuthorService()
    const authorVo = new AuthorBuilder()
      .enName('staff001')
      .password('staff001!')
      .role('admin')
      .build()
    service.getLoginAxios(authorVo)
      .then(() => {
        setUser(null)
        window.localStorage.removeItem('userData')
        window.localStorage.removeItem(authConfig.storageTokenKeyName)
        router.push('/login')
      })
      .catch((err: any) => {
        console.log(err)
      })
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }

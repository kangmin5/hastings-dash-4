import axios, { AxiosResponse } from 'axios'
import { AjaxService } from './ajax-service'
import { AjaxVo } from './ajax-vo'
import { AuthorAtom } from './author-domain'
import { urn, action } from './enums'
import { GridColDef as Column } from '@mui/x-data-grid'
// import { AuthorAtomGridColumns } from 'app/technical-support/flyweight'

export class AuthorService {
  // private static instance: AuthorService
  // private router: AjaxService

  // private constructor() {
  //   this.router  = AjaxServices.new().type()
  // }

  // public static new(): AuthorService {
  //   if (!AuthorService.instance) {
  //     AuthorService.instance = new AuthorService()
  //   }

  //   return AuthorService.instance
  // }

  protected service: AjaxService
  constructor() {
    this.service = new AjaxService()
  }

  add(parameter: AuthorAtom): Promise<AxiosResponse<any, any>> {
    const router = new AjaxService()
    const { method, url, headers, data }: AjaxVo = this.service.http({
      url: `${urn.add}`,
      method: `${action.add}`,
      parameter
    })

    return axios({ method, url, headers, data })
  }
  all(): Promise<AxiosResponse<any, any>> {
    const { method, url, headers }: AjaxVo = this.service.http({
      url: `${urn.all}`,
      method: `${action.all}`
    })

    return axios({ method, url })
  }
  some(parameter: AuthorAtom): Promise<AxiosResponse<any, any>> {
    const { method, url, headers, data }: AjaxVo = this.service.http({
      url: `${urn.some}`,
      method: `${action.some}`,
      parameter
    })

    return axios({ method, url })
  }
  one(parameter: AuthorAtom): Promise<AxiosResponse<any, any>> {
    const { method, url, headers }: AjaxVo = this.service.http({
      url: `${urn.one}`,
      method: `${action.one}`
    })

    return axios({ method, url })
  }
  alter(parameter: AuthorAtom): Promise<AxiosResponse<any, any>> {
    const { method, url, headers, data }: AjaxVo = this.service.http({
      url: `${urn.alter}`,
      method: `${action.alter}`,
      parameter
    })

    return axios({ method, url, headers, data })
  }
  remove(parameter: AuthorAtom): Promise<AxiosResponse<any, any>> {
    const { method, url, headers }: AjaxVo = this.service.http({
      url: `${urn.remove}`,
      method: `${action.remove}`
    })

    return axios({ method, url })
  }

  getLoginAxios(authorVo: AuthorAtom) {
    console.log('1-아이디 : ', authorVo.enName)
    console.log('2-비밀번호 : ', authorVo.password)

    const { method, url, headers, data }: AjaxVo = this.service.http({
      url: 'admin/authors/staff?do=login',
      method: 'post',
      data: {
        enName: authorVo.enName,
        password: authorVo.password,
        krName: authorVo.krName
      }
    })

    console.log('1-헤더 :', JSON.stringify(headers))
    console.log('2-메소드 :', method)
    console.log('3-데이터 :', data)

    return axios({ method, url, headers, data })
  }

  getLogoutAxios() {
    const { method, url, headers, data }: AjaxVo = this.service.http({
      url: '',
      method: ''
    })

    return axios({ method, url, headers })
  }
}

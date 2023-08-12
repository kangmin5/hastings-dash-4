import axios, { AxiosResponse } from 'axios'
import { AuthorVo } from 'app/authors/mo/author-mo/author-vo'
import { AuthorUrl as url } from './author-union'
import { AjaxRouter } from 'app/utils/org/ajax-org/ajax-router'
import { AjaxUnion as api } from 'app/utils/org/ajax-org/ajax-union'
import { AjaxVo } from 'app/utils/org/ajax-org/ajax-vo'
import { AjaxData } from 'app/utils/org/ajax-org/ajax-data'
const get = api.get
const post = api.post
const put = api.put
const del = api.del
const getAll = url.getAll
const getBy = url.getBy
const getById = url.getById
const addOne = url.addOne
const alterById = url.alterById
const delById = url.delById
const login = url.login

import { CrudAxios } from 'app/utils/mo/collection-mo/crud-axios'

export interface AuthorType extends CrudAxios<AuthorVo> {}

export class AuthorAxios implements AuthorType {
  private static instance: AuthorAxios
  private router: AjaxRouter

  private constructor() {
    this.router = AjaxData.stream().connect()
  }

  public static then(): AuthorAxios {
    if (!AuthorAxios.instance) {
      AuthorAxios.instance = new AuthorAxios()
    }

    return AuthorAxios.instance
  }

  addOne(parameter: AuthorVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: addOne,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }
  getAll(parameter: AuthorVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getAll,
      method: get,
      data: null
    })

    return axios({ method, url, headers })
  }

  getBy(parameter: AuthorVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getBy,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  getById(parameter: AuthorVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getById,
      method: get,
      data: parameter
    })

    return axios({ method, url, headers })
  }

  alterById(parameter: AuthorVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: alterById,
      method: put,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  delById(parameter: AuthorVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: delById,
      method: del,
      data: parameter
    })

    return axios({ method, url, headers })
  }

  login(parameter: AuthorVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: login,
      method: post,
      data: parameter
    })
    console.log(' 로그인 정보 : ', login)
    return axios({ method, url, headers })
  }
}

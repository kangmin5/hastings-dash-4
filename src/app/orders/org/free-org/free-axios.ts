import axios, { AxiosResponse } from 'axios'
import { FreeVo } from '../../mo/free-mo/free-vo'
import { AjaxUnion as api } from 'app/utils/org/ajax-org/ajax-union'
import { AjaxVo } from 'app/utils/org/ajax-org/ajax-vo'
import { AjaxData } from 'app/utils/org/ajax-org/ajax-data'
import { AjaxRouter } from 'app/utils/org/ajax-org/ajax-router'
import { FreeUrl as url } from './free-union'
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
const hasFreeNo = url.hasFreeNo
import { CrudAxios } from 'app/utils/mo/collection-mo/crud-axios'

export interface FreeType extends CrudAxios<FreeVo> {
  hasFreeNo(parameter: string): Promise<AxiosResponse<any>>
}

export class FreeAxios implements FreeType {
  private static instance: FreeAxios
  private router: AjaxRouter

  private constructor() {
    this.router = AjaxData.stream().connect()
  }

  public static then(): FreeAxios {
    if (!FreeAxios.instance) {
      FreeAxios.instance = new FreeAxios()
    }
    return FreeAxios.instance
  }

  addOne(parameter: FreeVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: addOne,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }
  getAll(parameter: FreeVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getAll,
      method: get,
      data: null
    })

    return axios({ method, url, headers })
  }

  getBy(parameter: FreeVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getBy,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  getById(parameter: FreeVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getById,
      method: get,
      data: parameter
    })

    return axios({ method, url, headers })
  }

  alterById(parameter: FreeVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: alterById,
      method: put,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  delById(parameter: FreeVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: delById,
      method: del,
      data: parameter
    })

    return axios({ method, url, headers })
  }
  hasFreeNo(parameter: string): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: hasFreeNo,
      method: get,
      data: parameter
    })

    return axios({ method, url, headers })
  }
}

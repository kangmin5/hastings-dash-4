import axios, { AxiosResponse } from 'axios'
import { UnshipVo } from 'app/deliveries/mo/unship-mo/unship-vo'
import { UnshipUrl as url } from './unship-union'
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

import { CrudAxios } from 'app/utils/mo/collection-mo/crud-axios'

export interface UnshipType extends CrudAxios<UnshipVo> {
  addUnshipTypes(parameter: UnshipVo): Promise<AxiosResponse<any>>
  allUnshipTypes(): Promise<AxiosResponse<any>>
}
export class UnshipAxios implements UnshipType {
  private static instance: UnshipAxios
  private router: AjaxRouter

  private constructor() {
    this.router = AjaxData.stream().connect()
  }
  addUnshipTypes(parameter: UnshipVo): Promise<AxiosResponse<any, any>> {
    throw new Error('Method not implemented.')
  }
  allUnshipTypes(): Promise<AxiosResponse<any, any>> {
    throw new Error('Method not implemented.')
  }

  public static then(): UnshipAxios {
    if (!UnshipAxios.instance) {
      UnshipAxios.instance = new UnshipAxios()
    }

    return UnshipAxios.instance
  }

  addOne(parameter: UnshipVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: addOne,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }
  getAll(parameter: UnshipVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getAll,
      method: get,
      data: null
    })

    return axios({ method, url, headers })
  }

  getBy(parameter: UnshipVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getBy,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  getById(parameter: UnshipVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getById,
      method: get,
      data: parameter
    })

    return axios({ method, url, headers })
  }

  alterById(parameter: UnshipVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: alterById,
      method: put,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  delById(parameter: UnshipVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: delById,
      method: del,
      data: parameter
    })

    return axios({ method, url, headers })
  }
}

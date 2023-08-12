import axios, { AxiosResponse } from 'axios'
import { CatVo } from 'app/products/mo/cat-mo/cat-vo'
import { CatUrl as url } from './cat-union'
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

export interface CatType extends CrudAxios<CatVo> {
  addCatKind(parameter: CatVo): Promise<AxiosResponse<any>>
  allCatKind(): Promise<AxiosResponse<any>>
}

export class CatAxios implements CatType {
  private static instance: CatAxios
  private router: AjaxRouter

  private constructor() {
    this.router = AjaxData.stream().connect()
  }
  allCatKind(): Promise<AxiosResponse<any, any>> {
    throw new Error('Method not implemented.')
  }
  addCatKind(parameter: CatVo): Promise<AxiosResponse<any, any>> {
    throw new Error('Method not implemented.')
  }
  allCatKinds(): Promise<AxiosResponse<any, any>> {
    throw new Error('Method not implemented.')
  }

  public static then(): CatAxios {
    if (!CatAxios.instance) {
      CatAxios.instance = new CatAxios()
    }

    return CatAxios.instance
  }

  addOne(parameter: CatVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: addOne,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }
  getAll(parameter: CatVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getAll,
      method: get,
      data: null
    })

    return axios({ method, url, headers })
  }

  getBy(parameter: CatVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getBy,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  getById(parameter: CatVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getById,
      method: get,
      data: parameter
    })

    return axios({ method, url, headers })
  }

  alterById(parameter: CatVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: alterById,
      method: put,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  delById(parameter: CatVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: delById,
      method: del,
      data: parameter
    })

    return axios({ method, url, headers })
  }
}

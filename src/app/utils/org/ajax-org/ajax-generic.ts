import axios, { AxiosResponse } from 'axios'
import { AjaxVo, AjaxData, AjaxRouter } from 'app/utils/atom/api-atom/ajax/ajax-data'
import { AjaxUnion as api } from 'app/utils/atom/api-atom/ajax/ajax-union'

const get = api.get
const post = api.post
const put = api.put
const del = api.del
const getAll = ''
const getBy = ''
const getById = ''
const addOne = ''
const alterById = ''
const delById = ''

export class AjaxGeneric<T> {
  private router: AjaxRouter

  private constructor() {
    this.router = AjaxData.stream().connect()
  }

  addOne(parameter: T): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: addOne,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }
  getAll(parameter: T): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getAll,
      method: get,
      data: null
    })

    return axios({ method, url, headers })
  }

  getBy(parameter: T): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getBy,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  getById(parameter: T): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getById,
      method: get,
      data: parameter
    })

    return axios({ method, url, headers })
  }

  alterById(parameter: T): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: alterById,
      method: put,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  delById(parameter: T): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: delById,
      method: del,
      data: parameter
    })

    return axios({ method, url, headers })
  }
}

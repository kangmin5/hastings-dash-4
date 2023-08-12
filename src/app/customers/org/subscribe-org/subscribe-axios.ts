import axios, { AxiosResponse } from 'axios'
import { SubscribeVo } from 'app/customers/mo/subscribe-mo/subscribe-vo'
import { SubscribeUrl as url } from './subscribe-union'
import { AjaxRouter } from 'app/utils/org/ajax-org/ajax-router'
import { AjaxUnion as api } from 'app/utils/org/ajax-org/ajax-union'
import { AjaxVo } from 'app/utils/org/ajax-org/ajax-vo'
import { AjaxData } from 'app/utils/org/ajax-org/ajax-data'
const get = api.get
const post = api.post
const put = api.put
const del = api.del
const addOne = url.addOne
const alterById = url.alterById
const delById = url.delById
const getAll = url.getAll
const getById = url.getById
const getBy = url.getBy
const getByUser = url.getByUser

import { CrudAxios } from 'app/utils/mo/collection-mo/crud-axios'
import { CustomerVo } from 'app/customers/mo/customer-mo/customer-vo'

export interface SubscribeType extends CrudAxios<SubscribeVo> {}
export class SubscribeAxios implements SubscribeType {
  private static instance: SubscribeAxios
  private router: AjaxRouter

  private constructor() {
    this.router = AjaxData.stream().connect()
  }

  public static then(): SubscribeAxios {
    if (!SubscribeAxios.instance) {
      SubscribeAxios.instance = new SubscribeAxios()
    }

    return SubscribeAxios.instance
  }

  addOne(parameter: SubscribeVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: addOne,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }
  getAll(parameter: SubscribeVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getAll,
      method: get,
      data: null
    })

    return axios({ method, url, headers })
  }

  getBy(parameter: SubscribeVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getBy,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }
  getByUser(parameter: CustomerVo): Promise<AxiosResponse<any>> {
    console.log(' axios getByUser id: ', parameter)
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getByUser,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  getById(parameter: SubscribeVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getById + parameter.car.id,
      method: get,
      data: parameter
    })

    return axios({ method, url, headers })
  }

  alterById(parameter: SubscribeVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: alterById,
      method: put,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  delById(parameter: SubscribeVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: delById,
      method: del,
      data: parameter
    })

    return axios({ method, url, headers })
  }
}

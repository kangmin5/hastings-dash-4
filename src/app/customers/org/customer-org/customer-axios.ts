import axios, { AxiosResponse } from 'axios'
import { CrudAxios } from 'app/utils/mo/collection-mo/crud-axios'
import { CustomerVo } from 'app/customers/mo/customer-mo/customer-vo'
import { CustomerUrl as url } from './customer-union'
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

export interface CustomerType extends CrudAxios<CustomerVo> {}

export class CustomerAxios implements CustomerType {
  private static instance: CustomerAxios
  private router: AjaxRouter

  private constructor() {
    this.router = AjaxData.stream().connect()
  }

  public static then(): CustomerAxios {
    if (!CustomerAxios.instance) {
      CustomerAxios.instance = new CustomerAxios()
    }

    return CustomerAxios.instance
  }

  addOne(parameter: CustomerVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: addOne,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }
  getAll(parameter: CustomerVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getAll,
      method: get,
      data: null
    })

    return axios({ method, url, headers })
  }

  getBy(parameter: CustomerVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getBy,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  getById(parameter: CustomerVo): Promise<AxiosResponse<any>> {
    console.log('고객모달 axios getById parameter : ', parameter.car.id)
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getById + parameter.car.id,
      method: get,
      data: parameter
    })

    return axios({ method, url, headers })
  }

  alterById(parameter: CustomerVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: alterById,
      method: put,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  delById(parameter: CustomerVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: delById,
      method: del,
      data: parameter
    })

    return axios({ method, url, headers })
  }
}

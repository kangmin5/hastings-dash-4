import axios, { AxiosResponse } from 'axios'
import { CartVo } from 'app/customers/mo/cart-mo/cart-vo'
import { CartUrl as url } from './cart-union'
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
const getByUser = url.getByUser
const getById = url.getById
const addOne = url.addOne
const alterById = url.alterById
const delById = url.delById
import { CrudAxios } from 'app/utils/mo/collection-mo/crud-axios'
import { CustomerVo } from 'app/customers/mo/customer-mo/customer-vo'

export interface CartType extends CrudAxios<CartVo> {}
export class CartAxios implements CartType {
  private static instance: CartAxios
  private router: AjaxRouter

  private constructor() {
    this.router = AjaxData.stream().connect()
  }

  public static then(): CartAxios {
    if (!CartAxios.instance) {
      CartAxios.instance = new CartAxios()
    }

    return CartAxios.instance
  }

  addOne(parameter: CartVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: addOne,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }
  getAll(parameter: CartVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getAll,
      method: get,
      data: null
    })

    return axios({ method, url, headers })
  }

  getBy(parameter: CartVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getBy,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }
  getByUser(parameter: CustomerVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getByUser,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  getById(parameter: CartVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getById,
      method: get,
      data: parameter
    })

    return axios({ method, url, headers })
  }

  alterById(parameter: CartVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: alterById,
      method: put,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  delById(parameter: CartVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: delById,
      method: del,
      data: parameter
    })

    return axios({ method, url, headers })
  }
}

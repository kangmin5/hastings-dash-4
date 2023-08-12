import axios, { AxiosResponse } from 'axios'
import { ShipVo } from 'app/deliveries/mo/ship-mo/ship-vo'
import { ShipUrl as url } from 'app/deliveries/org/ship-org/ship-union'
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

export interface ShipType extends CrudAxios<ShipVo> {
  addShipTypes(parameter: ShipType): Promise<AxiosResponse<any>>
  allShipTypes(): Promise<AxiosResponse<any>>
}

export class ShipAxios implements ShipType {
  private static instance: ShipAxios
  private router: AjaxRouter

  private constructor() {
    this.router = AjaxData.stream().connect()
  }
  addShipTypes(parameter: ShipType): Promise<AxiosResponse<any, any>> {
    throw new Error('Method not implemented.')
  }
  allShipTypes(): Promise<AxiosResponse<any, any>> {
    throw new Error('Method not implemented.')
  }

  public static then(): ShipAxios {
    if (!ShipAxios.instance) {
      ShipAxios.instance = new ShipAxios()
    }

    return ShipAxios.instance
  }

  addOne(parameter: ShipVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: addOne,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }
  getAll(parameter: ShipVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getAll,
      method: get,
      data: null
    })

    return axios({ method, url, headers })
  }

  getBy(parameter: ShipVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getBy,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  getById(parameter: ShipVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getById,
      method: get,
      data: parameter
    })

    return axios({ method, url, headers })
  }

  alterById(parameter: ShipVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: alterById,
      method: put,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  delById(parameter: ShipVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: delById,
      method: del,
      data: parameter
    })

    return axios({ method, url, headers })
  }
}

import axios, { AxiosResponse } from 'axios'
import { AjaxRouter } from 'app/utils/org/ajax-org/ajax-router'
import { DealAtom } from '../../atom/deal-atom'
import { BuyUrl as url } from './buy-union'
import { AjaxUnion as api } from 'app/utils/org/ajax-org/ajax-union'
import { AjaxData } from 'app/utils/org/ajax-org/ajax-data'
import { AjaxVo } from 'app/utils/org/ajax-org/ajax-vo'
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

export interface BuyType extends CrudAxios<DealAtom> {}

export class BuyAxios implements BuyType {
  private static instance: BuyAxios
  private router: AjaxRouter

  private constructor() {
    this.router = AjaxData.stream().connect()
  }

  public static then(): BuyAxios {
    if (!BuyAxios.instance) {
      BuyAxios.instance = new BuyAxios()
    }

    return BuyAxios.instance
  }

  addOne(parameter: DealAtom): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: addOne,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }
  getAll(parameter: DealAtom): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getAll,
      method: get,
      data: null
    })

    return axios({ method, url, headers })
  }

  getBy(parameter: DealAtom): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getBy,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  getById(parameter: DealAtom): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getById,
      method: get,
      data: parameter
    })

    return axios({ method, url, headers })
  }

  alterById(parameter: DealAtom): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: alterById,
      method: put,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  delById(parameter: DealAtom): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: delById,
      method: del,
      data: parameter
    })

    return axios({ method, url, headers })
  }
}

import axios, { AxiosResponse } from 'axios'
import { ReturnApplyVo } from './return-apply-vo'
import { AjaxUnion as api } from 'app/utils/org/ajax-org/ajax-union'
import { AjaxVo } from 'app/utils/org/ajax-org/ajax-vo'
import { AjaxData } from 'app/utils/org/ajax-org/ajax-data'
import { AjaxRouter } from 'app/utils/org/ajax-org/ajax-router'
import { ReturnApplyUrl as url } from './return-apply-union'
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
export interface ReturnApplyType extends CrudAxios<ReturnApplyVo> {}

export class ReturnApplyAxios implements ReturnApplyType {
  private static instance: ReturnApplyAxios
  private router: AjaxRouter

  private constructor() {
    this.router = AjaxData.stream().connect()
  }

  public static then(): ReturnApplyAxios {
    if (!ReturnApplyAxios.instance) {
      ReturnApplyAxios.instance = new ReturnApplyAxios()
    }
    return ReturnApplyAxios.instance
  }


  addOne(parameter: ReturnApplyVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: addOne,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }
  getAll(parameter: ReturnApplyVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getAll,
      method: get,
      data: null
    })

    return axios({ method, url, headers })
  }

  getBy(parameter: ReturnApplyVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getBy,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  getById(parameter: ReturnApplyVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getById,
      method: get,
      data: parameter
    })

    return axios({ method, url, headers })
  }

  alterById(parameter: ReturnApplyVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: alterById,
      method: put,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  delById(parameter: ReturnApplyVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: delById,
      method: del,
      data: parameter
    })

    return axios({ method, url, headers })
  }

  addReturnApplyKind(parameter: ReturnApplyVo): Promise<AxiosResponse<any, any>> {
    throw new Error('Method not implemented.')
  }
  allReturnApplyKinds(): Promise<AxiosResponse<any, any>> {
    throw new Error('Method not implemented.')
  }
}

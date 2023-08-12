import axios, { AxiosResponse } from 'axios'
import { CounselVo } from 'app/boards/mo/counsel-mo/counsel-vo'
import { CounselUrl as url } from './counsel-union'
import { AjaxRouter } from 'app/utils/org/ajax-org/ajax-router'
import { AjaxUnion as api } from 'app/utils/org/ajax-org/ajax-union'
import { AjaxVo } from 'app/utils/org/ajax-org/ajax-vo'
import { AjaxData } from 'app/utils/org/ajax-org/ajax-data'
import { CrudAxios } from 'app/utils/mo/collection-mo/crud-axios'
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
export interface CounselType extends CrudAxios<CounselVo> {}
export class CounselAxios implements CounselType {
  private static instance: CounselAxios
  private router: AjaxRouter

  private constructor() {
    this.router = AjaxData.stream().connect()
  }

  public static then(): CounselAxios {
    if (!CounselAxios.instance) {
      CounselAxios.instance = new CounselAxios()
    }

    return CounselAxios.instance
  }

  addOne(parameter: CounselVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: addOne,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }
  getAll(parameter: CounselVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getAll,
      method: get,
      data: null
    })

    return axios({ method, url, headers })
  }

  getBy(parameter: CounselVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getBy,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }
  getByUser(parameter: CounselVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getByUser,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  getById(parameter: CounselVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getById,
      method: get,
      data: parameter
    })

    return axios({ method, url, headers })
  }

  alterById(parameter: CounselVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: alterById,
      method: put,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  delById(parameter: CounselVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: delById,
      method: del,
      data: parameter
    })

    return axios({ method, url, headers })
  }
}

import axios, { AxiosResponse } from 'axios'
import { AjaxVo } from 'app/utils/org/ajax-org/ajax-vo'
import { AjaxData } from 'app/utils/org/ajax-org/ajax-data'
import { AjaxRouter } from 'app/utils/org/ajax-org/ajax-router'
import { CutAtom } from '../../atom/cut-atom'
import { AjaxUnion as api } from 'app/utils/org/ajax-org/ajax-union'
import { CancelUrl as url } from './cancel-union'
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
export interface CancelType extends CrudAxios<CutAtom> {}

export class CancelAxios implements CancelType {
  private static instance: CancelAxios
  private router: AjaxRouter

  private constructor() {
    this.router = AjaxData.stream().connect()
  }

  public static then(): CancelAxios {
    if (!CancelAxios.instance) {
      CancelAxios.instance = new CancelAxios()
    }
    return CancelAxios.instance
  }

  addOne(parameter: CutAtom): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: addOne,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }
  getAll(parameter: CutAtom): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getAll,
      method: get,
      data: null
    })

    return axios({ method, url, headers })
  }

  getBy(parameter: CutAtom): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getBy,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  getById(parameter: CutAtom): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getById,
      method: get,
      data: parameter
    })

    return axios({ method, url, headers })
  }

  alterById(parameter: CutAtom): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: alterById,
      method: put,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  delById(parameter: CutAtom): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: delById,
      method: del,
      data: parameter
    })

    return axios({ method, url, headers })
  }
}

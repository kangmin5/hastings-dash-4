import axios, { AxiosResponse } from 'axios'
import { NoticeVo } from 'app/boards/mo/notice-mo/notice-vo'
import { NoticeUrl as url } from './notice-union'
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
const addImage = url.addImage
const alterById = url.alterById
const delById = url.delById
import { CrudAxios } from 'app/utils/mo/collection-mo/crud-axios'

export interface NoticeType extends CrudAxios<NoticeVo> {
  allCustomerNoticeTalks(parameter: NoticeVo): Promise<AxiosResponse<any>>
}

export class NoticeAxios implements NoticeType {
  private static instance: NoticeAxios
  private router: AjaxRouter

  private constructor() {
    this.router = AjaxData.stream().connect()
  }
  allCustomerNoticeTalks(parameter: NoticeVo): Promise<AxiosResponse<any, any>> {
    throw new Error('Method not implemented.')
  }

  public static then(): NoticeAxios {
    if (!NoticeAxios.instance) {
      NoticeAxios.instance = new NoticeAxios()
    }

    return NoticeAxios.instance
  }

  addOne(parameter: NoticeVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: addOne,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }
  addImage(parameter: FormData): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: addImage,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }
  getAll(parameter: NoticeVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getAll,
      method: get,
      data: null
    })

    return axios({ method, url, headers })
  }

  getBy(parameter: NoticeVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getBy,
      method: post,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  getById(parameter: NoticeVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: getById,
      method: get,
      data: parameter
    })

    return axios({ method, url, headers })
  }

  alterById(parameter: NoticeVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: alterById,
      method: put,
      data: parameter
    })

    return axios({ method, url, headers, data })
  }

  delById(parameter: NoticeVo): Promise<AxiosResponse<any>> {
    const { method, url, headers, data }: AjaxVo = this.router.http({
      url: delById,
      method: del,
      data: parameter
    })

    return axios({ method, url, headers })
  }
}

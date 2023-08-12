import { AjaxVo } from './ajax-vo'
import { AjaxType } from './ajax-type'

export class AjaxRouter implements AjaxType {
  private static instance: AjaxRouter

  private constructor() {}

  public static new(): AjaxRouter {
    if (!AjaxRouter.instance) {
      AjaxRouter.instance = new AjaxRouter()
    }

    return AjaxRouter.instance
  }

  createHeaders(contentType: string): object {
    const auth = typeof window !== 'undefined' ? `Bearer ${window.localStorage.getItem('accessToken')}` : 'Bearer null'
    console.log(` ####### AUTH is ${auth} ####### `)

    return {
      'Content-Type': contentType,
      Authorization: auth
    }
  }

  createCurrentAPI(parameter: AjaxVo): AjaxVo {
    const api = new AjaxVo()
    api.headers = this.createHeaders(`application/json`)
    api.method = parameter.method
    api.url = `${parameter.url}`
    if (parameter.method === `post` || parameter.method === `put`) {
      api.data = parameter.data
    }

    return api
  }

  http({ method, url, data }: { method: string; url: string; data: any }): AjaxVo {
    const parameter = new AjaxVo()
    parameter.method = method
    parameter.url = `${process.env.NEXT_PUBLIC_API_SERVER_URL}/${url}`
    parameter.data = data

    return this.createCurrentAPI(parameter)
  }
}

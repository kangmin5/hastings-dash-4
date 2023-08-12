import { AjaxVo } from './ajax-vo'

export class AjaxBuilder {
  private readonly instance: AjaxVo

  constructor() {
    this.instance = {
      headers: {},
      data: '',
      method: '',
      url: ''
    }
  }
  headers(headers: object): AjaxBuilder {
    this.instance.headers = headers

    return this
  }
  data(data: string): AjaxBuilder {
    this.instance.data = data

    return this
  }
  method(method: string): AjaxBuilder {
    this.instance.method = method

    return this
  }
  url(url: string): AjaxBuilder {
    this.instance.url = url

    return this
  }
  build(): AjaxVo {
    return this.instance
  }
  transform(): {} {
    return {
      headers: this.instance.headers,
      data: this.instance.data,
      method: this.instance.method,
      url: this.instance.url
    }
  }
}

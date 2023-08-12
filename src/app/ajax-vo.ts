export class AjaxVo {
  protected _headers: object | undefined
  protected _method: string
  protected _url: string
  protected _data?: any

  constructor() {
    this._headers = {}
    this._data = ''
    this._method = ''
    this._url = ''
  }
  public get headers(): object | undefined{
    return this._headers
  }

  public set headers(headers: object | undefined ) {
    this._headers = headers
  }

  public get method(): string {
    return this._method
  }

  public set method(method: string) {
    this._method = method
  }

  public get url(): string {
    return this._url
  }

  public set url(url: string) {
    // this._url = `${process.env.NEXT_PUBLIC_API_SERVER_URL}/${url}`
    this._url = url
  }

  public get data(): any {
    return this._data
  }

  public set data(data: any) {
    if (typeof data === 'object') {
      this._data = JSON.stringify(data)
    }else if(typeof data ===  'string'){
      this._data = data
    }
  }
}

export class AjaxDto {
  protected headers: object
  protected data: string
  protected method: string
  protected url: string

  constructor() {
    this.headers = {}
    this.data = ''
    this.method = ''
    this.url = ''
  }

  getHeaders(): object {
    return this.headers
  }

  setHeaders(headers: object): void {
    this.headers = headers
  }
  getData(): string {
    return this.data
  }
  setData(data: string): void {
    if (typeof data === 'object') {
      this.data = JSON.stringify(data)
    }else if(typeof data ===  'string'){
      this.data = data
    }

  }
  getMethod(): string {
    return this.method
  }

  setMethod(method: string): void {
    this.method = method
  }
  getUrl(): string {
    return this.url
  }
  setUrl(url: string): void {
    this.url = url
  }

  toJson(): {} {
    return {
      headers: this.headers,
      data: this.data,
      method: this.method,
      url: this.url
    }
  }
}



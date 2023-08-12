export class FunnelAtom {
  constructor(

    public searchEngine?: string,
    public keyword?: string,
    public funnel?: string,
    public kind?: string,

    ) {}
}

export class FunnelDto {
   searchEngine?: string
   keyword?: string
    funnel?: string
    kind?: string

  constructor() {
    this.searchEngine = '',
    this.keyword = '',
    this.funnel = '',
    this.kind = ''
  }
  getSearchEngine(): string {
    return this.searchEngine!
  }
  setSearchEngine(searchEngine: string): void {
    this.searchEngine = searchEngine
  }
  getKeyword(): string {
    return this.keyword!
  }
  setKeyword(keyword: string): void {
    this.keyword = keyword
  }
  setFunnel(funnel: string): void {
    this.funnel = funnel
  }
  setKind(kind: string): void {
    this.kind = kind
  }


  toJson() {
    return {
      searchEngine: this.searchEngine,
      keyword: this.keyword,
      funnel: this.funnel,
      kind: this.kind
    }
  }
}

export class FunnelBuilder {
  private readonly instance: FunnelAtom
  constructor() {
    this.instance = {
      searchEngine: '',
      keyword: '',
      funnel: '',
      kind: ''
    }
  }
  searchEngine(searchEngine: string): FunnelBuilder {
    this.instance.searchEngine = searchEngine
    return this
  }

  keyword(keyword: string): FunnelBuilder {
    this.instance.keyword = keyword

    return this
  }
  funnel(funnel: string): FunnelBuilder {
    this.instance.funnel = funnel

    return this
  }
  kind(kind: string): FunnelBuilder {
    this.instance.kind = kind

    return this
  }

  transform(): FunnelDto {
    const d = new FunnelDto()
    d.setSearchEngine(this.instance.searchEngine)
    d.setKeyword(this.instance.keyword)
    d.setFunnel(this.instance.funnel)
    d.setKind(this.instance.kind)

    return d
  }
  build(): FunnelAtom {
    return this.instance
  }
}

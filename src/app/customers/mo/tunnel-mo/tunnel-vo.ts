import { ArticleAtom, ArticleDto, ArticleBuilder } from 'app/boards/atom/article-atom'
import { CarAtom, CarBuilder, CarDto } from 'app/customers/atom/car-atom'
import { FunnelAtom, FunnelBuilder, FunnelDto } from 'app/customers/atom/funnel-atom'

export class TunnelVo {
  constructor(
    public car?: CarAtom,

    public article?: ArticleAtom,
    public tunnel?: FunnelAtom
  ) {}
}

export class TunnelTo {
  protected car?: CarDto
  protected article?: ArticleDto
  protected tunnel?: FunnelDto

  setCar(car: CarAtom): void {
    this.car = new CarBuilder().transform()
  }

  setArticle(article: ArticleAtom): void {
    this.article = new ArticleBuilder().transform()
  }
  setFunnel(tunnel: FunnelAtom): void {
    this.tunnel = new FunnelBuilder().transform()
  }

  toJson() {
    return {
      car: this.car.toJson(),
      article: this.article.toJson(),
      tunnel: this.tunnel.toJson()
    }
  }
}
export class TunnelBo {
  private readonly instance: TunnelVo

  constructor() {
    this.instance = {
      car: new CarAtom()
    }
  }

  car(car: CarAtom): TunnelBo {
    this.instance.car = car
    return this
  }


  build(): TunnelVo {
    return this.instance
  }
  transform(): TunnelTo {
    const to = new TunnelTo()
    to.setCar(this.instance.car)
    return to
  }
}

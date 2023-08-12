import { AuditAtom, AuditBuilder, AuditDto } from "app/products/atom/audit-atom"
import { CatAtom, CatBuilder, CatDto } from "app/products/atom/cat-atom"
import { FacetAtom, FacetBuilder, FacetDto } from "app/products/atom/facet-atom"
import { OptionAtom, OptionBuilder, OptionDto } from "app/products/atom/option-atom"
import { ParAtom, ParBuilder, ParDto } from "app/products/atom/par-atom"
import { PriceAtom, PriceBuilder, PriceDto } from "app/products/atom/price-atom"
import { SizeAtom, SizeBuilder, SizeDto } from "app/products/atom/size-atom"
import { TimeAtom, TimeBuilder, TimeDto } from "app/utils/atom/time-atom"


export class ProductVo {
  constructor(public par?: ParAtom,
    public audit?: AuditAtom,
    public cat?: CatAtom, 
    public facet?: FacetAtom,
    public option?: OptionAtom,
    public price?: PriceAtom,
    public size?: SizeAtom,
    public time?: TimeAtom
    ) {}
}
export class ProductTo {
  protected par?: ParDto
  protected audit?: AuditDto
  protected cat?: CatDto
  protected facet?: FacetDto
  protected option?: OptionDto
  protected price?: PriceDto
  protected size?: SizeDto
  protected time?: TimeDto


  setPar(par: ParAtom): void {
    this.par = new ParBuilder()
    .id(par.id)
    .serial(par.serial)
    .imageUrl(par.imageUrl)
    .name(par.name)
    .transform()
  }

  setAudit(audit: AuditAtom): void {
    this.audit = new AuditBuilder()
    .reviewId(audit.reviewId)
    .transform()
  }

  setCat(cat: CatAtom): void {
    this.cat = new CatBuilder()
    .catId(cat.catId)
    .category(cat.category)
    .transform()

  }

  setFacet(facet: FacetAtom): void {
    this.facet = new FacetBuilder()
    .isDisplayed(facet.isDisplayed)
    .isSelling(facet.isSelling)
    .orderCount(facet.orderCount)
    .transform()

  }

  setOption(option: OptionAtom): void {
    this.option = new OptionBuilder()
    .glue(option.glue)
    .header(option.header)
    .thick(option.thick)
    .transform()
    
  }

  setPrice(price: PriceAtom): void {
    this.price = new PriceBuilder()
    .unit(price.unit)
    .unitQty(price.unitQty)
    .unitPrice(price.unitPrice)
    .bundle(price.bundle)
    .bundleQty(price.bundleQty)
    .bundlePrice(price.bundlePrice)
    .bundleDcRate(price.bundleDcRate)
    .box(price.box)
    .boxQty(price.boxQty)
    .boxPrice(price.boxPrice)
    .boxDcRate(price.boxDcRate)
    .transform()
  }

  setSize(size: SizeAtom): void {
    this.size = new SizeBuilder()
    .width(size.width)
    .height(size.height)
    .thick(size.thick)
    .middleSize(size.middleSize)
    .transform()
  }

  setTime(time: TimeAtom): void {
    this.time = new TimeBuilder()
    .createdAt(time.createdAt)
    .updatedAt(time.updatedAt)
    .askedAt(time.askedAt)
    .answeredAt(time.answeredAt)
    .canceledAt(time.canceledAt)
    .accessAt(time.accessAt)
    .transform()
  }

  toJson() {
    return {
      par: this.par.toJson(),
      audit: this.audit.toJson(),
      cat: this.cat.toJson(),
      facet: this.facet.toJson(),
      option: this.option.toJson(),
      price: this.price.toJson(),
      size: this.size.toJson(),
      time: this.time.toJson(),
    }
  }
}
export class ProductBo {
  private readonly instance: ProductVo

  constructor() {
    this.instance = {
      par: new ParAtom(),
      audit: new AuditAtom(),
      cat: new CatAtom(),
      facet: new FacetAtom(),
      option: new OptionAtom(),
      price: new PriceAtom(),
      size: new SizeAtom(),
      time: new TimeAtom(),
    }
  }

  par(par: ParAtom): ProductBo {
    this.instance.par = par
    return this
  }

  audit(audit: AuditAtom): ProductBo {
    this.instance.audit = audit
    return this
  }

  cat(cat: CatAtom): ProductBo {
    this.instance.cat = cat
    return this
  }

  facet(facet: FacetAtom): ProductBo {
    this.instance.facet = facet
    return this
  }

  option(option: OptionAtom): ProductBo {
    this.instance.option = option
    return this
  }

  price(price: PriceAtom): ProductBo {
    this.instance.price = price
    return this
  }

  size(size: SizeAtom): ProductBo {
    this.instance.size = size
    return this
  }

  time(time: TimeAtom): ProductBo {
    this.instance.time = time
    return this
  }

  build(): ProductVo {
    return this.instance
  }
  transform(): ProductTo {
    const to = new ProductTo()
    to.setPar(this.instance.par)
    if (this.instance.audit != undefined) {
    to.setAudit(this.instance.audit)
    }
    to.setCat(this.instance.cat)
    to.setFacet(this.instance.facet)
    to.setOption(this.instance.option)
    to.setPrice(this.instance.price)
    to.setSize(this.instance.size)
    to.setTime(this.instance.time)
    return to
  }
}

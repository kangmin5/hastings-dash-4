export class PriceAtom {
  constructor(
    public unit?: string,
    public unitQty?: string,
    public unitPrice?: string,
    public bundle?: string,
    public bundleQty?: string,
    public bundlePrice?: string,
    public bundleDcRate?: string,
    public box?: string,
    public boxQty?: string,
    public boxPrice?: string,
    public boxDcRate?: string
  ) {}
}

export class PriceDto {
   unit?: string
   unitQty?: string
   unitPrice?: string
   bundle?: string
   bundleQty?: string
   bundlePrice?: string
   bundleDcRate?: string
   box?: string
   boxQty?: string
   boxPrice?: string
   boxDcRate?: string

  constructor() {
    this.unit = ''
    this.unitQty = ''
    this.unitPrice = ''
    this.bundle = ''
    this.bundleQty = ''
    this.bundlePrice = ''
    this.bundleDcRate = ''
    this.box = ''
    this.boxQty = ''
    this.boxPrice = ''
    this.boxDcRate = ''
  }

  setUnit(unit: string): void {
    this.unit = unit!
  }
  setUnitQty(unitQty: string): void {
    this.unitQty = unitQty!
  }
  setUnitPrice(unitPrice: string): void {
    this.unitPrice = unitPrice!
  }
  setBundle(bundle: string): void {
    this.bundle = bundle!
  }
  setBundleQty(bundleQty: string): void {
    this.bundleQty = bundleQty!
  }
  setBundlePrice(bundlePrice: string): void {
    this.bundlePrice = bundlePrice!
  }
  setBundleDcRate(bundleDcRate: string): void {
    this.bundleDcRate = bundleDcRate!
  }
  setBox(box: string): void {
    this.box = box!
  }
  setBoxQty(boxQty: string): void {
    this.boxQty = boxQty!
  }
  setBoxPrice(boxPrice: string): void {
    this.boxPrice = boxPrice!
  }
  setBoxDcRate(boxDcRate: string): void {
    this.boxDcRate = boxDcRate!
  }
  toJson() {
    return {
      unit: this.unit,
      unitQty: this.unitQty,
      unitPrice: this.unitPrice,
      bundle: this.bundle,
      bundleQty: this.bundleQty,
      bundlePrice: this.bundlePrice,
      bundleDcRate: this.bundleDcRate,
      box: this.box,
      boxQty: this.boxQty,
      boxPrice: this.boxPrice,
      boxDcRate: this.boxDcRate,
    }
  }

}

export class PriceBuilder {
  private readonly instance: PriceAtom
  constructor() {
    this.instance = {
      unit: '',
      unitQty: '',
      unitPrice: '',
      bundle: '',
      bundleQty: '',
      bundlePrice: '',
      bundleDcRate: '',
      box: '',
      boxQty: '',
      boxPrice: '',
      boxDcRate: ''
    }
  }
  unit(unit: string): PriceBuilder {
    this.instance.unit = unit
    return this
  }
  unitQty(unitQty: string): PriceBuilder {
    this.instance.unitQty = unitQty
    return this
  }
  unitPrice(unitPrice: string): PriceBuilder {
    this.instance.unitPrice = unitPrice
    return this
  }
  bundle(bundle: string): PriceBuilder {
    this.instance.bundle = bundle
    return this
  }
  bundleQty(bundleQty: string): PriceBuilder {
    this.instance.bundleQty = bundleQty
    return this
  }
  bundlePrice(bundlePrice: string): PriceBuilder {
    this.instance.bundlePrice = bundlePrice
    return this
  }
  bundleDcRate(bundleDcRate: string): PriceBuilder {
    this.instance.bundleDcRate = bundleDcRate
    return this
  }
  box(box: string): PriceBuilder {
    this.instance.box = box
    return this
  }
  boxQty(boxQty: string): PriceBuilder {
    this.instance.boxQty = boxQty
    return this
  }
  boxPrice(boxPrice: string): PriceBuilder {
    this.instance.boxPrice = boxPrice
    return this
  }
  boxDcRate(boxDcRate: string): PriceBuilder {
    this.instance.boxDcRate = boxDcRate
    return this
  }
  build(): PriceAtom {
    return this.instance
  }
  transform(): PriceDto {
    const d = new PriceDto()
    d.setUnit(this.instance.unit)
    d.setUnitQty(this.instance.unitQty)
    d.setUnitPrice(this.instance.unitPrice)
    d.setBundle(this.instance.bundle)
    d.setBundleQty(this.instance.bundleQty)
    d.setBundlePrice(this.instance.bundlePrice)
    d.setBundleDcRate(this.instance.bundleDcRate)
    d.setBox(this.instance.box)
    d.setBoxQty(this.instance.boxQty)
    d.setBoxPrice(this.instance.boxPrice)
    d.setBoxDcRate(this.instance.boxDcRate)
    return d
  }

}

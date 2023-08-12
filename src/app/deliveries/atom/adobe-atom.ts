// import {uuidGen} from "app/utils/atoms/id-atom/uuid-gen";
// 다음 카카오 주소 API 사용법 https://devofroad.tistory.com/42
export class AdobeAtom {
  constructor(
    public addr?: string,
    public extraAddr?: string,
    public zip?: string,
    public shipAddr?: string,
    public shipExtraAddr?: string,
    public shipZip?: string,
    public bizAddr?: string,
    public bizExtraAddr?: string,
    public bizZip?: string
  ) {}
}

export class AdobeDto {
  addr?: string
  extraAddr?: string
  zip?: string
  shipAddr?: string
  shipExtraAddr?: string
  shipZip?: string
  bizAddr?: string
  bizExtraAddr?: string
  bizZip?: string

  constructor() {
    this.addr = ''
    this.extraAddr = ''
    this.zip = ''
    this.shipAddr = ''
    this.shipExtraAddr = ''
    this.shipZip = ''
    this.bizAddr = ''
    this.bizExtraAddr = ''
    this.bizZip = ''
  }


  setAddr(addr: string): void {
    this.addr = addr
  }

  setExtraAddr(extraAddr: string): void {
    this.extraAddr = extraAddr
  }

  setZip(zip: string): void {
    this.zip = zip
  }
  setShipAddr(shipAddr: string): void {
    this.shipAddr = shipAddr
  }

  setShipExtraAddr(shipExtraAddr: string): void {
    this.shipExtraAddr = shipExtraAddr
  }
 
  setShipZip(shipZip: string): void {
    this.shipZip = shipZip
  }
  setBizAddr(bizAddr: string): void {
    this.bizAddr = bizAddr
  }
  setBizExtraAddr(bizExtraAddr: string): void {
    this.bizExtraAddr = bizExtraAddr
  }
  setBizZip(bizZip: string): void {
    this.bizZip = bizZip
  }



  toJson() {
    return {
      addr: this.addr,
      extraAddr: this.extraAddr,
      zip: this.zip,
      shipAddr: this.shipAddr,
      shipExtraAddr: this.shipExtraAddr,
      shipZip: this.shipZip,
      bizAddr: this.bizAddr,
      bizExtraAddr: this.bizExtraAddr,
      bizZip: this.bizZip
    }
  }
}

export class AdobeBuilder {
  private readonly instance: AdobeAtom
  constructor() {
    this.instance = {
      addr: '',
      extraAddr: '',
      zip: '',
      shipAddr: '',
      shipExtraAddr: '',
      shipZip: '',
      bizAddr: '',
      bizExtraAddr: '',
      bizZip: ''
    }
  }

  addr(addr: string): AdobeBuilder {
    this.instance.addr = addr
    return this
  }
  extraAddr(extraAddr: string): AdobeBuilder {
    this.instance.extraAddr = extraAddr
    return this
  }
  zip(zip: string): AdobeBuilder {
    this.instance.zip = zip
    return this
  }
  shipAddr(shipAddr: string): AdobeBuilder {
    this.instance.addr = shipAddr
    return this
  }
  shipExtraAddr(shipExtraAddr: string): AdobeBuilder {
    this.instance.extraAddr = shipExtraAddr
    return this
  }
  shipZip(shipZip: string): AdobeBuilder {
    this.instance.zip = shipZip
    return this
  }
  bizAddr(bizAddr: string): AdobeBuilder {
    this.instance.addr = bizAddr
    return this
  }
  bizExtraAddr(bizExtraAddr: string): AdobeBuilder {
    this.instance.extraAddr = bizExtraAddr
    return this
  }
  bizZip(bizZip: string): AdobeBuilder {
    this.instance.zip = bizZip
    return this
  }

  transform(): AdobeDto {
    const d = new AdobeDto()
    d.setAddr(this.instance.addr)
    d.setExtraAddr(this.instance.extraAddr)
    d.setZip(this.instance.zip)
    d.setShipAddr(this.instance.addr)
    d.setShipExtraAddr(this.instance.extraAddr)
    d.setShipZip(this.instance.zip)
    d.setBizAddr(this.instance.addr)
    d.setBizExtraAddr(this.instance.extraAddr)
    d.setBizZip(this.instance.zip)

    return d
  }
  build(): AdobeAtom {
    return this.instance
  }
}

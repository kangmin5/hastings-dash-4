export class ParAtom {
  constructor(
    public id?: string,
    public imageUrl?: string,
    public serial?: string,
    public name?: string,
    public viewCount?: string,
  ) {}
}
export class ParDto {
   id: string
   imageUrl: string
   serial: string
   name: string
   viewCount: string

  constructor() {
    this.id = ''
    this.imageUrl = ''
    this.serial = ''
    this.name = ''
    this.viewCount = ''
  }

  setId(id: string): void {
    this.id = id
  }
  setImageUrl(imageUrl: string): void {
    this.imageUrl = imageUrl
  }
  setSerial(serial: string): void {
    this.serial = serial
  }
  setName(name: string): void {
    this.name = name
  }
  setViewCount(viewCount: string): void {
    this.viewCount = viewCount
  }
  toJson() {
    return {
      id: this.id,
      imageUrl: this.imageUrl,
      serial: this.serial,
      name: this.name,
      viewCount: this.viewCount,
    }
  }
}

export class ParBuilder {
  private readonly instance: ParAtom

  constructor() {
    this.instance = {
      id: '',
      imageUrl: '',
      serial: '',
      name: '',
      viewCount: '',
    }
  }
  id(id: string): ParBuilder {
    this.instance.id = id
    return this
  }
  imageUrl(imageUrl: string): ParBuilder {
    this.instance.imageUrl = imageUrl
    return this
  }
  serial(serial: string): ParBuilder {
    this.instance.serial = serial
    return this
  }
  name(name: string): ParBuilder {
    this.instance.name = name
    return this
  }
  viewCount(viewCount: string): ParBuilder {
    this.instance.viewCount = viewCount
    return this
  }

  build(): ParAtom {
    return this.instance
  }

  transform(): ParDto {
    const d = new ParDto()
    d.setId(this.instance.id)
    d.setImageUrl(this.instance.imageUrl)
    d.setSerial(this.instance.serial)
    d.setName(this.instance.name)
    d.setViewCount(this.instance.viewCount)
    return d
  }
}

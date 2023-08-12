export class SizeAtom {
  constructor(
    public width?: string, 
    public height?: string, 
    public thick?: string, 
    public middleSize?: string
    ) {}
}

export class SizeDto {
   width?: string
   height?: string
   thick?: string
   middleSize?: string

  constructor() {
    this.width = ''
    this.height = ''
    this.thick = ''
    this.middleSize = ''
  }
  setWidth(width: string): void {
    this.width = width!
  }
  setHeight(height: string): void {
    this.height = height!
  }
  setThick(thick: string): void {
    this.thick = thick!
  }
  setMiddleSize(middleSize: string): void {
    this.middleSize = middleSize!
  }
  toJson(): object {
    return {
      width: this.width,
      height: this.height,
      thick: this.thick,
      middleSize: this.middleSize
    }
  }
}

export class SizeBuilder {
  private readonly instance: SizeAtom
  constructor() {
    this.instance = {
      width: '',
      height: '',
      thick: '',
      middleSize: ''
    }
  }
  width(width: string): SizeBuilder {
    this.instance.width = width
    return this
  }
  height(height: string): SizeBuilder {
    this.instance.height = height
    return this
  }
  thick(thick: string): SizeBuilder {
    this.instance.thick = thick
    return this
  }
  middleSize(middleSize: string): SizeBuilder {
    this.instance.middleSize = middleSize
    return this
  }
  transform(): SizeDto {
    const dto = new SizeDto()
    dto.setWidth(this.instance.width)
    dto.setHeight(this.instance.height)
    dto.setThick(this.instance.thick)
    dto.setMiddleSize(this.instance.middleSize)
    return dto
  }
  build(): SizeAtom {
    return this.instance
  }
}

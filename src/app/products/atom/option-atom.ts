export class OptionAtom{
  constructor(
    public glue?: string,
    public header?: string,
    public thick?: string,
  ){}
}

export class OptionDto{
  glue?: string
  header?: string
  thick?: string

  constructor(){
    this.glue = ''
    this.header = ''
    this.thick = ''
  }

  getGlue(): string{
    return this.glue!
  }
  setGlue(glue: string): void{
    this.glue = glue!
  }
  getHeader(): string{
    return this.header!
  }
  setHeader(header: string): void{
    this.header = header!
  }
  getThick(): string{
    return this.thick!
  }
  setThick(thick: string): void{
    this.thick = thick!
  }

  toJson(){
    return{
      glue: this.glue,
      header: this.header,
      thick: this.thick
    }
  }
}

export class OptionBuilder{
  private readonly instance: OptionAtom
  constructor(){
    this.instance = {
      glue: '',
      header: '',
      thick: ''
    }
  }
  glue(glue: string): OptionBuilder{
    this.instance.glue = glue
    return this
  }
  header(header: string): OptionBuilder{
    this.instance.header = header
    return this
  }
  thick(thick: string): OptionBuilder{
    this.instance.thick = thick
    return this
  }

  transform(): OptionDto{
    const dto = new OptionDto()
    dto.setGlue(this.instance.glue)
    dto.setHeader(this.instance.header)
    dto.setThick(this.instance.thick)

    return dto
  }
  build(): OptionAtom{
    return this.instance
  }
}
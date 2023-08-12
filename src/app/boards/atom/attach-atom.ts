export class AttachAtom {
  constructor(
    public fileName?: string,
    public fileKind?: string,
    public fileSize?: string,
    public fileUrl?: string,
    public description?: string,
    public hasImage?: boolean,
    public hasFile?: boolean,
  ) {}
}
export class AttachDto {
   fileName?: string
   fileKind?: string
   fileSize?: string
   fileUrl?: string
   description?: string
   noticeId?: string
   hasImage?: boolean
   hasFile?: boolean

  constructor() {
    this.fileName = ''
    this.fileSize = ''
    this.fileKind = ''
    this.fileUrl = ''
    this.description = ''
    this.hasFile = false
    this.hasImage = false
  }


  setFileName(fileName: string): void {
    this.fileName = fileName
  }

  setFileKind(fileKind: string): void {
    this.fileKind = fileKind
  }

  setFileSize(fileSize: string): void {
    this.fileSize = fileSize
  }

  setFileUrl(fileUrl: string): void {
    this.fileUrl = fileUrl
  }

  setDescription(description: string): void {
    this.description = description
  }

  setHasImage(hasImage: boolean): void {
    this.hasImage = hasImage
  }

  setHasFile(hasFile: boolean): void {
    this.hasFile = hasFile
  }


  toJson() {
    return {
      fileName: this.fileName,
      fileKind: this.fileKind,
      fileSize: this.fileSize,
      fileUrl: this.fileUrl,
      description: this.description,
      hasImage: this.hasImage,
      hasFile: this.hasFile,
    }
  }
}

export class AttachBuilder {
  private attach: AttachAtom
  constructor() {
    this.attach = new AttachAtom()
  }

  fileKind(fileKind: string): AttachBuilder {
    this.attach.fileKind = fileKind
    return this
  }
  fileName(fileName: string): AttachBuilder {
    this.attach.fileName = fileName
    return this
  }
  fileSize(fileSize: string): AttachBuilder {
    this.attach.fileSize = fileSize

    return this
  }
  fileUrl(fileUrl: string): AttachBuilder {
    this.attach.fileUrl = fileUrl
    return this
  }

  description(description: string): AttachBuilder {
    this.attach.description = description
    return this
  }
  hasImage(hasImage: boolean): AttachBuilder {
    this.attach.hasImage = hasImage
    return this
  }
  hasFile(hasFile: boolean): AttachBuilder {
    this.attach.hasFile = hasFile
    return this
  }


  build = (): AttachAtom => this.attach
  transform = (): AttachDto => {
    const d = new AttachDto()
    d.setFileKind(this.attach.fileKind!)
    d.setFileName(this.attach.fileName!)
    d.setFileSize(this.attach.fileSize!)
    d.setFileUrl(this.attach.fileUrl!)
    d.setDescription(this.attach.description!)
    d.setHasImage(this.attach.hasImage!)
    d.setHasFile(this.attach.hasFile!)

    return d
  }
}

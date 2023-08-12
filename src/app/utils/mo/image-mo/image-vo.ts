import { AttachAtom, AttachBuilder, AttachDto } from 'app/boards/atom/attach-atom'
import { UrnAtom, UrnBuilder, UrnDto } from 'app/utils/atom/urn-atom'

export class ImageVo {
  constructor(public urn?: UrnAtom,
    public attach?: AttachAtom,
    ) {}
}
export class ImageTo {
  protected urn?: UrnDto
  protected attach?: AttachDto

  setUrn(o: UrnAtom): void {
    this.urn = new UrnBuilder()
    
    
    .transform()
  }
  setAttach(o: AttachAtom): void {
    this.attach = new AttachBuilder()
    .fileKind(o.fileKind)
    .fileName(o.fileName)
    .fileSize(o.fileSize)
    .fileUrl(o.fileUrl)
    .transform()
  }

  toJson() {
    return {
      urn: this.urn.toJson(),
      attach: this.attach.toJson(),
    }
  }
}
export class ImageBo {
  private readonly instance: ImageVo

  constructor() {
    this.instance = {
      urn: new UrnAtom(),
      attach: new AttachAtom(),
    }
  }

  urn(urn: UrnAtom): ImageBo {
    this.instance.urn = urn
    return this
  }

  attach(attach: AttachAtom): ImageBo {
    this.instance.attach = attach
    return this
  }

  build(): ImageVo {
    return this.instance
  }
  transform(): ImageTo {
    const to = new ImageTo()
    to.setUrn(this.instance.urn)
    to.setAttach(this.instance.attach)
    return to
  }
}

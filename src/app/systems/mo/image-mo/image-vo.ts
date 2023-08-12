
import { PictureAtom, PictureBuilder, PictureDto } from "app/systems/atom/picture-atom"
import { SoarAtom, SoarBuilder, SoarDto } from "app/systems/atom/soar-atom"
import { TimeAtom, TimeBuilder, TimeDto } from "app/utils/atom/time-atom"


export class ImageVo {
  constructor(public soar?: SoarAtom,
    public picture?: PictureAtom,
    public time?: TimeAtom
    ) {}
}
export class ImageTo {
  
  protected time?: TimeDto
  protected picture?: PictureDto
  protected soar?: SoarDto


  setSoar(soar: SoarAtom): void {
    this.soar = new SoarBuilder()
    .id(soar.id)
  
    .transform()
  }

  setPicture(picture: PictureAtom): void {
    this.picture = new PictureBuilder()
    .name(picture.name)
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
      soar: this.soar.toJson(),
      picture: this.picture.toJson(),
      time: this.time.toJson(),
    }
  }
}
export class ImageBo {
  private readonly instance: ImageVo

  constructor() {
    this.instance = {
      soar: new SoarAtom(),
      picture: new PictureAtom(),
      time: new TimeAtom(),
    }
  }

  soar(soar: SoarAtom): ImageBo {
    this.instance.soar = soar
    return this
  }

  picture(picture: PictureAtom): ImageBo {
    this.instance.picture = picture
    return this
  }


  time(time: TimeAtom): ImageBo {
    this.instance.time = time
    return this
  }

  build(): ImageVo {
    return this.instance
  }
  transform(): ImageTo {
    const to = new ImageTo()
    to.setSoar(this.instance.soar)
    to.setPicture(this.instance.picture)
    to.setTime(this.instance.time)
    return to
  }
}

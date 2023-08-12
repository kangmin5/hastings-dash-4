export class DozeAtom {
  constructor(public voice?: string) {}
}

export class DozeDto {
  voice?: string //** 정상, 휴먼, 탈퇴 */

  constructor() {
    this.voice = ''
  }

  setVoice(voice: string): void {
    this.voice = voice
  }

  toJson() {
    return {
      voice: this.voice
    }
  }
}

export class DozeBuilder {
  private readonly instance: DozeAtom
  constructor() {
    this.instance = {
      voice: ''
    }
  }
  voice(voice: string): DozeBuilder {
    this.instance.voice = voice
    return this
  }

  transform(): DozeDto {
    const d = new DozeDto()
    d.setVoice(this.instance.voice)

    return d
  }
  build(): DozeAtom {
    return this.instance
  }
}

export class AdmitAtom {
  constructor(public consent?: string
    ) {}
}

export class AdmitDto {
  consent?: string

  constructor() {
    this.consent = ''
  }

  setConsent(consent: string): void {
    this.consent = consent
  }

  toJson() {
    return {
      consent: this.consent,

    }
  }
}

export class AdmitBuilder {
  private readonly instance: AdmitAtom
  constructor() {
    this.instance = {
      consent: '',

    }
  }
  consent(consent: string): AdmitBuilder {
    this.instance.consent = consent
    return this
  }


  transform(): AdmitDto {
    const d = new AdmitDto()
    d.setConsent(this.instance.consent)


    return d
  }
  build(): AdmitAtom {
    return this.instance
  }
}

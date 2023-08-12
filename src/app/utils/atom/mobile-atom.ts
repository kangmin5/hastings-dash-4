export class MobileAtom {
  constructor(public appInstall?: string,
    public appPush?: string
    ) {}
}

export class MobileDto {
  appInstall?: string
  appPush?: string

  constructor() {
    this.appInstall = '',
    this.appPush = ''
  }

  setAppInstall(appInstall: string): void {
    this.appInstall = appInstall
  }
  setAppPush(appPush: string): void {
    this.appPush = appPush
  }

  toJson() {
    return {
      appInstall: this.appInstall,
      appPush: this.appPush

    }
  }
}

export class MobileBuilder {
  private readonly instance: MobileAtom
  constructor() {
    this.instance = {
      appInstall: '',
      appPush: ''

    }
  }
  appInstall(appInstall: string): MobileBuilder {
    this.instance.appInstall = appInstall
    return this
  }
  appPush(appPush: string): MobileBuilder {
    this.instance.appPush = appPush
    return this
  }


  transform(): MobileDto {
    const d = new MobileDto()
    d.setAppInstall(this.instance.appInstall)
    d.setAppPush(this.instance.appPush)


    return d
  }
  build(): MobileAtom {
    return this.instance
  }
}

export class AirAtom {
  constructor(
    public id?: string,
    public loginAttemptCount?: string,

    public rememberMe?: boolean
   ) {}
}

export class AirDto {
    id?: string
   loginAttemptCount?: string
   rememberMe?: boolean

  getId(): string {
    return this.id!
  }
  setId(id: string): void {
    this.id = id
  }


  getRememberMe(): boolean {
    return this.rememberMe!
  }
  setRememberMe(rememberMe: boolean): void {
    this.rememberMe = rememberMe
  }

  getLoginAttemptCount(): string {
    return this.loginAttemptCount!
  }
  setLoginAttemptCount(loginAttemptCount: string): void {
    this.loginAttemptCount = loginAttemptCount
  }


  constructor() {
    this.id = ''
    this.loginAttemptCount = ''
    this.rememberMe = false
  }

  toJson() {
    return {
      id: this.id,
      loginAttemptCount: this.loginAttemptCount,
      rememberMe: this.rememberMe

    }
  }
}

export class AirBuilder {
  private readonly instance: AirAtom
  constructor() {
    this.instance = {
      id: '',
      loginAttemptCount: '',
      rememberMe: false
    }
  }
  id(id: string): AirBuilder {
    this.instance.id = id
    return this
  }
  loginAttemptCount(loginAttemptCount: string): AirBuilder {
    this.instance.loginAttemptCount = loginAttemptCount
    return this
  }
  rememberMe(rememberMe: boolean): AirBuilder {
    this.instance.rememberMe = rememberMe
    return this
  }

  transform(): AirDto {
    const d = new AirDto()
    d.setId(this.instance.id)
    d.setLoginAttemptCount(this.instance.loginAttemptCount)
    d.setRememberMe(this.instance.rememberMe)


    return d
  }
  build(): AirAtom {
    return this.instance
  }
}

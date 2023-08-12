export class AuthorAtom {
  constructor(
    
    public krName?: string,
    public enName?: string,
    public token?: string,
    public password?: string,
    public rememberMe?: boolean,
    public role?: string
  ) {}
}

export class AuthorDto {
  protected krName: string
  protected enName: string
  protected token: string
  protected password: string
  protected rememberMe: boolean
  protected role: string

  constructor() {
    this.krName = ''
    this.enName = ''
    this.token = ''
    this.password = ''
    this.rememberMe = false
    this.role = ''
  }
  getKrName(): string {
    return this.krName
  }
  setKrName(krName: string): void {
    this.krName = krName
  }
  getEnName(): string {
    return this.enName
  }
  setEnName(enName: string): void {
    this.enName = enName
  }
  getToken(): string {
    return this.token
  }
  setToken(token: string): void {
    this.token = token
  }
  getPassword(): string {
    return this.password
  }
  setPassword(password: string): void {
    this.password = password
  }
  getRememberMe(): boolean {
    return this.rememberMe
  }
  setRememberMe(rememberMe: boolean): void {
    this.rememberMe = rememberMe
  }
  getRole(): string {
    return this.role
  }
  setRole(role: string): void {
    this.role = role
  }

  toJson() {
    return {
      krName: this.krName,
      enName: this.enName,
      token: this.token,
      password: this.password,
      rememberMe: this.rememberMe,
      role: this.role
    }
  }
}
export class AuthorBuilder {
  private readonly instance: AuthorAtom
  constructor() {
    this.instance = {
      krName: '',
      enName: '',
      token: '',
      password: '',
      rememberMe: false,
      role: ''
    }
  }
  krName(krName: string): AuthorBuilder {
    this.instance.krName = krName
    return this
  }
  enName(enName: string): AuthorBuilder {
    this.instance.enName = enName
    return this
  }
  token(token: string): AuthorBuilder {
    this.instance.token = token
    return this
  }
  password(password: string): AuthorBuilder {
    this.instance.password = password
    return this
  }
  rememberMe(rememberMe: boolean): AuthorBuilder {
    this.instance.rememberMe = rememberMe
    return this
  }
  role(role: string): AuthorBuilder {
    this.instance.role = role
    return this
  }
  build(): AuthorAtom {
    return this.instance
  }
  transform(): AuthorDto {
    const dto = new AuthorDto()
    dto.setKrName(this.instance.krName)
    dto.setEnName(this.instance.enName)
    dto.setToken(this.instance.token)
    dto.setPassword(this.instance.password)
    dto.setRememberMe(this.instance.rememberMe)
    dto.setRole(this.instance.role)
    return dto
  }
}

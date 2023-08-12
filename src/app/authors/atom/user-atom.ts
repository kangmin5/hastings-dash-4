export class UserAtom {
  constructor(


    public userId?: string,
    public username?: string,
    public password?: string,
    public token?: string,

    ) {}
}
export class UserDto {
   userId?: string
   username?: string
   password?: string
   token?: string


  constructor() {
    this.userId = ''
    this.username = ''
    this.password = ''
    this.token = ''

  }

  getUserId(): string {
    return this.userId!
  }
  setUserId(userId: string): void {
    this.userId = userId
  }
  getUsername(): string {
    return this.username!
  }
  setUsername(username: string): void {
    this.username = username
  }
  getPassword(): string {
    return this.password!
  }
  setPassword(password: string): void {
    this.password = password
  }
  getToken(): string {
    return this.token!
  }
  setToken(token: string): void {
    this.token = token
  }


  toJson() {
    return {
      userId: this.userId,
      username: this.username,
      password: this.password,
      token: this.token,

    }
  }
}
export class UserBuilder {
  private readonly instance: UserAtom

  constructor() {
    this.instance = {
      userId: '',
      username: '',
      password: '',
      token: '',

    }
  }
  userId(userId: string): UserBuilder {
    this.instance.userId = userId
    return this
  }
  username(username: string): UserBuilder {
    this.instance.username = username
    return this
  }
  password(password: string): UserBuilder {
    this.instance.password = password
    return this
  }
  token(token: string): UserBuilder {
    this.instance.token = token
    return this
  }

  build = (): UserAtom => this.instance
  transform = (): UserDto => {
    const { userId, username, password, token } = this.instance
    const d = new UserDto()
    d.setUserId(userId)
    d.setUsername(username)
    d.setPassword(password)
    d.setToken(token)


    return d
  }
}

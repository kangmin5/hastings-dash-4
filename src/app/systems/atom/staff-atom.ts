export class StaffAtom {
  constructor(
    public enName?: string,
    public krName?: string,
    public role?: string,
    public email?: string,
    public avatar?: string
    ) {}
}

export class StaffDto {
   enName?: string
    krName?: string
    role?: string
    email?: string
    avatar?: string

  constructor() {
    this.enName = ''
    this.krName = ''
    this.role = ''
    this.email = ''
    this.avatar = ''
  }

  setEnName(enName: string): void {
    this.enName = enName
  }
  setKrName(krName: string): void {
    this.krName = krName
  }
  setRole(role: string): void {
    this.role = role
  }
  setEmail(email: string): void {
    this.email = email
  }
  setAvatar(avatar: string): void {
    this.avatar = avatar
  }

 

  toJson() {
    return {
      enName: this.enName,
      krName: this.krName,
      role: this.role,
      email: this.email,
      avatar: this.avatar
    }
  }
}

export class StaffBuilder {
  private readonly instance: StaffAtom
  constructor() {
    this.instance = {
      enName: '',
      krName: '',
      role: '',
      email: '',
      avatar: ''
    }
  }
  enName(enName: string): StaffBuilder {
    this.instance.enName = enName
    return this
  }
  krName(krName: string): StaffBuilder {
    this.instance.krName = krName
    return this
  }
  role(role: string): StaffBuilder {
    this.instance.role = role
    return this
  }
  email(email: string): StaffBuilder {
    this.instance.email = email
    return this
  }
  avatar(avatar: string): StaffBuilder {
    this.instance.avatar = avatar
    return this
  }



  transform(): StaffDto {
    const d = new StaffDto()
    d.setAvatar(this.instance.avatar)
    d.setEmail(this.instance.email)
    d.setEnName(this.instance.enName)
    d.setKrName(this.instance.krName)
    d.setRole(this.instance.role)



    return d
  }
  build(): StaffAtom {
    return this.instance
  }
}

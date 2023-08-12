export class PersonAtom {
  constructor(
    public name?: string,
    public email?: string,
    public phone?: string,
    public homePhone?: string,
    public birth?: string,
    public gender?: string
  ) {}
}
export class PersonDto {
   name?: string
   email?: string
   phone?: string
   homePhone?: string
   birth?: string
   gender?: string

  constructor() {
    this.name = ''
    this.email = ''
    this.phone = ''
    this.homePhone = ''
    this.birth = ''
    this.gender = ''
  }
  getName(): string {
    return this.name!
  }
  setName(name: string): void {
    this.name = name
  }
  getEmail(): string {
    return this.email!
  }
  setEmail(email: string): void {
    this.email = email
  }
  getPhone(): string {
    return this.phone!
  }
  setPhone(phone: string): void {
    this.phone = phone
  }
  setHomePhone(homePhone: string): void {
    this.homePhone = homePhone
  }

  getBirth(): string {
    return this.birth!
  }
  setBirth(birth: string): void {
    this.birth = birth
  }
  getGender(): string {
    return this.gender!
  }
  setGender(gender: string): void {
    this.gender = gender
  }

  toJson() {
    return {
      name: this.name,
      email: this.email,
      phone: this.phone,
      homePhone: this.homePhone,
      birth: this.birth,
      gender: this.gender
    }
  }
}
export class PersonBuilder {
  private readonly instance: PersonAtom

  constructor() {
    this.instance = {
      name: '',
      email: '',
      phone: '',
      homePhone: '',
      birth: '',
      gender: ''
    }
  }

  name(name: string): PersonBuilder {
    this.instance.name = name
    return this
  }
  email(email: string): PersonBuilder {
    this.instance.email = email
    return this
  }
  phone(phone: string): PersonBuilder {
    this.instance.phone = phone
    return this
  }
  homePhone(homePhone: string): PersonBuilder {
    this.instance.homePhone = homePhone
    return this
  }
  birth(birth: string): PersonBuilder {
    this.instance.birth = birth
    return this
  }
  gender(gender: string): PersonBuilder {
    this.instance.gender = gender
    return this
  }

  build = (): PersonAtom => this.instance
  transform = (): PersonDto => {
    const { name, email, phone, homePhone, birth, gender } = this.instance
    const d = new PersonDto()
    d.setName(name)
    d.setEmail(email)
    d.setPhone(phone)
    d.setHomePhone(homePhone)
    d.setBirth(birth)
    d.setGender(gender)

    return d
  }
}

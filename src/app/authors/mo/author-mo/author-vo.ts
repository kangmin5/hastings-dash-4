import { AirAtom, AirDto, AirBuilder } from 'app/authors/atom/air-atom'
import { PersonAtom, PersonBuilder, PersonDto } from 'app/authors/atom/person-atom'
import { UserAtom, UserBuilder, UserDto } from 'app/authors/atom/user-atom'
import { AdobeAtom, AdobeBuilder, AdobeDto } from 'app/deliveries/atom/adobe-atom'
import { TimeAtom, TimeBuilder, TimeDto } from 'app/utils/atom/time-atom'

export class AuthorVo {
  constructor(
    public air?: AirAtom,
    public person?: PersonAtom,
    public user?: UserAtom,
    public addr?: AdobeAtom,
    public time?: TimeAtom) {}
}

export class AuthorTo {
  air?: AirDto
  person?: PersonDto
  addr?: AdobeDto
  user?: UserDto
  time?: TimeDto
  setAir(air: AirAtom): void {
    this.air = new AirBuilder()
      .id(air.id)

      .transform()
  }
  setPerson(person: PersonAtom): void {
    this.person = new PersonBuilder()
      .name(person.name)
      .email(person.email)
      .phone(person.phone)
      .birth(person.birth)
      .gender(person.gender)
      .transform()
  }
  setAddr(addr: AdobeAtom): void {
    this.addr = new AdobeBuilder().addr(addr.addr).extraAddr(addr.extraAddr).zip(addr.zip).transform()
  }
  setTime(time: TimeAtom): void {
    this.time = new TimeBuilder().createdAt(time.createdAt).updatedAt(time.updatedAt).transform()
  }
  setUser(user: UserAtom): void {
    this.user = new UserBuilder()
    .password(user.password)
    .userId(user.userId)
    .token(user.token)
    .username(user.username)
    .transform()
  }
  toJson() {
    return {
      air: this.air.toJson(),
      person: this.person.toJson(),
      addr: this.addr.toJson(),
      time: this.time.toJson(),
      user: this.user.toJson(),
    }
  }
}

export class AuthorBo {
  private readonly instance: AuthorVo

  constructor() {
    this.instance = {
      air: new AirAtom(),
      person: new PersonAtom(),
      user: new UserAtom(),
      addr: new AdobeAtom(),
      time: new TimeAtom(),

    }
  }

  build(): AuthorVo {
    return this.instance
  }
  transform(): AuthorTo {
    const to = new AuthorTo()
    to.setAir(this.instance.air)
    to.setPerson(this.instance.person)
    to.setUser(this.instance.user)
    to.setAddr(this.instance.addr)
    to.setTime(this.instance.time)
    return to
  }
}

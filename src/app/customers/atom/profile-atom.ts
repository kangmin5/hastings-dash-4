export class ProfileAtom {
  constructor(public profileId?: string) {}
}

export class ProfileDto {
   profileId?: string

  constructor() {
    this.profileId = ''
  }
  getProfileId(): string {
    return this.profileId!
  }
  setProfileId(profileId: string): void {
    this.profileId = profileId
  }

  toJson() {
    return {
      profileId: this.profileId
    }
  }
}

export class ProfileBuilder {
  private readonly instance: ProfileAtom
  constructor() {
    this.instance = {
      profileId: ''
    }
  }
  profileId(profileId: string): ProfileBuilder {
    this.instance.profileId = profileId
    return this
  }

  transform(): ProfileDto {
    const dto = new ProfileDto()
    dto.setProfileId(this.instance.profileId)

    return dto
  }
  build(): ProfileAtom {
    return this.instance
  }
}

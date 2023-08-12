const target = `admin/customers/profile`

export const ProfileUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type ProfileUrl = typeof ProfileUrl[keyof typeof ProfileUrl];

export const ProfileAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type ProfileAction = typeof ProfileAction[keyof typeof ProfileAction];


export const ProfileStrategy = {
  getAllProfiles: "getAllProfiles",
  getProfileById: "getProfileById",
  addProfile: "addProfile",
  alterProfileById: "alterProfileById",
  getProfilesBy: "getProfilesBy",
  delProfileById: "delProfileById",
} as const;
type ProfileStrategy = typeof ProfileStrategy[keyof typeof ProfileStrategy];

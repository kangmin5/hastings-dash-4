const target = `admin/customers/member`

export const MemberUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type MemberUrl = typeof MemberUrl[keyof typeof MemberUrl];

export const MemberAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type MemberAction = typeof MemberAction[keyof typeof MemberAction];


export const MemberStrategy = {
  getAllMembers: "getAllMembers",
  getMemberById: "getMemberById",
  addMember: "addMember",
  alterMemberById: "alterMemberById",
  getMembersBy: "getMembersBy",
  delMemberById: "delMemberById",
} as const;
type MemberStrategy = typeof MemberStrategy[keyof typeof MemberStrategy];

const target = `admin/biz-members/biz`
export const BizUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
  login: `${target}?do=login`,
  logout: `${target}?do=logout`,
} as const;
type BizUrl = typeof BizUrl[keyof typeof BizUrl];

export const BizAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
  login: `${target}-do-login`,
  logout: `${target}-do-logout`,
} as const;
type BizAction = typeof BizAction[keyof typeof BizAction];


export const BizStrategy = {
  getAllBizMembers: "getAllBizMembers",
  getBizById: "getBizById",
  addBiz: "addBiz",
  alterBizById: "alterBizById",
  getBizMembersBy: "getBizMembersBy",
  delBizById: "delBizById",
} as const;
type BizStrategy = typeof BizStrategy[keyof typeof BizStrategy];

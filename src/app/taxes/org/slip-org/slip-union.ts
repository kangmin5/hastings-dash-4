const target = `accounts/slip`

export const SlipUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type SlipUrl = typeof SlipUrl[keyof typeof SlipUrl];

export const SlipAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type SlipAction = typeof SlipAction[keyof typeof SlipAction];


export const SlipStrategy = {
  getAllSlips: "getAllSlips",
  getSlipById: "getSlipById",
  addSlip: "addSlip",
  alterSlipById: "alterSlipById",
  getSlipsBy: "getSlipsBy",
  delSlipById: "delSlipById",
} as const;
type SlipStrategy = typeof SlipStrategy[keyof typeof SlipStrategy];

const target = `pays/pay`

export const PayUrl = { 
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type PayUrl = typeof PayUrl[keyof typeof PayUrl];

export const PayAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-srch`,
} as const;
type PayAction = typeof PayAction[keyof typeof PayAction];


export const PayStrategy = {
  fakePays: "fakePays",
  getAllPays: "getAllPays",
  getPayById: "getPayById",
  addPay: "addPay",
  alterPayById: "alterPayById",
  getPaysBy: "getPaysBy",
  delPayById: "delPayById",
} as const;
type PayStrategy = typeof PayStrategy[keyof typeof PayStrategy];
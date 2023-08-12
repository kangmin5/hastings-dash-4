const target = `accounts/cash`

export const CashUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type CashUrl = typeof CashUrl[keyof typeof CashUrl];

export const CashAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type CashAction = typeof CashAction[keyof typeof CashAction];


export const CashStrategy = {
  getAllCashes: "getAllCashes",
  getCashById: "getCashById",
  addCash: "addCash",
  alterCashById: "alterCashById",
  getCashesBy: "getCashesBy",
  delCashById: "delCashById",
} as const;
type CashStrategy = typeof CashStrategy[keyof typeof CashStrategy];

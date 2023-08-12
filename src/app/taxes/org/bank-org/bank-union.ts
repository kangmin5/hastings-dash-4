const target = `accounts/bank`

export const BankUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type BankUrl = typeof BankUrl[keyof typeof BankUrl];

export const BankAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type BankAction = typeof BankAction[keyof typeof BankAction];


export const BankStrategy = {
  getAllBanks: "getAllBanks",
  getBankById: "getBankById",
  addBank: "addBank",
  alterBankById: "alterBankById",
  getBanksBy: "getBanksBy",
  delBankById: "delBankById",
} as const;
type BankStrategy = typeof BankStrategy[keyof typeof BankStrategy];

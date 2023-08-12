const target = `products/ask`

export const AskUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type AskUrl = typeof AskUrl[keyof typeof AskUrl];

export const AskAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type AskAction = typeof AskAction[keyof typeof AskAction];


export const AskStrategy = {
  getAllAsks: "getAllAsks",
  getAskById: "getAskById",
  addAsk: "addAsk",
  alterAskById: "alterAskById",
  getAsksBy: "getAsksBy",
  delAskById: "delAskById",
} as const;
type AskStrategy = typeof AskStrategy[keyof typeof AskStrategy];

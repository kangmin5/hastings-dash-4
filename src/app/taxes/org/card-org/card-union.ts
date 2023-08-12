const target = `taxes/card`

export const CardUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type CardUrl = typeof CardUrl[keyof typeof CardUrl];

export const CardAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type CardAction = typeof CardAction[keyof typeof CardAction];


export const CardStrategy = {
  getAllCards: "getAllCards",
  getCardById: "getCardById",
  addCard: "addCard",
  alterCardById: "alterCardById",
  getCardsBy: "getCardsBy",
  delCardById: "delCardById",
} as const;
type CardStrategy = typeof CardStrategy[keyof typeof CardStrategy];

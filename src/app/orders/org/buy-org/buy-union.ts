const target = `boards/buy`

export const BuyUrl = { 
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type BuyUrl = typeof BuyUrl[keyof typeof BuyUrl];

export const BuyAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-srch`,
} as const;
type BuyAction = typeof BuyAction[keyof typeof BuyAction];


export const BuyStrategy = {
  fakeBuys: "fakeBuys",
  getAllBuys: "getAllBuys",
  getBuyById: "getBuyById",
  addBuy: "addBuy",
  alterBuyById: "alterBuyById",
  getBuysBy: "getBuysBy",
  delBuyById: "delBuyById",
} as const;
type BuyStrategy = typeof BuyStrategy[keyof typeof BuyStrategy];
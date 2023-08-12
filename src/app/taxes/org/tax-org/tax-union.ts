const target = `accounts/tax`

export const TaxUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type TaxUrl = typeof TaxUrl[keyof typeof TaxUrl];

export const TaxAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type TaxAction = typeof TaxAction[keyof typeof TaxAction];


export const TaxStrategy = {
  getAllTaxes: "getAllTaxes",
  getTaxById: "getTaxById",
  addTax: "addTax",
  alterTaxById: "alterTaxById",
  getTaxesBy: "getTaxesBy",
  delTaxById: "delTaxById",
} as const;
type TaxStrategy = typeof TaxStrategy[keyof typeof TaxStrategy];

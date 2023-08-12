const target = `accounts/refund`

export const RefundUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type RefundUrl = typeof RefundUrl[keyof typeof RefundUrl];

export const RefundAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type RefundAction = typeof RefundAction[keyof typeof RefundAction];


export const RefundStrategy = {
  getAllRefunds: "getAllRefunds",
  getRefundById: "getRefundById",
  addRefund: "addRefund",
  alterRefundById: "alterRefundById",
  getRefundsBy: "getRefundsBy",
  delRefundById: "delRefundById",
} as const;
type RefundStrategy = typeof RefundStrategy[keyof typeof RefundStrategy];

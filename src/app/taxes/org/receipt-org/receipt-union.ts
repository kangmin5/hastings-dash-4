const target = `accounts/receipt`

export const ReceiptUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type ReceiptUrl = typeof ReceiptUrl[keyof typeof ReceiptUrl];

export const ReceiptAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type ReceiptAction = typeof ReceiptAction[keyof typeof ReceiptAction];


export const ReceiptStrategy = {
  getAllReceipts: "getAllReceipts",
  getReceiptById: "getReceiptById",
  addReceipt: "addReceipt",
  alterReceiptById: "alterReceiptById",
  getReceiptsBy: "getReceiptsBy",
  delReceiptById: "delReceiptById",
} as const;
type ReceiptStrategy = typeof ReceiptStrategy[keyof typeof ReceiptStrategy];

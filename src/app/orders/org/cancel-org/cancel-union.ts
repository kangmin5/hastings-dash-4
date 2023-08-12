const target = `cancels/cancel`

export const CancelUrl = { 
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type CancelUrl = typeof CancelUrl[keyof typeof CancelUrl];

export const CancelAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-srch`,
} as const;
type CancelAction = typeof CancelAction[keyof typeof CancelAction];


export const CancelStrategy = {
  fakeCancels: "fakeCancels",
  getAllCancels: "getAllCancels",
  getCancelById: "getCancelById",
  addCancel: "addCancel",
  alterCancelById: "alterCancelById",
  getCancelsBy: "getCancelsBy",
  delCancelById: "delCancelBy",
} as const;
type CancelStrategy = typeof CancelStrategy[keyof typeof CancelStrategy];
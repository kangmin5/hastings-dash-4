const target = `free-orders/free-order`

export const FreeAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-srch`,
  hasFreeNo: `${target}-is-free-order-no`
} as const;
type FreeAction = typeof FreeAction[keyof typeof FreeAction];


export const FreeUrl = { 
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
  hasFreeNo: `${target}?is=free-order-no`
} as const;
type FreeUrl = typeof FreeUrl[keyof typeof FreeUrl];



export const FreeStrategy = {
  fakeFrees: "fakeFrees",
  getAllFrees: "getAllFrees",
  getFreeById: "getFreeById",
  addFree: "addFree",
  alterFreeById: "alterFreeById",
  getFreesBy: "getFreesBy",
  delFreeById: "delFreeById",
} as const;
type FreeStrategy = typeof FreeStrategy[keyof typeof FreeStrategy];
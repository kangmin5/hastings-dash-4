const target = `admin/deliveries/batch`

export const BatchUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type BatchUrl = typeof BatchUrl[keyof typeof BatchUrl];

export const BatchAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type BatchAction = typeof BatchAction[keyof typeof BatchAction];


export const BatchStrategy = {
  getAllBatches: "getAllBatches",
  getBatchById: "getBatchById",
  addBatch: "addBatch",
  alterBatchById: "alterBatchById",
  getBatchesBy: "getBatchesBy",
  delBatchById: "delBatchById",
} as const;
type BatchStrategy = typeof BatchStrategy[keyof typeof BatchStrategy];

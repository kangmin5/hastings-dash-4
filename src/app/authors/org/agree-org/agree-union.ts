const target = `admin/authors/agree`

export const AgreeUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type AgreeUrl = typeof AgreeUrl[keyof typeof AgreeUrl];

export const AgreeAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type AgreeAction = typeof AgreeAction[keyof typeof AgreeAction];


export const AgreeStrategy = {
  getAllAgrees: "getAllAgrees",
  getAgreeById: "getAgreeById",
  addAgree: "addAgree",
  alterAgreeById: "alterAgreeById",
  getAgreesBy: "getAgreesBy",
  delAgreeById: "delAgreeById",
} as const;
type AgreeStrategy = typeof AgreeStrategy[keyof typeof AgreeStrategy];

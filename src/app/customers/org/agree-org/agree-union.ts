const target = `customers/agree`

export const AgreeUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
  getByUser: `${target}?do=srch&aim=user`,
} as const;
type AgreeUrl = typeof AgreeUrl[keyof typeof AgreeUrl];

export const AgreeAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
  getByUser: `${target}-do-get-by-user`,
} as const;
type AgreeAction = typeof AgreeAction[keyof typeof AgreeAction];


export const AgreeStrategy = {
  getAllAgrees: "getAllAgrees",
  getAgreeById: "getAgreeById",
  addAgree: "addAgree",
  alterAgreeById: "alterAgreeById",
  getAgreesBy: "getAgreesBy",
  delAgreeById: "delAgreeById",
  getAgreesByUser: "getAgreesByUser",
} as const;
type AgreeStrategy = typeof AgreeStrategy[keyof typeof AgreeStrategy];
